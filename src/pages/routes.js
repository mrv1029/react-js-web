// const HomePage = lazy(() => import("../components/Home"))
// const FeedPage = lazy(() => import("./Feed"))

let routes = [];
//get route.js files
const context = require.context("../components", true, /route.js$/);

context.keys().forEach(path => {
    routes.push(context(`${path}`).default)
});
export default routes
