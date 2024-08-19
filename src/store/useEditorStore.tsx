import { create } from 'zustand'
import { PageSchemaProps } from '@/entities/Schema';


interface EditorStore {
  activeComp?: PageSchemaProps;
  setActiveComp: (key: PageSchemaProps) => void;
}

const  initialState = {
  activeComp: undefined,
}

const useEditorStore = create<EditorStore>((set) => ({
  ...initialState,
  setActiveComp: (comp) => {
    set(() => {
      return ({ activeComp: comp});
    })
  },
  clearStore: () => {
    set(() => {
      return (initialState);
    })
  } 
}))
export default useEditorStore