import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-white border-bottom">
            <div class="container p-2">
                <Link to={'/'}><img src='media/images/logo.svg' alt='Logo' style={{ width: '20%' }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/signup'}>Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/product'}>Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/pricing'}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/support'}>Support</Link>
                            </li>
                        </ul>
                    </form>
                
            </div>
        </nav>
    );
}

export default NavBar;