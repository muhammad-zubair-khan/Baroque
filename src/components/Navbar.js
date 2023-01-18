import React  from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {
    return(
        <>
            <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
            <Link className="navbar-brand media3" to="#"><img
                    src="https://cdn.shopify.com/s/files/1/2277/5269/t/59/assets/Baroque_green.jpg?v=1232842068771143212"
                    className="img-fluid logo" alt=""/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse media4" id="navbarSupportedContent">
                <ul className="navbar-nav  me-auto mb-2 mb-lg-0  navbar1">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="Snav">Sale</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collection
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to="#">Lawn</Link></li>
                            <li><Link className="dropdown-item" to="#">Chantelle</Link></li>
                            <li><Link className="dropdown-item" to="#">Swiss</Link></li>
                            <li><Link className="dropdown-item" to="#">Fuchsia</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Unstiched</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Pret</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Dupattas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Bottoms</Link>
                    </li>
                </ul>

                <div style={{display:"flex"}}>
                    {/* <i style="border: 2px solid black; color: black; width: 10px;" className="bi bi-search"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor"
                        className="bi bi-search srch" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                     {/* <select style="padding-right: 20px; cursor: pointer; border: none; outline: none;"
                        className="form-select" aria-label="Default select example">
                        <option selected>PKR</option>
                        <option value="1">PKR</option>
                        <option value="2">EUR</option>
                        <option value="3">USD</option>
                        <option value="3">GBP</option>
                        <option value="3">CAD</option>
                    </select> */}
                    <select  name="Curr">
                        <option value="PKR">PKR</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        className="bi bi-person srch" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <li className="nav-item" style={{listStyle:"none"}}>
                    <Link class="nav-link" to="/cart">Cart {' '}
                        <button className="badge">{props.productsCount}</button>
                    </Link>

                    </li>
                    {/* <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="40"
                        fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg> */}
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}

export default Navbar