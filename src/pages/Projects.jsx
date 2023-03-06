import React from 'react'
import Excel from '../components/Excel'
import Imagegallery from '../components/Imagegallery'
import Webdev from '../components/Webdev'
import Youtube from '../components/Youtube'

function Projects() {
  return (
    <div className="container-fluid">
      <div>
        <Webdev />
        <Imagegallery />
        <Youtube />
        <Excel />
      </div>
    </div>
  )
}

export default Projects