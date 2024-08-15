import { PageSchemaProps } from "@/entities/Schema";
import { useState } from "react"

import config from '../config'
import { DragEndEvent } from "@dnd-kit/core";
import { EDITOR_ID } from "../Constant";

import treeTool from 'tree-tool';

export default () => {
    const [schema, setSchema] = useState<PageSchemaProps[]>([]);

    const handleDragEnd = (e: DragEndEvent) => {

        const {over, active} = e;
        if (over) {
            const key = `${active.id}-${Date.now()}`;
            const newData = (config as unknown as Record<string, PageSchemaProps>)[active.id]
            const newNode = {
                ...newData,
                id: key,
                dropId: key
            }
            switch (over.id) {
                case EDITOR_ID:
                    
                    setSchema([...schema, newNode])
                    break;

                default:
                    // 通过overId 
                    const curNode = treeTool.findNode(schema, (node: PageSchemaProps) => {
                        return node.id === over.id
                    })
                    if (curNode.children) {
                        curNode.children.push(newNode)
                    } else {
                        curNode.children = [newNode]
                    }
                    setSchema([...schema])
                    break;
            }

            
        }
    }

    return {
        schema,
        handleDragEnd,
    }
}