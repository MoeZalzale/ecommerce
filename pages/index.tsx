import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {GET_SELLERS_ID, GET_ALL_ITEMS} from '../graphql/queries'
import {gql, useQuery} from '@apollo/client'
import client from '../apollo-client'
import { useEffect } from 'react'
import {PlusCircleIcon,MinusCircleIcon} from '@heroicons/react/solid'
import Product from '../components/Product'

const Home: NextPage = () => {



const {loading,error,data} = useQuery(GET_ALL_ITEMS)


interface Item {
  id: number
title: string
image: string
description: string
price : number

}


  return (
    <div className='grid grid-cols-4 gap-2 p-5 auto-rows-fr'>

    {data?.getItemList.map((item: Item)=>
      

      <Product {...item} />
      
      
      
      
      )}

    

      
    </div>
  )
}

export default Home
