import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"app"}>Hello world!</Link>,
  },
  {
    path: "/app",
    element: <App />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
