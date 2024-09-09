import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div >
		<Navbar/>
		<hr />
		<div className='flex'>
			<Sidebar/>
			<Outlet/>
		</div>
    </div>
  )
}

export default App