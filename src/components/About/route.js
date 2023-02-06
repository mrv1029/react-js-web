import { lazy } from 'react'
// export default {
//     path : "/",exact : true,
//     component : lazy(() => import("./Home"))
// }

const DefaultHome = {
    path : "/about",
    exact : true,
    component : lazy(() => import("./About"))
}

export default DefaultHome