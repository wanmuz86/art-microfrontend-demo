
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type { Root } from 'react-dom/client'


let root: Root | null = null;
function renderApp(){
  const rootElement = document.getElementById('root')!;
  root = createRoot(rootElement);
  root.render(<App/>);
}

// These methods will be called if i am on microapplication
// opening from the host app

// 1) 1st method
export async function bootstrap() {
  // Your bootstrap logic here
  console.log('Application bootstrapped');
}

// 2) mount
export async function mount(props:any) {
  // Your mount logic here
  console.log('Application mounted with props:', props);
  renderApp();
}

export async function unmount() {
console.log('Application unmounted');
if (root){
  root.unmount();
  root = null;
}
}

// Are you running from the host app?
if (window.__POWERED_BY_QIANKUN__) {
  // If running in qiankun micro-frontend environment
  console.log('Running in qiankun environment');
 window['micro-app'] = {bootstrap, mount, unmount};
 
} else {
  console.log('Not running in qiankun environment');
  // Not running in qiankun environment [from the hostapp]
  renderApp()
} 