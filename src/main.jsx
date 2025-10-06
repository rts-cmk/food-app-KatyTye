import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Profile from './pages/Profile.jsx'
import Menu from './pages/Menu.jsx'
import App from './pages/App.jsx'
import "./styling/buttons.css"
import "./styling/resets.css"

const pageRouter = createBrowserRouter([
  { path: "*", element: <App /> },
  { path: "/", element: <App /> },
  { path: "/profile/:page", element: <Profile /> },
  { path: "/menu/:name", element: <Menu /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pageRouter} />
  </StrictMode>,
)
