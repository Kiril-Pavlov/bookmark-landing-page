import React from 'react'
import Tabs from './Tabs'
import "../components/Features.css"

const Features = () => {
  return (
    <div>

      <h2 className="features-title">Features</h2>
      <p className="features-paragraph">Our aim is to make it quick and easy for you to access your favourite websites.
       Your bookmarks sync between your devices so you can access them on the go.</p>


      <Tabs />


    </div>

    


  )
}

export default Features