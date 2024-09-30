import { AttrType } from "@/entities/Schema";
import { Checkbox, Input, InputNumber, Radio, Select, Switch } from "antd";
import IconSelect from "../CustomField/IconSelect";
import FormList from "antd/es/form/FormList";
import { FormListRender } from "./FormList";

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
    [AttrType.LIST]: {
        comp: FormListRender
    },
    [AttrType.ICON_SELECT]: {
        comp: IconSelect
    },
    [AttrType.SELECT]: {
        comp: Select,
    }
}