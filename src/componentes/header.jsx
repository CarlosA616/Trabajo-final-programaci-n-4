// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faFutbol, faShoppingCart, faDollarSign, faFolderOpen, faBasketShopping, faChevronDown, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
    return (
        <div className='navContainer'>
            <>
            <Navbar expand="lg" className="header">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <section id='botonesHeaderNegro'>
                        <Nav.Link href="#home" id='exit'>
                                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                        </Nav.Link>
                        <Nav.Link href="#home" id='exit'>
                                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                        </Nav.Link>
                        <Nav.Link href="#home" id='exit'>
                                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        </Nav.Link>
                    </section>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>    
            <Navbar expand="lg" className="header1">
                <img src="src\assets\imagenes\logo2.png" alt="Logo" className="logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            HOME
                        </Nav.Link>
                        <Nav.Link href="#pages">
                            <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                            PAGES
                            <FontAwesomeIcon icon={faChevronDown} className='mr-2'/>
                        </Nav.Link>
                        <Nav.Link href="#sportsprees">
                            <FontAwesomeIcon icon={faFutbol} className="mr-2" />
                            SPORTSPREES
                            <FontAwesomeIcon icon={faChevronDown} className='mr-2'/>
                        </Nav.Link>
                        <Nav.Link href="#shop">
                            <FontAwesomeIcon icon={faBasketShopping} className="mr-2" />
                            SHOP
                            <FontAwesomeIcon icon={faChevronDown} className='mr-2'/>
                        </Nav.Link>
                        <Nav.Link href="#purchase">
                            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                            PURCHASE
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>
        </div>
    );
};

export default Header;
