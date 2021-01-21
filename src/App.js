import React from 'react'

import { GlobalStyles } from './globalStyles'
import { Hero, Products, Feature, Footer } from './components'
import { productData } from './data'
import { productDataTwo } from './data'

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet treats for you' data={productDataTwo} />
      <Footer />
    </>
  )
}

export default App
