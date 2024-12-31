import { PageSchemaProps } from "@/entities/Schema";
import { genCommonComp } from "./config/commonGenarate";
import useEditorStore from "@/store/useEditorStore";
import classNames from "classnames";

import Styles from "./components/PreviewContainer.module.less";
import { Tree } from "../../../src-pro-tree";
import { memo } from "react";

const CreateBySchema = memo(({
  schema,
  treeInstance,
}: {
  schema: PageSchemaProps[];
  treeInstance: Tree<PageSchemaProps>;
}) => {
  if (!(schema && schema.length)) return null;
  const { setActiveComp } = useEditorStore((state) => state);
  const data = schema.map((curNode): React.ReactNode => {
    const { children, element, droppable, id, label } = curNode;

    const mergeOnClick = (e) => {
      const newCurNode = treeInstance.findNodeByUniqueId(curNode.id)?.value;
      if (newCurNode) {
        setActiveComp(newCurNode);
        newCurNode.props?.onClick?.(e);
      }
    };

    const cls = classNames(curNode?.props?.className, Styles.componentWrapper);

    return genCommonComp(
      element,
      children ? <CreateBySchema schema={children} treeInstance={treeInstance} /> : null,
      {
        droppable: droppable,
        dropId: id,
        onClick: mergeOnClick,
        ...curNode.props,
        className: cls,
        componentid: id,
        componentlabel: label,
        key: id,
      }
    );
  });
  return data;
});

export default CreateBySchema;
