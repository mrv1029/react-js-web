//Layout
import { HeaderOnly } from '~/components/Layouts';

import About from '~/pages/About/About';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';

//Public routes without login
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login, layout: HeaderOnly },
];
//Routes required login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
