import IRoute from '../interfaces/routes';
import Magazines from '../Pages/Magazines';

const routes: IRoute[] = [
    {
        path: '/magazines',
        name: 'Magazines Page',
        component: Magazines,
        exact: true
    },
]

export default routes;