import useEditorStore from "@/store/useEditorStore";
import React, { useMemo } from "react";

interface BorderSelectingProps {}

const BorderSelecting: React.FC<BorderSelectingProps> = () => {
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
          border: "1px dashed #2191f3",
          zIndex: 2024,
        }}
      />
  );
};

export default BorderSelecting;
