import { CompAttr } from "@/entities/Schema";
import { Form } from "antd";
import { FormFieldMap } from "./FieldsMap";


interface FormRenderProps {
    attrs: CompAttr[],
    onChange:  (values: any) => void
}

const FormRender: React.FC<FormRenderProps> = ({attrs, onChange}) => {
    return <Form layout="vertical" size="small" onValuesChange={onChange}>
        {attrs.map((item) => {
            const Comp = FormFieldMap[item.type].comp
            const defaultProps = FormFieldMap[item.type].defaultProps || {}
            return <Form.Item key={item.name} label={item.label} name={item.name}>
                {<Comp  {...defaultProps} {...item.fieldProps  || {}}></Comp>}
            </Form.Item>
        })}
    </Form>
}

export default FormRender;