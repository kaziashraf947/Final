import React from 'react'
import {AiOutLineMenu} from 'react-icons/ai'
import React, {useState} from 'react'
const Sidenav = () => {
    const [nav, setNav]= useState(false);
  return (
    <div>
        <AiOutLineMenu/>
    </div>
  )
}

export default Sidenav