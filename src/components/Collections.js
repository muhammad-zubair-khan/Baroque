import React from'react';
import { Link } from 'react-router-dom';

export default function Collections() {
    return(
        <>
        <div className="row ">
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div class="accordion" id="accordionExample">
  
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        SIZE
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        PIECES
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        FABRIC TYPE
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
        PRICE
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="/Products">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/120_e2565a1a-76e2-4db2-8da0-e5955ea0d731_600x_crop_center.jpg?v=1636790179" alt="Card image cap"/>
                        </Link>
                        <Link to="/Products">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">VS-22</p>
                        <p className="card-title card-heading">PKR12,790.00</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="Products">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/62_1_600x_crop_center.jpg?v=1637154967" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">VS-24</p>
                        <p className="card-title card-heading">PKR13,790.00</p>

                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/76_70e78ef2-570e-4c1d-bd13-f76ffd2afeac_600x_crop_center.jpg?v=1634882964" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">VS-25</p>
                        <p className="card-title card-heading">PKR7,790.00</p>

                    </div>
                </div>
            </div>
            <div className="row ">
            <div className="col-lg-3 col-md-3 col-sm-12 invisible">

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/76_70e78ef2-570e-4c1d-bd13-f76ffd2afeac_600x_crop_center.jpg?v=1634882964" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">EMPEROR</p>
                        <p className="card-title card-heading">PKR2,790.00</p>

                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/120_e2565a1a-76e2-4db2-8da0-e5955ea0d731_600x_crop_center.jpg?v=1636790179" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">PINSHIP</p>
                        <p className="card-title card-heading">PKR2,790.00</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/112_be502913-4ab4-4c7d-ac8a-bac5c32bda9b_600x_crop_center.jpg?v=1634821212" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">BASTILE</p>
                        <p className="card-title card-heading">PKR22,790.00</p>
                    </div>
                </div>
            </div>

        </div>
            <div className="row ">
            <div className="col-lg-3 col-md-3 col-sm-12 invisible">

            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="Products">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/76_70e78ef2-570e-4c1d-bd13-f76ffd2afeac_600x_crop_center.jpg?v=1634882964" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">EMPEROR</p>
                        <p className="card-title card-heading">PKR2,790.00</p>

                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/120_e2565a1a-76e2-4db2-8da0-e5955ea0d731_600x_crop_center.jpg?v=1636790179" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">PINSHIP</p>
                        <p className="card-title card-heading">PKR2,790.00</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                    <div className="view overlay">
                        <Link to="unstiched.html">
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/2277/5269/products/112_be502913-4ab4-4c7d-ac8a-bac5c32bda9b_600x_crop_center.jpg?v=1634821212" alt="Card image cap"/>
                        </Link>
                        <Link to="#!">
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    <div className="card-body">                       
                        <p className="text-body">BASTILE</p>
                        <p className="card-title card-heading">PKR22,790.00</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}