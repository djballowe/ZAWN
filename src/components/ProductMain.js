import React from 'react'
import data from "../data.js"

function ProductMain() {
      
    return (
      <div className='individual-container'>
        <div className='image'>
            <img src={require(`../Images/${data[0].src}`)} alt="" />
        </div>
        <div className='title'>
            <p>{data[0].title}</p>
            <p>{data[0].price}</p>
        </div>
        <p>{data[0].description}</p>
        <div className='reviews'>
            <p>{data[0].status.review} / 5</p>
            <p>{data[0].status.reviews} Reviews</p>
        </div>
        <div>
            <p>Color</p>
            <div className='color-picker'>
                <div className='color'></div>
                <p>White</p>
            </div>
        </div>
        <div className='details'>

        </div>
        <button>Add to Cart</button>
        <div className='promise'>
            <p>Made to Order</p>
            <p>60 Day Guarantee</p>
            <p>24/7 Customer Support</p>
        </div>
      </div>
    )
  
}

export default ProductMain
