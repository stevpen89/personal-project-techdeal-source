import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../ducks/reducer';
import axios from 'axios';
import './Cart.css';


// connect cart to redux
// bring in redux cart to cart component
// map over the redux cart and display


class Cart extends Component {
    constructor() {
        super()
        this.state = {
            price: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_products`).then(res => {
            console.log(res.data)
            this.setState({
                price: res.data
            })
        })
    }


    render() {

        let mappedPrice = this.state.price.map((productPrice, i) => {
            return (
                <div key={i}>{productPrice.product_id} </div>
            )
        })


        let mappedCart = this.props.cart.map((cartItem, i) => {
            return (
                <div key={i}>
                    <h4>Descritpion: {cartItem.description} </h4>
                    <h4> Price: {cartItem.price}</h4>
                    <img height='100px' width='100px' src={cartItem.image_url} alt='' />
                    <div><button className='removeButton' onClick={() => this.props.removeFromCart(cartItem)}>Remove Item</button></div>
                </div>
            )
        })
        return (
            <div>
                <h1>Cart</h1>
                <body>

                    <section>
                        <div className='flexMonitors'>
                            <div className='cartContainer'>
                                {mappedCart}
                            </div>
                        </div>
                    </section>
                </body>


                <h3>Total: {mappedPrice}</h3>
                <button className="addCart" onClick={() => this.props.purchaseCart()}>Purchase</button>


            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);