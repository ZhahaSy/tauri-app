import { Button } from 'antd';
import styles from './home.module.less'

import {PlusOutlined} from '@ant-design/icons'
import useTabsStore from '@/store/useTabsStore';

const Home = () => {
    const {addItem, tabItems} = useTabsStore((state) => state)
    const handleCreateProject = () => {
        addItem({
          key: Date.now().toString(),
          label: 'newPage'+(tabItems.length),
        })
      };
    return <div className={styles.wrapper}>
        <div style={{
            paddingTop: '50px',
            width: '600px'
        }}>
            <Button type='primary' onClick={handleCreateProject}><PlusOutlined />新建</Button>
        </div>
    </div>
}

export default Home;