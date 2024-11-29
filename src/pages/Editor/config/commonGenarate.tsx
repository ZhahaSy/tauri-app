import React, { useMemo } from "react"
import Droppable from "../components/Droppable"

export const genPreviewComp = (elm: any,children: React.ReactNode, props: any) => {
    const mergeChild = genCommonComp(elm, children, {
        ...props,
    })

    return mergeChild;
    // if (props.dropId) {
    //     return <Droppable className={props.className} id={props.dropId} pre-comp-wrap="111">{mergeChild}</Droppable>
    // }
    // return <span onClick={props.onClick} className={props.className}  style={{display: 'block'}} pre-comp-wrap="111">{mergeChild}</span>
}

export const genCommonComp = (elm: any,children: React.ReactNode, props: any) => {
    return React.cloneElement(elm, {
        ...props, children: props.children || children || elm.props.children
    })
}
