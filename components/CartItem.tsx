import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ITEM_BY_ID } from '../graphql/queries'
import {XIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'
import {PlusCircleIcon,MinusCircleIcon} from '@heroicons/react/solid'

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
        
        <div className='w-full flex justify-between p-5 items-center'>
            <div className='flex items-center'>
            <img src={data?.getItemById.image} alt="" width={200} className='object-contain' />
            <div className='flex flex-col  p-3'>
                <p>{data?.getItemById.title} {quantity>1 && <span className='text-gray-400'>x{quantity}</span>}</p> 
                <p>${data?.getItemById.price}</p>
                <div className='flex py-5 items-center justify-around space-x-2'>
      <button><MinusCircleIcon onClick={() => decreaseCartQuantity(id,data?.getItemById.price)} className='w-9 text-red-600 cursor-pointer'> </MinusCircleIcon></button>
      <span>{quantity}</span>
      <button><PlusCircleIcon onClick={() => increaseCartQuantity(id,data?.getItemById.price)} className='w-9 text-green-600 cursor-pointer'> </PlusCircleIcon></button>

      </div>

            </div>
            </div>


            <div className='flex items-center '>
            <h2 className='font-bold text-2xl'> ${data?.getItemById.price * quantity}</h2>
            <XIcon onClick= {() =>removeFromCart(id)} className='w-7 ml-10 rounded-lg outline hover:bg-slate-400 cursor-pointer'/>
            </div>
        </div>
        <hr/>
        </>
        
    )
}

export default CartItem
