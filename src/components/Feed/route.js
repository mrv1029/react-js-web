import { lazy } from 'react'

const DefaultFeed = {
    path : "/feed",
    exact : true,
    component : lazy(() => import("./Feed"))
}

export default DefaultFeed