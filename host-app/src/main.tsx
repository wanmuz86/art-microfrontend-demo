import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { registerMicroApps, start } from 'qiankun'
import { router } from './routes.tsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router} /   >
  </StrictMode>,
)
// Host application will pass down data
const initialData = {
  message:"Hello from the host app!"
}


const handleDataFromMicroApp = (data:string) => {
console.log("Data received from micro app:", data);
}

// Registration process
// setting up host application to register micro frontend
registerMicroApps([
  {
    name:"micro-app", 
    entry:"//localhost:4173/micro-app/",  // later will deploy the microfrontend to port 4173
    // where do i render the micro frontend? 
    // We will add a div with id micro-app-container to host the microfront-end
    container:"#micro-app-container", 
    // the url to open the microfrontend
    activeRule:"/app",
    props: {
      initialData, // passing data to micro app
      onDataReceived:handleDataFromMicroApp // callback to receive data from micro app
    }
  }
])
start()