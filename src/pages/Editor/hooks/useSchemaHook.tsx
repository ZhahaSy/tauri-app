import { PageSchemaProps } from "@/entities/Schema";
import { useState, useRef } from "react"
import { Tree, TreeNode } from "../../../../src-pro-tree";  // 导入 Tree 相关类
import config from '../config'
import { DragEndEvent } from "@dnd-kit/core";
import { EDITOR_ID } from "../constant";

export default () => {
    // 使用 useRef 存储 Tree 实例，避免重渲染时重新创建
    const treeRef = useRef<Tree<PageSchemaProps>>(new Tree<PageSchemaProps>({ id: 'root', label: '页面', key: 'root', element: '' }));
    
    // 使用 state 来触发重渲染
    const [, forceUpdate] = useState({});

    const handleDragEnd = (e: DragEndEvent) => {
        const {over, active} = e;
        if (over) {
            const key = `${active.id}-${Date.now()}`;
            const newData = (config as unknown as Record<string, PageSchemaProps>)[active.id]
            const newNode = {
                ...newData,
                id: key,
                dropId: newData.dropId ? key : undefined,
            }

            if (over.id === EDITOR_ID) {
                // 添加到根节点
                treeRef.current.root.addChild(new TreeNode(newNode, key));
            } else {
                // 添加到指定节点
                const parentNode = treeRef.current.findNodeByUniqueId(over.id as string);
                if (parentNode) {
                    parentNode.addChild(new TreeNode(newNode, key));
                }
            }
            
            // 触发重渲染
            forceUpdate({});
        }
    }

    const updateSchemaProps = (id: string, newData: any) => {
        const node = treeRef.current.findNodeByUniqueId(id);
        if (node) {
            if (node.value.props) {
                node.value.props = { ...node.value.props, ...newData };
            } else {
                node.value.props = newData;
            }
            // 触发重渲染
            forceUpdate({});
        }
    }

    // 将树结构转换为扁平数组（用于兼容现有代码）
    const convertTreeToArray = (node: TreeNode<PageSchemaProps>): PageSchemaProps[] => {
        const result: PageSchemaProps[] = [];
        if (node.value.id !== 'root') {  // 跳过根节点
            const nodeData = {
                ...node.value,
                children: node.children.length > 0 
                    ? node.children.map(child => child.value)
                    : undefined
            };
            result.push(nodeData);
        }
        
        node.children.forEach(child => {
            result.push(...convertTreeToArray(child));
        });
        return result;
    }

    return {
        // 为了保持与原有代码的兼容性，返回扁平化的数组
        schema: convertTreeToArray(treeRef.current.root),
        handleDragEnd,
        updateSchemaProps,
        // 如果需要访问树实例，可以暴露出去
        treeInstance: treeRef.current,
    }
}