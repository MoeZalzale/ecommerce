import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import { GET_ALL_SELLERS} from '../../graphql/queries'
import Link from 'next/link'



const  SellersPage: NextPage =() => {

    type Seller ={
        id: number
        image: string
        name: string
        description: string

    }


    const {loading, error, data} = useQuery(GET_ALL_SELLERS)

    return (
        <div className=' p-5 grid grid-cols-5 gap-5'>

        {data?.getSellerList.map((seller: Seller) => 
        
       

        <Link href={`/sellers/${seller.id}`}>
            <div className='flex flex-col rounded shadow-md bg-slate-300 p-5 justify-center hover:shadow-xl hover:cursor-pointer duration-200 ease-in'> 
            <div className='flex items-center justify-start w-full pb-5'>
                <div className='w-20 h-20 overflow-hidden rounded-full mr-10'>
                    <img src={seller.image} alt=""/>
                    </div>

                    <h1>{seller.name}'s Store</h1>
                </div>
                <p>{seller.description}</p>
            </div>
            </Link>

)}
            
        </div>
    )
}

export default SellersPage
