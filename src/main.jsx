/*CSS IMPORTS*/
import './assets/css/reset.css';   // Reset first
import './assets/css/globals.css'; // Then globals

/*PAGES AND COMPONENTS*/
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';

/*OTHER IMPORTS*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


/*ROUTER*/
const router = createBrowserRouter([
  {
    path:"/main",
    element:<MainPage/>
  },
  {
    path:"/",
    element:<Homepage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
