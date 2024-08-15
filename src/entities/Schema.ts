export interface PageSchemaProps {
    id: string,
    label: string,
    key: string,
    element: React.ReactNode,
    children?: PageSchemaProps[],
    dropId?: string,
}