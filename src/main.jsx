import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './pages/profile.jsx'
import Menu from './pages/Menu.jsx'
import App from './pages/App.jsx'

const pageRouter = createBrowserRouter([
  { path: "*", element: <App /> },
  { path: "/", element: <App /> },
  { path: "/profile", element: <Profile /> },
  { path: "/menu/:name", element: <Menu /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pageRouter} />
  </StrictMode>,
)
