
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react';
import AddDomain from '../Modals/AddDomain';

const Dashboard = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                    <ul className="navbar-nav dash_ul">


                        <li className="nav-item dropdown fs-5 mt-2 account_button">
                            <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Akash.com
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/">Home</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dash_reload mt-4">
                            Reload
                        </li>
                        <li className="nav-item dropdown fs-5 mt-3 ">
                            <Link className=" data-toggle text-dark dash_dash" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </Link>

                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><NavLink className="dropdown-item" to="/dashboard">Account Overview</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/dashboard/domainoverview">Domain Overview</NavLink></li>

                            </ul>
                            <hr id='dash_hr' />
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Fraud Analytics
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalyticsgoogle">Googe Ads</Link></li>
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalyticsfacebook">Facebook Ads</Link></li>
                                <li><Link className="dropdown-item" to="/dashboard/fraudanalyticsmicrosoft">Microsoft Ads</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link dash_adspy" to="#">AdSpy</Link>
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="#">Track Conversions</Link></li>
                                <li><Link className="dropdown-item" to="#">Apply For Google Refund</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown fs-5 mt-2 ">
                            <Link className="nav-link data-toggle text-dark" to="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Domain Setting
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link className="dropdown-item" to="#">Manage Detections Rule</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Auto IP Blocking</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Notifications</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Preferences</Link></li>
                                <li><Link className="dropdown-item" to="#">Manage Notifications</Link></li>
                                <li><Link className="dropdown-item" to="#">Domain Tracking setup</Link></li>
                            </ul>
                        </li>
                        <li><button className='mt-3' id='add_domain' onClick={openModal} >Add Domain</button></li>
                    </ul>
                </div>

            </nav>
            <div>
                <Outlet />
            </div>

        </>
    )
}

export default Dashboard;
