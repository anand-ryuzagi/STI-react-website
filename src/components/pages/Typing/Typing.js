import React,{useEffect} from 'react'
import Prospect from '../../ProspectSection'
import HeroSection from '../../HeroSection'
import {homeObjFive} from './Data'

function Typing(){

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
    return(
        <>
        <HeroSection {...homeObjFive}/>
        <Prospect />
        </>
    )
}

export default Typing