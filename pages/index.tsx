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
import { useSearchBar } from '../context/SearchBarContext'

const Home: NextPage = () => {

const {searched}= useSearchBar()

const {loading,error,data} = useQuery(GET_ALL_ITEMS)


interface Item {
  id: number
title: string
image: string
description: string
price : number

}


  return (
    <div className='grid grid-cols-5 gap-5 p-5 auto-rows-fr'>

    {data?.getItemList.filter((item: Item)=>

       item.title.toLowerCase().includes(searched.toLowerCase()))
       .map((item: Item) => 

      <Product {...item} />
      
      
       )
      
      }

    

      
    </div>
  )
}

export default Home
