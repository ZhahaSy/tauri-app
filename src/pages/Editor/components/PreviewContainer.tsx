import { PageSchemaProps } from "@/entities/Schema"
import Droppable from "./Droppable"
import createBySchema from "../creator"
import { Empty } from "antd"

import Styles from './PreviewContainer.module.less'
import { EDITOR_ID } from '../constant'
import OutlinePane from "@/components/OutlinePane"

interface PreviewContainerProps {
    pageSchema: PageSchemaProps[]
}

const PreviewContainer: React.FC<PreviewContainerProps> = (props) => {

    const {pageSchema} = props
    const child = pageSchema ? createBySchema(pageSchema) : null
    return <Droppable id={EDITOR_ID} style={{
        display: 'block',
        height: 'calc(100vh - 28px)',
        position:'relative'
    }}>
            {child ? <div className={Styles.previewer}>{child}</div> : <div className={Styles.empty}><Empty/></div>}
            <OutlinePane/>
    </Droppable>

}

export default PreviewContainer