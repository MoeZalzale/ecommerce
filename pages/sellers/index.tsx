import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import { GET_ALL_SELLERS} from '../../graphql/queries'
import Link from 'next/link'



const  SellersPage: NextPage =() => {
    const {loading, error, data} = useQuery(GET_ALL_SELLERS)

    return (
        <div className=' p-5 grid grid-cols-5'>
        <Link href={`/sellers/${data?.getSellerList[0].id}`}>
            <div className='flex flex-col rounded shadow-md bg-slate-300 p-5 justify-center hover:shadow-xl hover:cursor-pointer duration-200 ease-in'> 
            <div className='flex items-center justify-start w-full pb-5'>
                <div className='w-20 h-20 overflow-hidden rounded-full mr-10'>
                    <img src={data?.getSellerList[0].image} alt=""/>
                    </div>

                    <h1>{data?.getSellerList[0].name}'s Store</h1>
                </div>
                <p>{data?.getSellerList[0].description}</p>
            </div>
            </Link>

           
            
        </div>
    )
}

export default SellersPage
