//Layout
import { HeaderOnly } from '~/layouts';

import Product from '~/pages/Product/Product';
import Home from '~/pages/Home/Home';
import About from '~/pages/About/About';
import config from '~/configs';

//Public routes without login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.about, component: About }, //, layout: HeaderOnly },
];
//Routes required login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
