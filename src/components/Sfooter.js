import React from 'react'
import './Sfooter.css'
// import {Link} from 'react-router-dom';

export default function Sfooter(params) {
    return(
        <>
            <div className="up-ft my-5">

<div className="container">

    <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ft-line">
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/try3.png?v=1618555391" className="img-fluid"
                alt=""/>
            <h5 className="ft-head">Customized Stiching</h5>
            <p className="ft-para">
                YOU CAN USE PERFECT SIZE TO BE STITCHED TO YOUR PERFECT FIT BY USING OUR CUSTOM STITCHING.
            </p>

        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ft-line">
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/OC_c02.png?v=1627287692"
                className="img-fluid" width="90px" alt=""/>
            <h5 className="ft-head" >Order Cancellation</h5>
            <p className="ft-para">
                YOU CAN CANCEL YOUR ORDER BY FILLING THE FORM BEFORE IT IS DISPACTHED.
            </p>

        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center ft-line">
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/Custom_Duties_logo.png?v=1627304106"
                className="img-fluid" width="90px" alt=""/>
            <h5 className="ft-head" >Custom & Duties</h5>
            <p className="ft-para">
                CUSTOM AND DUTIES MAY BE CHARGED ACCORDING TO DELIVERY DESTINATION.
            </p>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center">
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/try4.png?v=1618555440" className="img-fluid"
                alt=""/>
            <h5 className="ft-head" >Free shiping</h5>
            <p className="ft-para">
                ON INTERNATIONAL ORDERS ABOVE PKR 60,000/-
            </p>
        </div>

    </div>
</div>
</div>
        </>
    )
}