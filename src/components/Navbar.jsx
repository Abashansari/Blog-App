import React from 'react'
import { Link } from 'react-router-dom';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-6 fixed-top">
            <div className="container-fluid">

                <a className="navbar-brand fw-bold d-flex align-items-center" href="#" style={{ color: '#FF8C00' }}>
                    <LaptopChromebookIcon fontSize='large' className='me-2' /> Abash Ansari
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                        <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/about">About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/blog">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" to="/write">Write Blogs</Link></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}