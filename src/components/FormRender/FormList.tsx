import { AttrType, CompAttr } from "@/entities/Schema";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Space, SpaceProps } from "antd";
import FormItemRender from "./FormItemRender";
import { FormListProps } from "antd/es/form";
import classNames from "classnames";

import Styles from './index.module.less'

interface FormListRenderProps extends FormListProps {
  attrs: CompAttr[];
  defaultVal: { type: AttrType.TEXT };
  spaceProps: SpaceProps;
}

export const FormListRender: React.FC<FormListRenderProps> = ({
  attrs,
  defaultVal,
  spaceProps,
  ...restProps
}) => {
  const spaceClassNames = classNames({
    [Styles.spaceVertical]: spaceProps.direction === "vertical",
  });
  return (
    <Form.List {...restProps}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              className={spaceClassNames}
              {...spaceProps}
              key={key || name}
              style={{ display: "flex", paddingLeft: "12px" }}
              align="baseline"
            >
              {attrs.map((attr) => {
                return (
                  <FormItemRender
                    {...restField}
                    attr={{
                      ...attr,
                      name: [name, attr.name],
                    }}
                  />
                );
              })}
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add({ ...defaultVal })}
              block
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};
