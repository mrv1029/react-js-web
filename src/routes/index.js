//Layout
// import { HeaderOnly } from '~/layouts';

import Product from '~/pages/Product/Product';
import Home from '~/pages/Home/Home';
import About from '~/pages/About/About';
import config from '~/configs';
import Search from '~/layouts/components/SearchInput/SearchInput';
import Login from '~/pages/LogIn';

//Public routes without login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.about, component: About }, //, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: Login },
];
//Routes required login
const privateRoutes = [{ path: config.routes.login, component: Login }];
export { publicRoutes, privateRoutes };
