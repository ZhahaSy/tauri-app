import { AttrType } from "@/entities/Schema";
import { Input } from "antd";

export default {
  label: "Input",
  key: "vol-input",
  element: <Input placeholder="请输入" />,
  attrs: [
    {
      label: "提示词",
      name: "placeholder",
      type: AttrType.TEXT,
      initVal: "按钮",
    },
    {
      label: "前缀图标",
      name: "prefix",
      type: AttrType.ICON_SELECT,
      initVal: null,
    },
    {
      label: "后缀图标",
      name: "suffix",
      type: AttrType.ICON_SELECT,
      initVal: null,
    },
    {
      label: "最大长度",
      name: "maxLength",
      type: AttrType.NUMBER,
      initVal: undefined,
    },
    {
      label: "是否展示字数",
      name: "showCount",
      type: AttrType.SWITCH,
      initVal: true,
    },
    {
      label: "清除图标",
      name: "allowClear",
      type: AttrType.SWITCH,
      initVal: false,
    },
    {
      label: "disabled",
      name: "disabled",
      type: AttrType.SWITCH,
      initVal: false,
    },
    {
      label: "大小",
      name: "size",
      type: AttrType.RADIO_GROUP,
      fieldProps: {
        options: [
          { label: "large", value: "large" },
          { label: "middle", value: "middle" },
          { label: "small", value: "small" },
        ],
      },
      initVal: undefined,
    },
  ],
};
