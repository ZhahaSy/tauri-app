import useEditorStore from "@/store/useEditorStore";
import FormRender from "@/components/FormRender";

interface ConfiguratorProps {
    updateSchemaProps: (id: string, data: any) => void
}
const Configurator: React.FC<ConfiguratorProps> =  ({updateSchemaProps}) => {
    const {activeComp} = useEditorStore(state => state)

    const handleChange = (values: any) => {
        updateSchemaProps(activeComp?.id!, values)
    }
    
    return <div style={{padding: '10px'}}>
        <FormRender attrs={activeComp?.attrs || []} onChange={handleChange} />
    </div>
}

export default Configurator;