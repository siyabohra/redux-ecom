// import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Footer from "./Footer";

function Header({ setSelectedCategory, setSearchQuery }) {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <Container fluid className="header">
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <FontAwesomeIcon icon={faBagShopping} className='logo' />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/" className='navhead'>Home</Nav.Link>
                                <NavDropdown title="Products" className='navpro' id="navbarScrollingDropdown">
                                    <NavDropdown.Item onClick={() => setSelectedCategory('all')} className='cat'>All Products</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => setSelectedCategory("men's clothing")} className='cat'>Men's Clothing</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => setSelectedCategory("women's clothing")} className='cat'>Women's Clothing</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => setSelectedCategory('electronics')} className='cat'>Electronics</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => setSelectedCategory('jewelery')} className='cat'>Jewelry</NavDropdown.Item>
                                </NavDropdown>

                                <input 
                                    type="text" 
                                    placeholder='Search Product' 
                                    className='searchbox' 
                                    value={query} 
                                    onChange={handleSearchChange} 
                                />
                                <button type='search' className='btn-search'>
                                    <FontAwesomeIcon icon={faSearch} className='searchicon' />
                                </button>
                            </Nav>
                            <div className='btn-main'>
                                <Button className='profile' onClick={handleShow}>
                                    <FontAwesomeIcon icon={faUser} /> Profile
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header>
                                        <Modal.Title className='modal-heading'> My Profile </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {isAuthenticated ?
                                            <button className='log-in' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                                                <FontAwesomeIcon icon={faUser} /> Logout
                                            </button>
                                            : <button className='log-in' onClick={() => loginWithRedirect()} >
                                                <FontAwesomeIcon icon={faUser} /> Log In
                                            </button>
                                        }
                                    </Modal.Body>
                                    <div className='modal-sub-body'>
                                        {isAuthenticated && 
                                            <div>
                                                <img src={user.picture} className='userimg' alt="User" />
                                                <h4>{user.name}</h4>
                                            </div>
                                        }
                                    </div>
                                    <Modal.Footer className='modal-footer'>
                                        <Button className='close' onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Button as={Link} to="/wishlist" className='wishlist'>
                                    <FontAwesomeIcon icon={faHeart} /> Wishlist
                                </Button>
                                <Button as={Link} to="/cart" className='bag'>
                                    <FontAwesomeIcon icon={faCartShopping} /> Bag
                                </Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
          
        </>
    );
}

export default Header;
