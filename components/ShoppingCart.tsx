import { useQuery } from '@apollo/client'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import Drawer from "@mui/material/Drawer"
import {List,ListItem} from "@mui/material"

type ShoppingCartProps = {
    isOpen: boolean
}

function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {cartItems,closeCart,cartTotal,cartQuantity} = useShoppingCart()


    return (

<Drawer anchor='right' open={isOpen} onClose={closeCart} PaperProps={{sx:{width:"30%"}}}>
<List>
    <ListItem className='flex justify-between text-3xl p-5'>
    <h1>Cart Items</h1>
    {cartQuantity>0 && <h1>${cartTotal}</h1>}
    </ListItem>
    <hr />
    


{ cartQuantity===0? 
<ListItem className='text-xl'>Start adding items to view them here.</ListItem>
:
cartItems.map(item =>

<CartItem id= {item.id} quantity = {item.quantity}/>

)
}

</List>

</Drawer>  
       
       

    ) 
        
}

export default ShoppingCart
