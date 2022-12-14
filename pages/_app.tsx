import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProductoState from '../context/productoState'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ProductoState>
      <Component {...pageProps} />

    </ProductoState>
    ) 
  
}

