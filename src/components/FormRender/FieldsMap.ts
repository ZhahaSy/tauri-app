import { AttrType } from "@/entities/Schema";
import { Checkbox, Input, InputNumber, Radio, Switch } from "antd";
import IconSelect from "../CustomField/IconSelect";

interface DataType {
    comp: any,
    defaultProps?: Record<string, any>
}

export const FormFieldMap: Record<AttrType, DataType> = {
    [AttrType.TEXT]: {
        comp: Input
    },
    [AttrType.CHECKBOX]: {
        comp: Checkbox
    },
    [AttrType.CODE]: {
        comp: Input.TextArea
    },
    [AttrType.NUMBER]: {
        comp: InputNumber
    },
    [AttrType.RADIO]: {
        comp: Radio
    },
    [AttrType.RADIO_GROUP]: {
        comp: Radio.Group,
        defaultProps: {
            optionType: "button",
        }
    },
    [AttrType.SWITCH]: {
        comp: Switch
    },
    // @TODO
    [AttrType.STRING_LIST]: {
        comp: Input
    },
    [AttrType.ICON_SELECT]: {
        comp: IconSelect
    }
}