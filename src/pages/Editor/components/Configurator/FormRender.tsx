import { AttrType, CompAttr } from "@/entities/Schema";
import { Form, Input, InputNumber, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";


interface FormRenderProps {
    attrs: CompAttr[],
    onChange:  (values: any) => void
}

const getCompByType = (type: AttrType, options: any) => {
    switch (type) {
        case AttrType.SWITCH:
            return <Switch />
        case AttrType.CHEBOX:
            return <Select mode="multiple" options={options}/>
        case AttrType.CODE:
            // @TODO 待增加 代码编辑组件
            return <TextArea />
        case AttrType.NUMBER:
            return <InputNumber />
        case AttrType.RADIO:
            return <Select options={options}/>
        case AttrType.TEXT:
            return <Input />
        default:
            return 'stringList  暂未开发'
            break;
    }
}

const FormRender: React.FC<FormRenderProps> = ({attrs, onChange}) => {
    return <Form onValuesChange={onChange}>
        {attrs.map((item) => {
            return <Form.Item key={item.name} label={item.label} name={item.name}>
                {getCompByType(item.type, item.options)}
            </Form.Item>
        })}
    </Form>
}

export default FormRender;