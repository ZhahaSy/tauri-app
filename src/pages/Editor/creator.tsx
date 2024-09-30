import { PageSchemaProps } from "@/entities/Schema"
import { genCommonComp, genPreviewComp } from "./config/commonGenarate";
import useEditorStore from "@/store/useEditorStore";

import Styles from './components/PreviewContainer.module.less'

const createBySchema = (schema: PageSchemaProps[]) => {
    if (!schema.length) return null
    const {setActiveComp, activeComp} = useEditorStore((state) => state)
    const data = schema.map((curNode):React.ReactNode => {
        const {children, element, dropId, id} = curNode

        const mergeOnClick =  (e) => {
            setActiveComp(curNode)
        }

        const cls = activeComp?.id === id ? Styles.active : ''
        return genPreviewComp(element, children ? createBySchema(children) : null, {dropId: dropId, onClick: mergeOnClick, ...curNode.props, className: cls,})
    })
    return data
};

export default createBySchema