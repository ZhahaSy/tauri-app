import { PageSchemaProps } from "@/entities/Schema"
import Droppable from "./Droppable"
import CreateBySchema from "../creator"
import { Empty } from "antd"

import Styles from './PreviewContainer.module.less'
import { EDITOR_ID } from '../constant'
import OutlinePane from "@/components/OutlinePane"
import { Tree } from "../../../../src-pro-tree"
import { memo } from "react"

interface PreviewContainerProps {
    pageSchema: PageSchemaProps[];
    treeInstance: Tree<PageSchemaProps>
}

const PreviewContainer: React.FC<PreviewContainerProps> = (props) => {

    const {pageSchema, treeInstance} = props
    const child = pageSchema ? <CreateBySchema schema={pageSchema} treeInstance={treeInstance} /> : null
    return <Droppable id={EDITOR_ID} style={{
        display: 'block',
        height: 'calc(100vh - 28px)',
        position:'relative'
    }}>
            {child ? <div className={Styles.previewer}>{child}</div> : <div className={Styles.empty}><Empty description='请拖入组件'/></div>}
            <OutlinePane treeInstance={treeInstance}/>
    </Droppable>

}
export default memo(PreviewContainer)