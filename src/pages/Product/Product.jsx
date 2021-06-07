import React from 'react'
import { InfoSection } from '../../Components'
import {homeObjTwo,homeObjThree,homeObjFour } from './Data'

const Home = () => {
    return (
        <>
          
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
          <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
