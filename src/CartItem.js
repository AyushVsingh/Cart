import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this', this.state);
    }
    render() {
        const { price, title, qty, img } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                    <div className='cart-item-actions'>
                        <img
                            alt="increase"
                            className='action-icons'
                            src="https://www.svgrepo.com/show/522230/plus-circle.svg"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className='action-icons'
                            src="https://www.svgrepo.com/show/522961/minus-circle.svg"
                        />
                        <img
                            alt="delete"
                            className='action-icons'
                            src="https://www.svgrepo.com/show/511788/delete-1487.svg"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;