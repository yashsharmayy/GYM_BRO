import React from 'react'
import Home from './component/Home'
import Navbar from './component/navbar'
import ReactLenis, { useLenis } from 'lenis/react'

const App = () => {



  return (
    <div>

      <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: "vertical",
        smoothwheel: true,
        smoothtouch: true,
        touchMultiplier: 2,
      }} >

        <Navbar />
        <Home />
      </ReactLenis>


    </div>
  )
}

export default App