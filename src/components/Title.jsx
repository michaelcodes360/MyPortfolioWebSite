import React from 'react'

const Title = ({title, className}) => {
  return (
   <>
   <h1 className={`text-5xl font-bold text-center textShadow ${className}`}>{title}</h1>
   </>
  )
}

export default Title