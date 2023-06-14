import React, { useContext } from 'react'
import NavBar from '../components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../components/ThemeSelector/ThemeSelector'
import { ThemeContext } from '../contexts/ThemeContext'

function MainLayout() {

    const { mode } = useContext(ThemeContext);

    return (
        <div className={`bg-${mode}`}>
            <NavBar />
            <ThemeSelector />
            <div className='container'>
                <Outlet />
            </div>
        </div >
    )
}

export default MainLayout