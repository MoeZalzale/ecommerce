import React from 'react'
import {useRouter} from 'next/router'
import {GET_SELLERS_ITEMS} from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import Product from '../../components/Product'
import context from 'react-bootstrap/esm/AccordionContext'





const Sellerstore = () => {

    type Item = {
        description: string
        price: number
        title: string
        id: number
        image: string
    }


  const {query: {id}} = useRouter()
  const {data, error , loading} = useQuery(GET_SELLERS_ITEMS, {variables: {id:id }})

    return (
       

        <>

     
        <div className= 'flex p-5 items-center'>
       
        <div className='w-20 h-20 overflow-hidden rounded-full mr-10'>
                    <img src={data?.getSellerById.image} alt=""/>
                    </div>
                <h1 className='text-4xl font-bold'>{data?.getSellerById.name}'s Store</h1>
        </div>
        <div className='grid grid-cols-4 gap-2 p-5 auto-rows-fr'>

        {data?.getSellerById.items.map((item:Item) => 
        <Product {...item}/>
        
        )}
        

     
          
        </div>
        

        </>

       
           

        
    )
}

export default Sellerstore
