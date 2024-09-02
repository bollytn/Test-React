import React, { useContext } from 'react'
import phoneImg from './images/phone.svg'
import {AppContext} from './context'

const Hero = () => {
  const data = useContext(AppContext)
  console.log(data);
  
  return <h2>hero component</h2>
}

export default Hero