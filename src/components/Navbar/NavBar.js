import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavBar() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${search}`)
    }

    return (
        <nav className="navbar  bg-body-tertiary bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Yemek Tarifleri</Link>
                <form onSubmit={handleSubmit} className="" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                </form>

                <ul className="navbar-nav flex-row ms-auto">

                    <li className="nav-item me-2">
                        <NavLink to="/" className="text-white text-decoration-none">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/create" className="text-white text-decoration-none">Create</NavLink>
                    </li>
                </ul>

            </div>
        </nav >
    )
}

export default NavBar