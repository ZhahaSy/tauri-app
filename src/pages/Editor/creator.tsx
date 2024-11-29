import { PageSchemaProps } from "@/entities/Schema"
import { genPreviewComp } from "./config/commonGenarate";
import useEditorStore from "@/store/useEditorStore";
import classNames from "classnames";

import Styles from './components/PreviewContainer.module.less'

const createBySchema = (schema: PageSchemaProps[]) => {
    if (!schema.length) return null
    const {setActiveComp} = useEditorStore((state) => state)
    const data = schema.map((curNode):React.ReactNode => {
        const {children, element, dropId, id, label} = curNode

        const mergeOnClick =  (e) => {
            setActiveComp(curNode)
            curNode.props?.onClick?.(e)
        }

        const cls = classNames(curNode?.props?.className, Styles.componentWrapper)
        
        return genPreviewComp(element, children ? createBySchema(children) : null, {dropId: dropId, onClick: mergeOnClick, ...curNode.props, className: cls, componentid: id, componentlabel: label})
    })
    return data
};

export default createBySchema