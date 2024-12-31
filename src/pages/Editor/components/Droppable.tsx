import { useDroppable } from "@dnd-kit/core";
import { CSSProperties, PropsWithChildren } from "react";
interface DroppableProps {
  id: string,
  style?: CSSProperties,
  className?: string,
}

const  Droppable: React.FC<PropsWithChildren<DroppableProps>> = (props) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  
  const style = {
    minWidth: '500px',
    minHeight: '20px',
    ...props.style,
  };

  return (
    <span {...props} ref={setNodeRef} style={style} >
      {props.children}
    </span>
  );
}
export default Droppable