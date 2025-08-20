import { createBrowserRouter } from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        // Everything that starts with /app/ will be managed by micro-app
        // In practice /shop, /car, /bike, .. will be handled by the micro frontend
        path:"/app/*",
        element:<div id="micro-app-container"></div>,
    },
    {
        path:"*",
        element:<div>404 Not Found</div>,
    }
])