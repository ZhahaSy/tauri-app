import { App as AntdApp, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import type { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

type RouterType = ReturnType<typeof createBrowserRouter>;

export const ConfigProviderConfig = {
    locale: zhCN,
};

const App = ({ router }: { readonly router: RouterType }) => (
    <ConfigProvider {...ConfigProviderConfig}>
        <AntdApp>
            <RouterProvider router={router} />
        </AntdApp>
    </ConfigProvider>
);

export default App;
