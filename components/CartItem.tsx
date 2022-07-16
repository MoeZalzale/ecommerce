import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ITEM_BY_ID } from '../graphql/queries'
import {XIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'

type CartItem = {
    id: number
    quantity: number
}
function CartItem({id,quantity} : CartItem) {

const {loading,error,data} = useQuery(GET_ITEM_BY_ID,{
    variables: {id: id}
})

const {removeFromCart} = useShoppingCart()
    return (
        <>
        
        <div className='w-full flex justify-between p-5 items-center'>
            <div className='flex items-center'>
            <img src={data?.getItemById.image} alt="" width={200} className='object-contain' />
            <div className='flex flex-col  p-3'>
                <p>{data?.getItemById.title} {quantity>1 && <span>x{quantity}</span>}</p> 
                <p>${data?.getItemById.price}</p>

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
