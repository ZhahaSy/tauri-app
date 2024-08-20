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
    CHEBOX,
    CODE,
    STRING_LIST
}
export interface CompAttr {
    type: AttrType,
    label: string,
    name: string,
    options?: Option[],
}