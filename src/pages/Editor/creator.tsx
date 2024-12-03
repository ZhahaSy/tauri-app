import { PageSchemaProps } from "@/entities/Schema";
import { genPreviewComp } from "./config/commonGenarate";
import useEditorStore from "@/store/useEditorStore";
import classNames from "classnames";

import Styles from "./components/PreviewContainer.module.less";
import { Tree } from "../../../src-pro-tree";

const createBySchema = (
  schema: PageSchemaProps[],
  treeInstance: Tree<PageSchemaProps>
) => {
  if (!schema.length) return null;
  const { setActiveComp } = useEditorStore((state) => state);
  const data = schema.map((curNode): React.ReactNode => {
    const { children, element, dropId, id, label } = curNode;

    const mergeOnClick = (e) => {
      const newCurNode = treeInstance.findNodeByUniqueId(curNode.id)?.value;
      if (newCurNode) {
        setActiveComp(newCurNode);
        newCurNode.props?.onClick?.(e);
      }
    };

    const cls = classNames(curNode?.props?.className, Styles.componentWrapper);

    return genPreviewComp(element, children ? createBySchema(children, treeInstance) : null, {
      dropId: dropId,
      onClick: mergeOnClick,
      ...curNode.props,
      className: cls,
      componentid: id,
      componentlabel: label,
      key: id,
    });
  });
  return data;
};

export default createBySchema;
