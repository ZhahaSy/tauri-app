import React, { Fragment } from "react";
import BorderSelecting from "./border-selecting";
import BorderHover from "./border-hover";
import { Tree } from "../../../src-pro-tree";
import { PageSchemaProps } from "@/entities/Schema";

interface OutlinePaneProps {
  treeInstance: Tree<PageSchemaProps>
}

const OutlinePane: React.FC<OutlinePaneProps> = ({treeInstance}) => {

  return (
      <Fragment>
        <BorderSelecting treeInstance={treeInstance}/>
        <BorderHover/>
      </Fragment>
  );
};

export default OutlinePane;
