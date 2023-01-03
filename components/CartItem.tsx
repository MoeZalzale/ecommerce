import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ITEM_BY_ID } from '../graphql/queries'
import {XIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'
import {PlusCircleIcon,MinusCircleIcon} from '@heroicons/react/solid'
import { ListItem } from '@mui/material';

type CartItem = {
    id: number
    quantity: number
}
function CartItem({id,quantity} : CartItem) {

    
const {loading,error,data} = useQuery(GET_ITEM_BY_ID,{
    variables: {id: id}
})

const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
    return (
        <>
        
        <ListItem className='space-x-5 justify-center flex-1 p-5'>
            
            <img src={data?.getItemById.image} alt="" width={200} className='object-contain aspect-[3/2]' />
            <div className='flex flex-col justify-center p-3'>
                <p className='text-xl font-bold'>{data?.getItemById.title}</p> 
                <p>${data?.getItemById.price} {quantity>1 && <span className='text-gray-400'>x{quantity}</span>}</p>
                <div className='flex items-center space-x-2 pt-5'>
      <button><MinusCircleIcon onClick={() => decreaseCartQuantity(id,data?.getItemById.price)} className='w-9 text-red-600 cursor-pointer'> </MinusCircleIcon></button>
      <span>{quantity}</span>
      <button><PlusCircleIcon onClick={() => increaseCartQuantity(id,data?.getItemById.price)} className='w-9 text-green-600 cursor-pointer'> </PlusCircleIcon></button>

      </div>

            </div>
            


            <div className='flex items-center '>
            <span className='font-bold text-2xl'> ${data?.getItemById.price * quantity}</span>
            <XIcon onClick= {() =>removeFromCart(id)} className='w-7 ml-10 rounded-lg outline hover:bg-slate-400 cursor-pointer'/>
            </div>
        </ListItem>
        <hr/>
        </>
        
    )
}

export default CartItem
