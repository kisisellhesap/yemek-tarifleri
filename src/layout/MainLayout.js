import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <NavBar />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout