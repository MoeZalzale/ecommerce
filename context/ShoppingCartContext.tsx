import { createContext, ReactNode, useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"


type ShoppingCartProviderProps ={
    children: ReactNode
}

type ShoppingCartContext ={
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id: number,price:number)=> void
    decreaseCartQuantity: (id: number, price:number)=> void
    removeFromCart: (id: number)=> void
    cartQuantity: number
    cartItems: CartItem[]
    cartTotal: number

}

type CartItem = {
    id: number
    quantity: number
    price: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext )

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) =>{
    const [cartItems, setItems] = useState<CartItem[]> ([])
    const [isOpen, setIsOpen] = useState (false)


 

    const getItemQuantity =(id:number) =>{
        return  cartItems.find(item => item.id===id)?.quantity || 0
    }

    const increaseCartQuantity =(id:number,price:number) => {
            setItems(currItems => {
                if (currItems.find(item => item.id===id)==null){
                    return [...currItems,{id,quantity:1,price}]
                }else{
                    return currItems.map(item => {
                        if (item.id===id){
                            return {...item,quantity:item.quantity+1}
                        }else{
                            return item
                        }
                    })
                }
            })
    }

    const decreaseCartQuantity =(id:number) => {
        setItems(currItems => {
            if (currItems.find(item => item.id===id)?.quantity==1){
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if (item.id===id){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })
            }
        })
}
const removeFromCart = (id:number) =>{
    setItems(currItems => {
        return currItems.filter(item => item.id !==id)
    })
}

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)


const cartQuantity = cartItems.reduce((quantity,item) => item.quantity+quantity,0)
const cartTotal = cartItems.reduce((total,item) => item.quantity*item.price +total ,0)

    return <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity,openCart,closeCart,cartTotal}}>
        {children} 
          <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
}