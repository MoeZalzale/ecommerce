import React from 'react'
import {PlusCircleIcon,MinusCircleIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'

interface Item {
    id: number
    title: string
    image: string
    description: string
    price : number
    
    }
    

const Product = ({id,title,image,description,price}: Item ) => {
const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity} = useShoppingCart()
   
const quantity = getItemQuantity(id)

    return (
        <div className='bg-white shadow-sm flex flex-col items-center rounded max-w-sm important' >
      <h1> {title}</h1>
      <h1 className='font-bold'>${price}</h1>
      <img src={image} alt="" width={250}  className=' p-3 flex-1 object-contain '/>
      <p>{description}</p>

      <div className='flex py-5 items-center justify-around space-x-2'>
      <button><MinusCircleIcon onClick={() => decreaseCartQuantity(id,price)} className='w-9 text-red-600 cursor-pointer'> </MinusCircleIcon></button>
      <span>{quantity}</span>
      <button><PlusCircleIcon onClick={() => increaseCartQuantity(id,price)} className='w-9 text-green-600 cursor-pointer'> </PlusCircleIcon></button>

      </div>
    

    </div>
    )
}

export default Product
