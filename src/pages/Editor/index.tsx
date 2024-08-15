import { Layout } from "antd"
import { useSearchParams } from "react-router-dom"
import CompSelector from "./components/CompSelector"
import PreviewContainer from "./components/previewContainer"

import config from './config'

import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import ButtonConfig from "./config/Button.config"
import useSchemaHook from "./hooks/useSchemaHook"

const {Content, Sider} = Layout;

const containerBG = '#fff'

const Editor = () => {
    const [params] =  useSearchParams()

    const id = params.get('id')

    const {schema, handleDragEnd} = useSchemaHook();


    return <Layout 
            style={{
                flex: '1',
                height: '100%'
            }}
    >
        <DndContext onDragEnd={handleDragEnd}>
            <Sider style={{
                background: containerBG,
                marginRight: '10px',
                borderRight: '1px solid #f5f5f5'
            }}>
                <CompSelector />
            </Sider>
            <Content style={{
                background: containerBG
            }}>
                <PreviewContainer pageSchema={schema} ></PreviewContainer>
            </Content>
        </DndContext>
    </Layout>
}

export default Editor