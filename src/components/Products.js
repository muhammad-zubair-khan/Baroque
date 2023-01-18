import React from "react";
import Product2 from "./Product2";
// import Checkout from './Checkout'
// import { Link } from "react-router-dom";
import { useState} from 'react'
const image1 = 'https://cdn.shopify.com/s/files/1/2277/5269/products/11_3c7e9dd6-7b7a-41dd-9e70-7c7cbd6e9cf2_600x_crop_center.jpg?v=1635854483'
const image2 = 'https://cdn.shopify.com/s/files/1/2277/5269/products/07_0384c6e5-da4a-420d-852a-413147be4c89_600x_crop_center.jpg?v=1635854142'
const image3 = 'https://cdn.shopify.com/s/files/1/2277/5269/products/29_7786ee31-74ea-44d5-8e9f-fb18494e9d16_600x_crop_center.jpg?v=1635854795'
const image4 = 'https://cdn.shopify.com/s/files/1/2277/5269/products/45_bd97d412-888b-4849-9ee0-55d1307768d8_600x_crop_center.jpg?v=1635854955'
const newImg = {image1, image2, image3, image4}

export default function Products() {
    const [selected, setSelected] = useState(newImg.image1)  
    return(
        <div className="container">
            <div className="row">
         <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
               <img className="img-fluid" src={selected} alt='image' />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                <div className="wrape6">
                    <button onClick={()=> setSelected(newImg.image1)}>
                        <img className="img-fluid" src={newImg.image1}/>
                        </button><br/>
                    <button onClick={()=> setSelected(newImg.image2)}><img className="img-fluid" src={newImg.image2}/></button><br/>
                    <button onClick={()=> setSelected(newImg.image3)}><img className="img-fluid" src={newImg.image3}/></button><br/>
                    <button onClick={()=> setSelected(newImg.image4)}><img className="img-fluid" src={newImg.image4}/></button>
                </div>
            </div>

                <Product2/>
           
        </div>
        </div>
    )
}