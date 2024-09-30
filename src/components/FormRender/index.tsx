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
  // attrs.forEach((item) => {
  //   initVal[item.name] = item.initVal;
  // });

  if (!attrs.length) return <div>请插入组件</div>;

  return (
    <Form
      {...resetProps}
      layout="vertical"
      size="small"
      onValuesChange={onChange}
      initialValues={initVal}
    >
      {attrs.map((item) => {
        return <FormItemRender attr={item} />;
      })}
    </Form>
  );
};

export default FormRender;
