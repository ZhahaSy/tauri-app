import { AttrType, PageSchemaProps } from "@/entities/Schema";
import { Button } from "antd";

export default {
  label: "Button",
  key: "vol-btn",
  element: <Button children="按钮" />,
  dropId: "Button",
  attrs: [
    {
      label: "按钮内容",
      name: "children",
      type: AttrType.TEXT,
      initVal: '按钮'
    },
    {
      label: "图标",
      name: "icon",
      type: AttrType.ICON_SELECT,
      initVal: null,
    },
    {
      label: "是否开启汉字空格",
      name: "autoInsertSpace",
      type: AttrType.SWITCH,
      initVal: false,
    },
    {
      label: "是否 block",
      name: "block",
      type: AttrType.SWITCH,
      initVal: true,
    },
    {
      label: "是否 danger",
      name: "danger",
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
      label: "幽灵模式",
      name: "ghost",
      type: AttrType.SWITCH,
      initVal: false,
    },
    {
      label: "href",
      name: "href",
      type: AttrType.TEXT,
      initVal: false,
    },
    {
      label: "形状",
      name: "shape",
      type: AttrType.RADIO_GROUP,
      fieldProps: {
        options: [
          { label: "default", value: "default" },
          { label: "circle", value: "circle" },
          { label: "round", value: "round" },
        ],
      },
      initVal: undefined,
    },
    {
        label: "类型",
        name: "type",
        type: AttrType.RADIO_GROUP,
        fieldProps: {
          options: [
            { label: "primary", value: "primary" },
            { label: "dashed", value: "dashed" },
            { label: "link", value: "link" },
            { label: "text", value: "text" },
            { label: "default", value: "default" },
          ],
        },
        initVal: undefined,
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
} as unknown as PageSchemaProps;
