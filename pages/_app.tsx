import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {ApolloProvider} from '@apollo/client'
import client from '../apollo-client'
import { ShoppingCartProvider } from '../context/ShoppingCartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ShoppingCartProvider>
  <div className='h-screen  bg-slate-200'>
    <Header/>
  <Component {...pageProps} />
  </div>
  </ShoppingCartProvider>
  </ApolloProvider>
  )
}

export default MyApp
