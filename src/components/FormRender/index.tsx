import { CompAttr } from "@/entities/Schema";
import { Form, FormProps } from "antd";
import FormItemRender from "./FormItemRender";

interface FormRenderProps extends FormProps {
  attrs?: CompAttr[];
  onChange: (values: any) => void;
}

const FormRender: React.FC<FormRenderProps> = ({
  attrs = [],
  onChange,
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
      }) : <div>请插入组件</div>}
    </Form>
  );
};

export default FormRender;
