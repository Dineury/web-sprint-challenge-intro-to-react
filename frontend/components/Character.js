import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const {personName, planetName} = props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isActive, setIsActive] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
 
  const toggleListener = () => {
   setIsActive(isActive => !isActive);
  
  }


 

  
  return (
    <div  onClick={toggleListener} className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{personName}</h3>
      {isActive && (
        <p>

        Planet:
          <span className='character-planet'> {planetName} </span>
        </p>
      )}
    
     
    </div>
  )
}

export default Character
