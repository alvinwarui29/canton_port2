import './Contact.scss'
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Header headerText="contact" 
      icon={<BsFillInfoCircleFill  size={40}/>} />
    </div>
  )
}

export default Contact