import React from "react";

export const genCommonComp = (
  elm: any,
  children: React.ReactNode,
  props: any
) => {
  return React.cloneElement(elm, {
    ...props,
    children: props.children || children || elm.props.children,
  });
};
