import React, { Fragment } from "react";
import BorderSelecting from "./border-selecting";
import BorderHover from "./border-hover";

interface OutlinePaneProps {}

const OutlinePane: React.FC<OutlinePaneProps> = () => {

  return (
      <Fragment>
        <BorderSelecting/>
        <BorderHover/>
      </Fragment>
  );
};

export default OutlinePane;
