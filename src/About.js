import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import {useProductContext} from "./context/productcontext"

const About = () => {

  const data = {
    name: "thapa Ecommerce"
  }
  return (
    <>
      <HeroSection myData = {data} />
    </>
  )
}

export default About
