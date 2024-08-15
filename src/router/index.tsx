/**
 * 路由配置文件
 */
import { type RouteObject, redirect } from 'react-router-dom';

import BasicLayout from '@/layouts/BasicLayout';

import pageRoutes from './routes';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                index: true,
                loader: () => redirect('/iHome'),
            },
            ...pageRoutes,
        ],
    },
];
