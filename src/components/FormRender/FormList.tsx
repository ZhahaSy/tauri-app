import { AttrType, CompAttr } from "@/entities/Schema";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Space } from "antd"
import FormItemRender from "./FormItemRender";
import { FormListProps } from "antd/es/form";

interface FormListRenderProps extends FormListProps {
    attrs: CompAttr[];
    defaultVal: {type: AttrType.TEXT}
  }

export const FormListRender: React.FC<FormListRenderProps> = ({attrs,defaultVal, ...resetProps}) => {
  
    return <Form.List {...resetProps}>
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
            {attrs.map((attr) => {
                return <FormItemRender {...restField} attr={{
                    ...attr,
                    name: [name, attr.name]
                }}/>
            })}
            <MinusCircleOutlined onClick={() => remove(name)} />
          </Space>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={() => add({...defaultVal})} block icon={<PlusOutlined />}>
            Add field
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
}