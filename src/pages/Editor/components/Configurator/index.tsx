import { PageSchemaProps } from "@/entities/Schema";
import useEditorStore from "@/store/useEditorStore";

interface ConfiguratorProps {
}
const Configurator: React.FC<ConfiguratorProps> =  (props) => {
    const {activeComp} = useEditorStore(state => state)
    console.log(props);
    
    return activeComp?.label
}

export default Configurator;