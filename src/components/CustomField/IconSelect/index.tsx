import { Popover, Segmented } from "antd";
import styles from "./index.module.less";
import { allIcons, Icon, IconList } from "./IconList";
import React, { ReactNode, useMemo, useState } from "react";

const IconSelect = ({
  value,
  onChange,
}: {
  value?: ReactNode;
  onChange: (value?: ReactNode) => void;
}) => {
  const [name, setName] = useState("");

  const handleClick = (val: string) => {
    setName(val);
    onChange(allIcons[val]? React.createElement(allIcons[val], {style: {fontSize: '16px'}}) : null);
  };
  return (
    <Popover
      content={<IconList handleClick={handleClick} />}
      placement="leftTop"
      trigger="click"
    >
      <div className={styles.toggle}>
        <div className={styles.iconPreview}>
          <Icon
            style={{
              fontSize: "15px",
              padding: "2px 5px",
            }}
            name={name}
          />
        </div>
        <div className={styles.iconText}>{name || "请选择图标"}</div>
      </div>
    </Popover>
  );
};
export default IconSelect;
