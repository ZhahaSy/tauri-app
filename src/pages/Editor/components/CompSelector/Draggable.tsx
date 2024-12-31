import { useDraggable } from "@dnd-kit/core";
import { PositionType } from "antd/es/image/style";
import { memo, PropsWithChildren } from "react";

interface DraggableProps {
  id: string,
}

const Draggable: React.FC<PropsWithChildren<DraggableProps>> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        position: "relative" as PositionType,
        zIndex: "2",
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
export default memo(Draggable)