import { useDroppable } from "@dnd-kit/core";
import { CSSProperties, PropsWithChildren } from "react";

interface DroppableProps {
  id: string,
  style?: CSSProperties,
}

const  Droppable: React.FC<PropsWithChildren<DroppableProps>> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  
  const style = {
    background: isOver ? "green" : undefined,
    ...props.style,
  };

  return (
    <span {...props} ref={setNodeRef} style={style} >
      {props.children}
    </span>
  );
}
export default Droppable