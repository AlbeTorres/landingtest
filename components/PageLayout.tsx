import React from 'react'
import Head from 'next/head'

type props ={
    tittle:string
    children:JSX.Element[]
}

const PageLayout = ({children,tittle}:props ) => {
  return (
    <>
        <Head>
          <title>{tittle}</title>
          <meta name="description" content="The best shop to buy nothing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
        
    </>
  )
}

export default PageLayout