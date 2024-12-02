import { PageSchemaProps } from "@/entities/Schema";
import { useState, useRef } from "react"
import { Tree, TreeNode } from "../../../../src-pro-tree";  // 导入 Tree 相关类
import config from '../config'
import { DragEndEvent } from "@dnd-kit/core";
import { EDITOR_ID } from "../constant";

export default () => {
    const [, forceUpdate] = useState({});
    
    // 创建原始树实例
    const originalTree = new Tree<PageSchemaProps>({ id: 'root', label: '页面', key: 'root', element: '' });
    
    // 创建代理包装 TreeNode 的方法
    const wrapTreeNode = (node: TreeNode<PageSchemaProps>) => {
        return new Proxy(node, {
            get(target, prop) {
                const value = target[prop as keyof TreeNode<PageSchemaProps>];
                if (typeof value === 'function') {
                    return function(...args: any[]) {
                        const result = value.apply(target, args);
                        forceUpdate({});
                        return result;
                    }
                }
                return value;
            }
        });
    };

    // 创建代理包装 Tree 的方法
    const wrappedTree = new Proxy(originalTree, {
        get(target, prop) {
            const value = target[prop as keyof Tree<PageSchemaProps>];
            if (prop === 'root') {
                return wrapTreeNode(value as TreeNode<PageSchemaProps>);
            }
            if (typeof value === 'function') {
                return function(...args: any[]) {
                    const result = value.apply(target, args);
                    if (result instanceof TreeNode) {
                        return wrapTreeNode(result);
                    }
                    forceUpdate({});
                    return result;
                }
            }
            return value;
        }
    });

    // 使用代理后的树实例
    const treeRef = useRef<Tree<PageSchemaProps>>(wrappedTree);

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
        }
        forceUpdate({})
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