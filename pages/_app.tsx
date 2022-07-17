import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {ApolloProvider} from '@apollo/client'
import client from '../apollo-client'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'
import { SearchBarProvider } from '../context/SearchBarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SearchBarProvider>
      <ShoppingCartProvider>
  <div className='h-screen  bg-slate-200'>
    <Header/>
  <Component {...pageProps} />
  </div>
  </ShoppingCartProvider>
  </SearchBarProvider>
  </ApolloProvider>
  )
}

export default MyApp
