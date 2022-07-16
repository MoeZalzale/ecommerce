import React from 'react'
import {ShoppingCartIcon, SearchIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'
function Header() {
    const {cartQuantity,openCart,closeCart} = useShoppingCart()
    return (
        <div className= 'bg-white shadow-sm flex items-center'>

            <div className='flex items-center py-4 lg:justify-center flex-1'>
           
            <form className='flex items-center border rounded-sm space-x-2 px-3 py-2 ml-5'>
         
            <SearchIcon className='w-7 h-7'/>
            <input type='text' placeholder='Search' className='outline-none flex-1'></input>
            <button hidden type='submit'></button>
            </form>
           
        
       
    
        </div>
  
        <button onClick={openCart}className='relative  w-10 h-10 cursor-pointer  mr-5' >
        <ShoppingCartIcon/>
        <div className=' w-5 h-5 rounded-full bg-red-700 absolute left-0 bottom-0 translate-x--3 translate-y-3  text-white flex justify-center items-center' >{cartQuantity}</div>
        </button>

        
        </div>
    )
}

export default Header
