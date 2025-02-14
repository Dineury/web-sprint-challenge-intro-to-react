import React, { useState, useEffect } from 'react'

function Character(props) { // ❗ Add the props
  const {personName, planetName} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isActive, setIsActive] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  useEffect(() => {
  const toggleListener = () => {
   setIsActive(!true);
   if(isActive){
    return (
   <span> Planet: {planetName} </span>
    )
   }
  }
  document.addEventListener('click',toggleListener)

  return () => {
    document.removeEventListener('click',toggleListener)
  }
  },[])

  
  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */
      <h3 className='character-name'>{personName}</h3>
      
      }
     
    </div>
  )
}

export default Character
