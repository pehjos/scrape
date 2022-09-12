import React from 'react'
import Appbar from '../Appbar/Appbar'
import Body from '../Body/Body'
import Carousel from '../caurosel/Carosel'
import Counter from '../counter/Counter'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div>
     <Appbar/>
     <Carousel/>   
<Counter/>
<Body/>
<Footer/>
    </div>
  )
}

export default Home