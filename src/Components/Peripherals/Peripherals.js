import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../ducks/reducer';
import './Peripherals';

class Peripherals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peripherals: []
        }
    }

    componentDidMount() {
        axios.get(`/api/get_all_peripherals`).then(res => {
            this.setState({
                peripherals: res.data
            })
        })
    }

    addToCart(productId) {
        axios.post(`/api/add_to_cart/${productId}`).then(res => {
            this.props.updateCart(res.data)
        })
    }
    render() {

        let peripheralsToDisplay = this.state.peripherals.map((periph, i) => {
            return (
                <div key={i}>
                    <h4>Description: {periph.description}</h4>
                    <img height="215px" widht="215px" src={periph.image_url} alt='' />
                    <h4>Price: {periph.price}</h4>
                    <div></div>
                    <button className='addCart' onClick={() => this.addToCart(periph.product_id
                    )}>Add to cart</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Peripherals</h1>
                <div className="grid">
                    <div className="module">{peripheralsToDisplay[0]}</div>
                    <div className="module">{peripheralsToDisplay[1]}</div>
                    <div className="module">{peripheralsToDisplay[2]}</div>
                    <div className="module">{peripheralsToDisplay[3]}</div>
                    <div className="module">{peripheralsToDisplay[4]}</div>
                    <div className="module">{peripheralsToDisplay[5]}</div>
                    <div className="module">{peripheralsToDisplay[6]}</div>
                    <div className="module">{peripheralsToDisplay[7]}</div>
                    <div className="module">{peripheralsToDisplay[8]}</div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { product_id } = state
    return {
        product_id
    }
}

export default connect(mapStateToProps, { updateCart })(Peripherals)