import { PageSchemaProps } from "@/entities/Schema"
import { genCommonComp, genPreviewComp } from "./config/commonGenarate";

const createBySchema = (schema: PageSchemaProps[]) => {
    if (!schema.length) return null
    const data = schema.map(({children, element, dropId}):React.ReactNode => {
        return genPreviewComp(element, children ? createBySchema(children) : null, {dropId: dropId})
    })
    return data
};

export default createBySchema