import React  from 'react';
import {Link} from 'react-router-dom';
// import './Msection.css'

function Msection() {
    return(
    <>
        <div className="container">
        <div className="row">
            <div className="col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12 ml-lg-0 btn1 media5">
                <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktop_a32a999e-971c-4142-8a4b-a446bde72cf6.jpg?v=1636539541" className="img-fluid media5" alt=""/>
                <button type="button" className="btn btn-outline-dark bt btn-lg btn-sm btn-md shop-now1 shop-now" ><Link to="Chantelle.html" >Shop Now</Link></button>
            </div>
        </div>
    </div>
    </>
    )

}
export default Msection
