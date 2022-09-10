import React from 'react'
import {ShoppingCartIcon, SearchIcon, ColorSwatchIcon} from '@heroicons/react/solid'
import { useShoppingCart } from '../context/ShoppingCartContext'
import {useSearchBar} from '../context/SearchBarContext'
function Header() {
    const {cartQuantity,openCart,closeCart} = useShoppingCart()
    const {updateSearched,searched} = useSearchBar()
    return (
        <div className= 'bg-white shadow-sm flex items-center'>

            <div className='flex items-center py-4 lg:justify-between flex-1 px-10'>

            <div className=' flex items-center'>
                <a href="/sellers"><h1 className='mr-10 font-bold text-lg'>Sellers</h1></a>
               <a href="/"> <h1 className='font-bold text-lg'>Store</h1></a>
            </div>

            <form className='flex items-center border rounded-sm space-x-2 px-3 py-2 ml-5'>
         
            <SearchIcon className='w-7 h-7'/>
            <input onChange={(e)=> updateSearched(e.target.value)
            } type='text' placeholder='Search' className='outline-none flex-1'></input>
            <button hidden type='submit'></button>
            </form>
           
        
       
    
        
  
        <button onClick={openCart}className='relative  w-10 h-10 cursor-pointer  mr-5' >
        <ShoppingCartIcon/>
        <div className=' w-5 h-5 rounded-full bg-red-700 absolute left-0 bottom-0 translate-x--3 translate-y-3  text-white flex justify-center items-center' >{cartQuantity}</div>
        </button>

        </div>
        </div>
    )
}

export default Header
