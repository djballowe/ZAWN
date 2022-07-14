import React from 'react'
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";

export default function Cart() {
  return (
    <div className='cart-container'>
        <div className='cart-body'>
            <div className='cart-top'>
                <div className='bag'>
                    <CartIcon path={mdiWalletTravel} size={1} />
                    <p>1 ITEM</p>
                </div>
                <button>X</button>
            </div>
        </div>
    </div>
  )
}
