import { Button, Upload } from "antd"
import excelReader from "../../utils/excelReader"
// import xlsxCreator from "../../utils/xlsxCreator"


export default () => {
    const handleFileChange = async(file: File) => {
        const res = await excelReader(file)
        console.log(res);
        return res
    }
    // const handleCreate = () => {
    //     xlsxCreator()
    // }
    
    return <>
        <Upload beforeUpload={handleFileChange}>
            <Button>upload</Button>
        </Upload>
        {/* <Button onClick={handleCreate}>creator</Button> */}
    </>
}