import React from 'react'
import backgroundImage from '../../assets/school.jpg'


const Background = () => {
  return (
<div className="bg-cover bg-center h-50 sm:h-100 sm:bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>

</div>

  )
}

export default Background
