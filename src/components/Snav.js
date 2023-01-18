import React  from 'react';
import {Link} from 'react-router-dom';
import './Snav.css'

function Snav() {
    return(
        <>
        <nav classNameName="container" aria-label="breadcrumb">
        <ol classNameName="breadcrumb">
            <li classNameName="breadcrumb-item"><Link to="index.html">HOME</Link></li>
            <li classNameName="breadcrumb-item active" aria-current="page">SALE</li>
        </ol>
        <hr/>
    </nav>
    {/* <!-- ---BREADCRUMS-END--- -->

    <!-- ----SIDEBAR-COLLAPSIBLE-START---- --> */}
    <div className="container">
        {/* <!-- Card deck --> */}
        <div className="card-deck row">


            <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12">

                <button type="button" className="collapsible">SIZE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">XS</label>
                        <input type="checkbox"/> <label for="check">S</label>
                        <input type="checkbox"/> <label for="check">M</label>
                    </div>
                    <div className="wrape2">
                        <input type="checkbox"/> <label for="check">L</label>
                        <input type="checkbox"/> <label for="check">XL</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">PIECES <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">3 Piece</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">FABRIC TYPE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1" >
                        <input type="checkbox"/> <label for="check">XS</label>
                    </div>
                </div>
                <hr/>
                <button type="button" className="collapsible">PRICE <i className="fal fa-angle-down"></i></button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"/> <label for="check">RS 10000</label>
                        <input type="checkbox"/> <label for="check">RS 11999</label>
                    </div>
                </div>
                {/* <!-- <button type="button" className="collapsible">PRICE</button>
                <div className="content">
                    <div className="wrape1">
                        <input type="checkbox"> <label for="check">XS</label>
                        <input type="checkbox"> <label for="check">S</label>
                    </div>
                    <div className="wrape2">
                        <input type="checkbox"> <label for="check">L</label>
                        <input type="checkbox"> <label for="check">XL</label>
                    </div>
                </div> --> */}
                <hr/>
            {/* </div> */}
            </div>
</div>
</div>
{/* 
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
     */}
        </>
    )
}

export default Snav