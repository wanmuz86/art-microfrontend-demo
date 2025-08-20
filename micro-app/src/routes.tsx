import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";


// Get the correct basename (initial path) based in the environment
const getBasename = () => {
    // If I am running as a micro app
    if (window.__POWERED_BY_QIANKUN__) {
        return '/app'
    }
    return '/micro-app'

}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail",
        element: <Detail />,
    },
],
    {
        basename: getBasename()
    }
);

export default router;
