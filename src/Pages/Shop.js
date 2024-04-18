import React from 'react'
import Hero from '../Compenat/Hero/Hero'

import Popular from '../Compenat/Popular/Popular'
import Offer from '../Compenat/Offer/Offre'
import NewCollection from '../Compenat/NewCollection/NewCollections'
import NewLetter from '../Compenat/NewLetter/NewLetters'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/> 
      <Offer/> 
      <NewCollection/>
      <NewLetter/>
      
    </div>
  )
}
