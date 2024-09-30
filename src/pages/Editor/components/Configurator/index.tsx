import useEditorStore from "@/store/useEditorStore";
import FormRender from "@/components/FormRender";
import { Form } from "antd";

interface ConfiguratorProps {
    updateSchemaProps: (id: string, data: any) => void
}
const Configurator: React.FC<ConfiguratorProps> =  ({updateSchemaProps}) => {

    const [form] = Form.useForm()
    const {activeComp} = useEditorStore(state => state)

    const handleChange = (values: any) => {    
        updateSchemaProps(activeComp?.id!, form.getFieldsValue())
    }
    
    return <div style={{padding: '10px'}}>
        <FormRender form={form} attrs={activeComp?.attrs || []} onChange={handleChange} />
    </div>
}

export default Configurator;