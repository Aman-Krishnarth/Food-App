import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'

const router = createBrowserRouter([
	{
		path:"",
		element: <App/>,
		children: [
			{
				path: "/add",
				element: <Add/>
			},
			{
				path: "/list",
				element: <List/>
			},
			{
				path: "/order",
				element: <Orders/>
			},
		]
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
