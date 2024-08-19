import { AttrType, PageSchemaProps } from "@/entities/Schema";
import { Button } from "antd";

export default {
    label: 'Button',
    key: 'vol-btn',
    element: <Button>default</Button>,
    dropId: 'Button',
    attrs: [
        {
            label: '是否开启汉字空格',
            name: 'autoInsertSpace',
            type: AttrType.SWITCH,
        },
        {
            label: '是否 block',
            name: 'block',
            type: AttrType.SWITCH,
        },
        {
            label: '是否 dange',
            name: 'danger',
            type: AttrType.SWITCH,
        },
    ]
} as unknown as PageSchemaProps