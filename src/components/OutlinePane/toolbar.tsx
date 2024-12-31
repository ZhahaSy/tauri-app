import useEditorStore from "@/store/useEditorStore";
import { DeleteOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { Tree } from "../../../src-pro-tree";
import { PageSchemaProps } from "@/entities/Schema";
import { FC } from "react";

interface ToolbarProps {
  treeInstance: Tree<PageSchemaProps>;
}

const Toolbar: FC<ToolbarProps> = ({ treeInstance }) => {
  const { activeComp, clearStore, setActiveComp } = useEditorStore(
    (state) => state
  );
  const onDelete = () => {
    if (activeComp && treeInstance) {
      treeInstance?.removeNodeByUniqueId(activeComp.id);
      clearStore();
    }
  };
  const onSelectParent = () => {
    if (activeComp && treeInstance) {
      const parentNode = treeInstance.findNodeByUniqueId(activeComp.id)?.parent;
      if (parentNode) {
        setActiveComp(parentNode.value);
      }
    }
  };

  return (
    <div style={{background: '#2191f3', color: 'white', display: 'flex', height: '100%', gap: '12px', padding: '5px'}}>
      {/* delete */}
      <DeleteOutlined onClick={onDelete} title="删除" />
      {/* selectParent */}
      <VerticalAlignTopOutlined onClick={onSelectParent} title="选择父级" />
    </div>
  );
};
export default Toolbar;
