import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price;
    }

    totalPrice=totalPrice.toFixed(2);

    return (
        <div>
            <h2>Your Courses : {cart.length}</h2>
            <p>Price of your courses : {totalPrice}</p>
        </div>
    );
};

export default Cart;