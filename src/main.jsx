import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/root.jsx"
import ErrorPage from "./pages/error-page"
import ContactPage from "./pages/contact"
import BlogPage from "./pages/blog"
import ProjectsPage from "./pages/projects"
import HomePage from "./pages/home"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/projects",
                element: <ProjectsPage />
            },
            {
                path: "/blog",
                element: <BlogPage />
            },
            {
                path: "/learning",
                element: <ContactPage />
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
