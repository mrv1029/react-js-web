import { lazy } from 'react'
// export default {
//     path : "/",exact : true,
//     component : lazy(() => import("./Home"))
// }

const DefaultHome = {
    path : "/",
    exact : true,
    component : lazy(() => import("./Home"))
}

export default DefaultHome