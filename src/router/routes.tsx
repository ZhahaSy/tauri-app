import { type RouteObject, redirect } from 'react-router-dom';

import IHome from '@/pages/Home/Home';
import IEditor from '@/pages/Editor';


const pageRoutes: RouteObject[] = [
    {
        index: true,
        loader: () => redirect('/iHome'),
    },
    {
        path: '/iHome',
        element: <IHome />,
    },
    {
        path: '/iEditor',
        element: <IEditor />,
    },
];

export default pageRoutes;
