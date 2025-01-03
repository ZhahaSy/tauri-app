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
    },
    {
        label: 'Form',
    },
    {
        label: 'Flex'
    }
]

const CompSelector = () => {
    return <ul className={Styles.listWrap}>
        {compList.map((item) => {
            return <Draggable key={item.label} id={item.label}><li className={Styles.listItem} key={item.label}>{item.label}</li></Draggable> 
        })}
    </ul>
}

export default CompSelector