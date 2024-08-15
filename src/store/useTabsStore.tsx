import { create } from 'zustand'
import { HomeOutlined } from '@ant-design/icons'

const initialItems = [
  { label: <HomeOutlined />, key: 'home', closable: false },
];

interface TabItem {
  label: string | React.ReactNode;
  key: string;
  closable?: boolean
}

interface TabsStore {
  activeKey: string;
  setActiveKey: (key: string) => void;
  tabItems: TabItem[];
  addItem: (item: TabItem) => void;
  removeItem: (key: string) => void;
}

const useTabsStore = create<TabsStore>((set) => ({
  activeKey: initialItems[0].key,
  setActiveKey: (key) => {
    set(() => {
      return ({ activeKey: key});
    })
  },
  tabItems: [...initialItems],
  addItem: (item) => {
    set((state) => {
      return ({ tabItems: [...state.tabItems, item], activeKey: item.key});
    })
  },
  removeItem: (key) => {
    set(({tabItems, activeKey}) => {
      const idx = tabItems.findIndex((item) => item.key === key)
      return ({ tabItems: tabItems.toSpliced(idx, 1), activeKey: activeKey === key ? tabItems[0].key : activeKey });
    })
  }
}))
export default useTabsStore