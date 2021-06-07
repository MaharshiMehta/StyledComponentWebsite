import React from 'react'
import { InfoSection } from '../../Components'
import {homeObjThree,homeObjFour } from './Data'

const Home = () => {
    return (
        <>
          
          <InfoSection {...homeObjThree}/>
          <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
