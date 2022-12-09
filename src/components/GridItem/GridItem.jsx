import React from 'react'
import "./GridItem.scss"

export const GridItem = ({children}) => {
  return (
    <div className='grid-item'>
        <div className='grid-item__content'>{children}</div></div>
  )
}
