import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header>
            <div className="navbar bg-orange-300 text-white font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Tech Stack</a></li>
                            <li><a>Projects</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Rumana K.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Tech Stack</a></li>
                        <li><a>Projects</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end mx-20">
                    <a className='mr-2' href="https://github.com/rumanak21" target="_blank" > <FaGithubAlt />
                    </a>
                    <a href="https://www.linkedin.com/in/rumana-k-a23a68240/" target="_blank" > <FiLinkedin />
                    </a>

                </div>
            </div>
        </header>
    );
};

export default Navbar;