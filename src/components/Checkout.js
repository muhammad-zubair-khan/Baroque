import React from "react";
import './Checkout.css'
import { Link } from "react-router-dom";

export default function Checkout() {
    return(
        <>
       <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h5 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      ESTIMATE SHIPING AND TAX
      </button>
    </h5>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        
      {/* <div className="content"> */}
                    <div className="wrape1">
                        <p className="sest">Enter your destination to get a shipping estimate.</p>
                        <label htmlFor="country" className="lb">Country <span className="lb-s">*</span></label>
                        <select name="countries" classNameName="slc">
                            <option value="PAK" selected>Pakistan</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CAN">Canada</option>
                            <option value="">-----</option>
                            <option value="AFG">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZA">Algeria</option>
                            <option value="ARG">Argentina</option>
                            <option value="AUS">Australia</option>
                            <option value="AUT">Austria</option>
                            <option value="AZE">Azerbaijan</option>
                            <option value="BAN">Bangladesh</option>
                            <option value="BRA">Brazil</option>
                            <option value="CAF">Central African Republic</option>
                            <option value="CHN">China</option>
                            <option value="DER">Germany</option>
                            <option value="GRC">Greece</option>
                            <option value="IRN">Iran</option>
                            <option value="JPN">Japan</option>
                            <option value="KWT">Kuwait</option>
                            <option value="ITL">Italy</option>
                            <option value="NZL">New Zealand</option>
                            <option value="NZL">Malaysia</option>
                            <option value="NOR">Norway</option>
                            <option value="NER">Niger</option>
                            <option value="OMN">Oman</option>
                            <option value="QA">Qatar</option>
                            <option value="SAU">Saudi Arabia</option>
                            <option value="ZAF">South Africa</option>
                            <option value="SWE">Sweden</option>
                            <option value="CHE">Switzerland</option>
                            <option value="TUR">Turkey</option>
                            <option value="UAE">United Arab Emirates</option>
                            <option value="UKR">Ukrain</option>
                            <option value="ZWE">Zimbabwe</option>
                        </select>
                        <label htmlFor="postal-cdoe" className="lb">ZIP/POSTAL CODE <span className="lb-s">*</span></label>
                        <input type="text" className="lb-i"/>
                        <button className="lb-btn">Get a Quote</button>

                    </div>

                {/* </div> */}

      </div>
    </div>
  </div>
 
 
</div>

                {/* <button type="button" classNameName="collapsible collapse-btn">ESTIMATE SHIPING AND TAX <i classNameName="fal fa-angle-down"></i></button> */}
               



                <div className="side-box">
                    <h5 className="cart-tot">CART TOTALS</h5>

                    <table className="table">

                        <tbody>
                            <tr>

                                <td className="td1">Subtotal</td>
                                <td className="td2">PKR
                                    8,450.00</td>
                            </tr>
                            <tr>

                                <td className="td3">Grand Total</td>
                                <td className="td4">PKR
                                    8,450.00</td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="btn9">
                        <button className="collapse-btn2"><Link to="" className="ls-a text-body">PROCEED TO CHECKOUT</Link></button>
                    </div>
                </div>
        </>
    )
}
