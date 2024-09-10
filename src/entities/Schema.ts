export interface PageSchemaProps {
    id: string,
    label: string,
    key: string,
    element: React.ReactNode,
    children?: PageSchemaProps[],
    dropId?: string,
    attrs?: CompAttr[],
    props?: any,
}

interface Option {
    label?: React.ReactNode;
    value?: string | number | null;
}

export enum AttrType {
    TEXT,
    SWITCH,
    NUMBER,
    RADIO,
    CHECKBOX,
    CODE,
    STRING_LIST,
    RADIO_GROUP,
    ICON_SELECT,
}
export interface CompAttr {
    type: AttrType,
    label: string,
    name: string,
    options?: Option[],
    fieldProps: Record<string, any>
}