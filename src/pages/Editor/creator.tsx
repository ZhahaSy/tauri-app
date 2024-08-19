import { PageSchemaProps } from "@/entities/Schema"
import { genCommonComp, genPreviewComp } from "./config/commonGenarate";
import useEditorStore from "@/store/useEditorStore";

const createBySchema = (schema: PageSchemaProps[]) => {
    if (!schema.length) return null
    const {setActiveComp} = useEditorStore((state) => state)
    const data = schema.map((curNode):React.ReactNode => {
        const {children, element, dropId} = curNode

        const mergeOnClick =  (e) => {
            setActiveComp(curNode)
        } 
        return genPreviewComp(element, children ? createBySchema(children) : null, {dropId: dropId, onClick: mergeOnClick})
    })
    return data
};

export default createBySchema