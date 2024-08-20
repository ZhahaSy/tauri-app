import { AttrType, PageSchemaProps } from "@/entities/Schema";
import { Button } from "antd";

export default {
  label: "Button",
  key: "vol-btn",
  element: <Button>default</Button>,
  dropId: "Button",
  attrs: [
    {
      label: "是否开启汉字空格",
      name: "autoInsertSpace",
      type: AttrType.SWITCH,
    },
    {
      label: "是否 block",
      name: "block",
      type: AttrType.SWITCH,
    },
    {
      label: "是否 dange",
      name: "danger",
      type: AttrType.SWITCH,
    },
    {
      label: "disabled",
      name: "disabled",
      type: AttrType.SWITCH,
    },
    {
      label: "幽灵模式",
      name: "ghost",
      type: AttrType.SWITCH,
    },
    {
      label: "href",
      name: "href",
      type: AttrType.TEXT,
    },
    {
      label: "形状",
      name: "shape",
      type: AttrType.RADIO,
      options: [
        { label: "default", value: "default" },
        { label: "circle", value: "circle" },
        { label: "round", value: "round" },
      ],
    },
    {
        label: "类型",
        name: "type",
        type: AttrType.RADIO,
        options: [
          { label: "primary", value: "primary" },
          { label: "dashed", value: "dashed" },
          { label: "link", value: "link" },
          { label: "text", value: "text" },
          { label: "default", value: "default" },
        ],
      },
      {
        label: "大小",
        name: "size",
        type: AttrType.RADIO,
        options: [
          { label: "large", value: "large" },
          { label: "middle", value: "middle" },
          { label: "small", value: "small" },
        ],
      },
      
  ],
} as unknown as PageSchemaProps;
