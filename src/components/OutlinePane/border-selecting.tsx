import useEditorStore from "@/store/useEditorStore";
import React, { useEffect, useMemo, useState } from "react";
import Toolbar from "./toolbar";
import { Tree } from "../../../src-pro-tree";
import { PageSchemaProps } from "@/entities/Schema";

interface BorderSelectingProps {
  treeInstance: Tree<PageSchemaProps>;
}

const defaultStyle: React.CSSProperties = {
  display: "none",
  position: "absolute",
};

const BorderSelecting: React.FC<BorderSelectingProps> = (props) => {
  const { activeComp } = useEditorStore((state) => state);

  const curElement = useMemo(() => {
    if (activeComp?.id) {
      return document.querySelector(`*[componentid='${activeComp?.id}']`);
    }
    return null;
  }, [activeComp]);

  const [computedActiveStyle, setComputedActiveStyle] = useState<React.CSSProperties>(defaultStyle);

  const config = { attributes: true, childList: true, subtree: true };

  const calculateElementStyle = (element: HTMLElement | null): React.CSSProperties => {
    if (!element) return defaultStyle;
    
    return {
      position: "absolute",
      left: element.offsetLeft,
      top: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  };

  useEffect(() => {
    const element = curElement as HTMLElement | null;
    setComputedActiveStyle(calculateElementStyle(element));

    if (!element) return;

    const observer = new MutationObserver(() => {
      setComputedActiveStyle(calculateElementStyle(element));
    });

    observer.observe(element, config);
    return () => observer.disconnect();
  }, [curElement]);

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
