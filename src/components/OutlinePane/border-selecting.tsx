import useEditorStore from "@/store/useEditorStore";
import React, { useMemo } from "react";
import Toolbar from "./toolbar";
import { Tree } from "../../../src-pro-tree";
import { PageSchemaProps } from "@/entities/Schema";

interface BorderSelectingProps {
  treeInstance: Tree<PageSchemaProps>
}

const BorderSelecting: React.FC<BorderSelectingProps> = (props) => {
  const { activeComp } = useEditorStore((state) => state);

  const computedActiveStyle: React.CSSProperties = useMemo(() => {
    if (!activeComp) return { display: "none", position: "absolute" };

    const curNode = document.querySelector(`*[componentid='${activeComp.id}']`);
    return {
      position: "absolute",
      left: (curNode as HTMLElement)?.offsetLeft,
      top: (curNode as HTMLElement)?.offsetTop,
      width: (curNode as HTMLElement)?.offsetWidth,
      height: (curNode as HTMLElement)?.offsetHeight,
    };
  }, [activeComp]);

  return (
    <div
      style={{
        ...computedActiveStyle,
        border: "2px dashed #2191f3",
        zIndex: 2024,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "-24px",
        }}
      >
        {/* 工具栏 */}
        <Toolbar treeInstance={props.treeInstance} />
      </div>
    </div>
  );
};

export default BorderSelecting;
