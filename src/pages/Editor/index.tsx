import { Layout } from "antd"
import { useSearchParams } from "react-router-dom"
import CompSelector from "./components/CompSelector"
import Configurator from "./components/Configurator"
import PreviewContainer from "./components/PreviewContainer"


import { DndContext } from "@dnd-kit/core";
import useSchemaHook from "./hooks/useSchemaHook"

const {Content, Sider} = Layout;

const containerBG = '#fff'

const Editor = () => {
    const [params] =  useSearchParams()

    const id = params.get('id')

    const {schema, handleDragEnd, updateSchemaProps} = useSchemaHook();


    return <Layout 
            style={{
                flex: '1',
                height: '100%'
            }}
    >
        <DndContext onDragEnd={handleDragEnd}>
            <Sider width='15%' style={{
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
            <Sider width='15%' style={{
                background: containerBG,
                marginLeft: '10px',
                borderRight: '1px solid #f5f5f5'
            }}>
                <Configurator updateSchemaProps={updateSchemaProps} />
            </Sider>
        </DndContext>
    </Layout>
}

export default Editor