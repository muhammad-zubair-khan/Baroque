import './Product2.css'
import React, { useState} from 'react'
import { Link } from 'react-router-dom'




function Product2() {
    const [count, setcount] = useState(0);

    const increament =()=>{
        // console.log("clicked")
        setcount(count+1);
    }
    const decreament =()=>{
        console.log("ok")
        setcount(count-1);


    }

    return (
        <>
            
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 title" >
                <div className="form-heading">
                    <h6>DAPHNE</h6>
                    <span style={{fontWeight: "bold"}}>PKR 5,490.00</span>
                </div>

                <div className="input-fields">
                    <div className="first">
                        {/* <span style={{color: "red"}}>*</span> */}
                        <span style={{fontSize: "12px"}}>Type</span>
                        <span style={{float: "right", backgroundColor: "black", color: "white"}}>Un-stiched</span>
                    </div>

                    <div className="second">
                        <span style={{fontSize: "12px"}}>Avalaibility</span>
                        <span style={{float: "right"}}>In-Stock</span>
                    </div>

                    <div className="third">
                        <span style={{fontSize: "12px"}}>Quantity</span>
                        <button onClick={increament}><i className="far fa-plus"></i></button>
                        <input type="text" id="qty" disabled name="quantity" value={count} min="1" max="5" pattern="[1-5]"/>
                        <button onClick={decreament}><i className="fas fa-minus"></i></button>
                        {/* <div className="plus-minus">
                            <div className="increase-item"
                                onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )&& qty < 5) result.value++;return false;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                                </svg>
                            </div>
                            <div className="decrease-item"
                                onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) && qty > 1 ) result.value--;return false;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg>
                            </div>
                        </div> */}
                    </div>

                </div>

                <br/>
                <Link to='/Cart'>
                <button className="button1"  onclick="show('popup')"><svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16"
                        style={{marginRight: "9px", marginBottom: "3px"}}>
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>ADD TO BAG</button>
                     {/* <button onClick={() => addProduct(prod)} class="btn btn-primary">Add To Cart</button> */}
                </Link>

                <div className="popup" id="popup">
                    {/* <!-- <p style="text-align: center;">This is a popup!</p> --> */}
                    <h6 style={{textAlign: "center", marginTop: "20px"}}>DEPHNE - Unstiched</h6>
                    <img style={{width: "88px",
                        display: "flex",
                        margin: "0 auto"}} src="https://cdn.shopify.com/s/files/1/2277/5269/products/11_3c7e9dd6-7b7a-41dd-9e70-7c7cbd6e9cf2_600x_crop_center.jpg?v=1635854483"
                        alt=""/>
                    <div className="popup-btn" style={{textAlign: "center", padding:"11px"}}>
                        <Link to="cart.html" onclick="show('popup')" style={{color: "black"}}>GO TO CART PAGE</Link>
                        <Link to="#" style={{color: "black"}} onclick="hide('popup')">CLOSE</Link>

                    </div>
                </div>


                <div className="col-12 col-xl-12 col-lg-12 col-md-3 col-sm-12" style={{width: "80%",
                margin: "1px 44px"}}>

<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        SIZE
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
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
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        PIECES
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div className="wrape1">
                            <input type="checkbox"/> <label for="check">3 Piece</label>
                        </div>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        PRICE
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div className="wrape1">
                            <input type="checkbox"/> <label for="check">RS 10000</label>
                            <input type="checkbox"/> <label for="check">RS 11999</label>
                        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        REVIEW
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <div className="wrape1" style={{fontSize:"11px", color: "#777"}}>
                            <h6 style={{fontSize: "13px",
                            padding: "10px 0px"}}>Write a Review</h6>
                            <h6 style={{fontSize: "13px", padding: "3px 0px"}}>Name <span style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", outline: "none"}} type="Name" placeholder="Enyer your name"/>
                            <h6 style={{fontSize: "13px", padding: "8px 0px"}}>Email <span style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", ouline: "none"}} type="Name" placeholder="abc@example.com"/><br/>
                            <h6 style={{fontSize: "13px", padding: "10px 0px", paddingBottom: "0px"}}>Ratings <span
                                    style={{color: "red"}}>*</span>
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                            </h6>
                            <h6 style={{fontSize: "13px", padding: "10px 0px", paddingTop: "0px"}}>Review Title <span
                                    style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", outline: "none"}} type="Name"
                                placeholder="Give your review a title"/>
                            <h6 style={{fontSize: "13px", padding: "10px 0px"}}>Body of Review (1500) <span
                                    style={{color: "red"}}>*</span></h6>
                            <textarea style={{width: "100%", outline: "none"}} name="text" id="" cols="30" rows="10"
                                placeholder="Write your comments here"></textarea><br/>
                            {/* <!-- <input type="checkbox"> <label for="check">XS</label> --> */}
                            <button style={{float: "right",
                            position: "relative",
                            bottom: "8px",
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid",
                            padding: "8px 9px",
                            fontSize: "small",
                            marginTop: "6px"}}>Submit Review</button>
                        </div>
      </div>
    </div>
  </div>
</div>

                    {/* <button type="button" className="collapsible">SIZE <i className="fal fa-angle-down"></i></button>
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
                    <button type="button" className="collapsible">PRICE <i className="fal fa-angle-down"></i></button>
                    <div className="content">
                        <div className="wrape1">
                            <input type="checkbox"/> <label for="check">RS 10000</label>
                            <input type="checkbox"/> <label for="check">RS 11999</label>
                        </div>
                    </div>
                    <hr/>
                    <button type="button" className="collapsible">Write a Review<i className="fal fa-angle-down"></i></button>
                    <div className="content">
                        <div className="wrape1" style={{fontSize:"11px", color: "#777"}}>
                            <h6 style={{fontSize: "13px",
                            padding: "10px 0px"}}>Write a Review</h6>
                            <h6 style={{fontSize: "13px", padding: "3px 0px"}}>Name <span style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", outline: "none"}} type="Name" placeholder="Enyer your name"/>
                            <h6 style={{fontSize: "13px", padding: "8px 0px"}}>Email <span style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", ouline: "none"}} type="Name" placeholder="abc@example.com"/><br/>
                            <h6 style={{fontSize: "13px", padding: "10px 0px", paddingBottom: "0px"}}>Ratings <span
                                    style={{color: "red"}}>*</span>
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div>
                            </h6>
                            <h6 style={{fontSize: "13px", padding: "10px 0px", paddingTop: "0px"}}>Review Title <span
                                    style={{color: "red"}}>*</span></h6>
                            <input style={{width: "100%", outline: "none"}} type="Name"
                                placeholder="Give your review a title"/>
                            <h6 style={{fontSize: "13px", padding: "10px 0px"}}>Body of Review (1500) <span
                                    style={{color: "red"}}>*</span></h6>
                            <textarea style={{width: "100%", outline: "none"}} name="text" id="" cols="30" rows="10"
                                placeholder="Write your comments here"></textarea><br/>
                            <button style={{float: "right",
                            position: "relative",
                            bottom: "8px",
                            backgroundColor: "black",
                            color: "white",
                            border: "1px solid",
                            padding: "8px 9px",
                            fontSize: "small",
                            marginTop: "6px"}}>Submit Review</button>
                        </div>
                    </div> */}



                </div>



            </div>
        </>
    )
}

export default Product2
