import React from 'react'

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    //function for adding all the products prices
    const itemPrice = cartItems.reduce((a,c) => a + c.qty * c.price, 0);
    //apply 1% tax
    const taxPrice = itemPrice * 0.01;

    //calculation the sipping price
    const shippingPrice = itemPrice > 2000 ? 0 : 200;

    //final calculation
    const totalPrice = itemPrice + taxPrice + shippingPrice;

    return (
        <div>
            <h1 className="text-center display-3">Your Cart Items</h1>
            <div className="container">
            { cartItems.length === 0 && <div><h1 className="display-4">Your Cart is Empty</h1></div> }
            <table className="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Prodduct Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
               
                {
                    cartItems.map((item) =>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td><img src={item.image} style={{ width:'100px', height:'100px' }} /></td>
                            <td><button onClick={() => onAdd(item)} className="btn btn-info btn-sm">+</button></td>
                            <td><button onClick={() => onRemove(item)} className="btn btn-danger btn-sm">-</button></td>
                        </tr>
                    ))
                }
            </table>
            <small>Actual Price: Rs. {itemPrice}</small>
            <br/>
            <small>Fix Shipping Price: Rs. {shippingPrice}</small>
            <br />
            <small>Tax Applied: Rs. {taxPrice}</small>
            <p className="lead">Total Price: Rs. {totalPrice}</p>
            </div>
        </div>
    )
}

export default Cart
