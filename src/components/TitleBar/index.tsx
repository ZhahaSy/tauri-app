import React, { useEffect } from 'react';
import { Tabs } from 'antd';

import styles from './index.module.less';
import useTabsStore from '@/store/useTabsStore';
import { useNavigate } from 'react-router-dom';

type TargetKey = string;

interface CustomTitleBarProps {
    onChange?: (activeKey: string) => void
}

const CustomTitleBar: React.FC<CustomTitleBarProps> = () => {

  const {activeKey, setActiveKey, addItem, removeItem, tabItems } = useTabsStore((state) => state)

  const navigate = useNavigate();

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
    
  };

  useEffect(() => {
    if (activeKey === 'home') {
      navigate('/iHome')
    } else {
      navigate(`/IEditor?id=${activeKey}`)
    }
  }, [activeKey])

  const add = () => {
    addItem({
      key: Date.now().toString(),
      label: 'newPage'+(tabItems.length),
    })
  };

  const remove = (targetKey: TargetKey) => {
    removeItem(targetKey)
  };

  const onEdit = (
    targetKey: string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
      <Tabs
        className={styles.TabWrapper}
        data-tauri-drag-regio={true}
        tabBarStyle={{
          paddingLeft: '100px'
        }}
        size='small'
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={tabItems}
        hideAdd
      />
  );
};

export default CustomTitleBar;