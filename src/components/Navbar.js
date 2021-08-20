import './Header.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='#' className='navbar-logo' onClick={closeMobileMenu}>
                        VaishnoRP
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-links' href="#aboutmy" onClick={closeMobileMenu}> About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className='nav-links'onClick={closeMobileMenu}>
                                Projects
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                href='#contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default NavBar

