import { Popover } from "antd";
import styles from "./index.module.less";
const IconSelect = () => {
  return (
    <Popover content='123' placement="left" trigger='click'>
      <div className={styles.toggle}>
        <div className={styles.iconPreview}></div>
        <div className={styles.iconText}>请选择图标</div>
      </div>
    </Popover>
  );
};
export default IconSelect;
