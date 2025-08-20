import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

// The props that is passed from the host app through mount method
function App(props: MicroAppProps) {
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
        element: <Detail {...props} />,
    },
],
// to preserve the correct routing behavior
// either from host app or independent micro app
    {
        basename: getBasename()
    }
);


  useEffect(() => {
    // This effect will run when the component mounts
    console.log('App mounted with initial data:', props.initialData);
  }, [props.initialData]);

  return (
    <RouterProvider router={router} />
  );
}
export default App;
