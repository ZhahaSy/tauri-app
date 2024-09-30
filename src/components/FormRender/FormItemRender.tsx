import { CompAttr } from "@/entities/Schema";
import { Form, FormItemProps } from "antd";
import { FormFieldMap } from "./FieldsMap";

interface FormItemRenderProps extends FormItemProps {
  attr: CompAttr;
}

const FormItemRender: React.FC<FormItemRenderProps> = ({ attr, ...restFields }) => {
  
  const Comp = FormFieldMap[attr.type]?.comp;
  const defaultProps = FormFieldMap[attr.type]?.defaultProps || {};
  return (
    <Form.Item
      {...restFields}
      key={attr.name}
      label={attr.label}
      name={attr.name}
      initialValue={attr.initVal}
    >
      {Comp ? <Comp {...defaultProps} {...(attr.fieldProps || {})}></Comp> : null}
    </Form.Item>
  );
};

export default FormItemRender;
