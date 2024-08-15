import readXlsxFile from 'read-excel-file'

export default async(file: File) => {
    const res = await readXlsxFile(file)
    return res
}