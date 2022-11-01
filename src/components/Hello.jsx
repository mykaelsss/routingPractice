import React from 'react'
import { useParams } from 'react-router-dom'
const Hello = () => {
    const { word, color, bgColor } = useParams();

return (
    <div>
        <h1 className='p-3' style={{backgroundColor:bgColor, color:color}}>The word is: {word}</h1>
    </div>
  )
}

export default Hello
