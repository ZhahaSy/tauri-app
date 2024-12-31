import { CompAttr } from "@/entities/Schema";
import { Form, FormProps } from "antd";
import FormItemRender from "./FormItemRender";

interface FormRenderProps extends FormProps {
  attrs?: CompAttr[];
  onChange: (values: any) => void;
  emptyText?: string;
}

const FormRender: React.FC<FormRenderProps> = ({
  attrs = [],
  onChange,
  emptyText,
  ...resetProps
}) => {
  let initVal: any = {};

  return (
    <Form
      {...resetProps}
      layout="vertical"
      size="small"
      onValuesChange={onChange}
      initialValues={initVal}
    >
      {attrs.length ? attrs.map((item) => {
        return <FormItemRender key={item.name} attr={item} />;
      }) : <div>{emptyText || '请增加组件'}</div>}
    </Form>
  );
};

export default FormRender;
