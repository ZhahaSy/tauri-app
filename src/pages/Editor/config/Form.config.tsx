import { AttrType } from "@/entities/Schema";
import FormRender from "@/components/FormRender";

export default {
  label: "Form",
  key: "vol-form",
  element: <FormRender onChange={() => {}} />,
  attrs: [
    {
      label: "表单列表",
      name: "attrs",
      type: AttrType.LIST,
      initVal: [],
      fieldProps: {
        defaultVal: { type: AttrType.TEXT, label: "默认组件", name: "field1" },
        label: "表单列表",
        name: "attrs",
        attrs: [
          {
            label: "表单名",
            name: "label",
            type: AttrType.TEXT,
          },
          {
            label: "字段名",
            name: "name",
            type: AttrType.TEXT,
          },
          {
            label: "类型",
            name: "type",
            type: AttrType.SELECT,
            fieldProps: {
              options: [
                { label: "文本输入框", value: AttrType.TEXT },
                { label: "数字输入框", value: AttrType.NUMBER },
                { label: "开关", value: AttrType.SWITCH },
                { label: "icon选择器", value: AttrType.ICON_SELECT },
                { label: "下拉框", value: AttrType.SELECT },
                { label: "多选框", value: AttrType.CHECKBOX },
              ],
            },
            initVal: AttrType.TEXT,
          },
        ],
      },
    },
  ],
};
