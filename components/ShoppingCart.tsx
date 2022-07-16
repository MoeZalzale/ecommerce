import { useQuery } from '@apollo/client'
import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import {AnimatePresence,motion} from 'framer-motion'

type ShoppingCartProps = {
    isOpen: boolean
}

function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {cartItems,closeCart,cartTotal} = useShoppingCart()


    const variant ={
        initial: {opacity:0},
        animate: {opacity:1,transition:{type:'spring', duration:0.2}},
        exit: {opacity:0,transition:{type:'spring', duration:0.2}},

    }

    return (
<>
<AnimatePresence >
       {isOpen &&   <motion.div 
       key={1}
      variants={variant}
      initial='initial'
      animate='animate'
      exit='exit'
       className=' bg-[rgba(0,0,0,0.5)] absolute top-0 w-full h-full'  onClick={closeCart}>
    <motion.div 
    key={1}
    initial={{width:0}}
    animate={{width:'700px',transition:{type:'spring',duration:0.5}}}
    exit={{width:0, transition:{type:'spring',duration:0.5}}}
    
    className='h-screen bg-white absolute top-0 right-0 flex flex-col z-10  ' onClick={(e) => e.stopPropagation()} >
        
        <h1 className='p-5 font-bold text-lg'>Cart</h1>
        <hr/>

        <div className='flex flex-col w-full '>

        {cartItems.map(item=>
            
            <CartItem {...item}/>
            
            )}
            

        </div>


                <h1 className=' ml-auto text-5xl p-5'>Total: ${cartTotal}</h1>

    </motion.div>
     </motion.div>
}
</AnimatePresence>
     </>
       
        
        
    ) 
        
}

export default ShoppingCart
