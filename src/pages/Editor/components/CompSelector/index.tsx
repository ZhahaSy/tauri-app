import Draggable from './Draggable'
import Styles from './index.module.less'
const compList = [
    {
        label: 'Button',
    },
    {
        label: 'Select',
    },
    {
        label: 'Picker',
    },
    {
        label: 'Input',
    }
]

const CompSelector = () => {
    return <ul className={Styles.listWrap}>
        {compList.map((item) => {
            return <Draggable id={item.label}><li className={Styles.listItem} key={item.label}>{item.label}</li></Draggable> 
        })}
    </ul>
}

export default CompSelector