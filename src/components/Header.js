import React  from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    return(
    <>
    <div className="up-nav">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 media1">
                    <span>Free shiping within pakistan</span>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <span className="float-right pr-5 media2">
                        <b >HELPLINE: </b>
                        <b><Link to="#"><i className="fas fa-phone-alt"></i></Link></b>
                        <b><Link to="#"><img src="whatsapp.png" alt=""/></Link>
                            <span>+92 348 1112548</span></b>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </>
    )

}
export default Header
