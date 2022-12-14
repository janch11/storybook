import React from 'react'
import "./Col.scss"

export const Col = ({children}) => {
  return (
    <div className='col'>
        <div className='col__content'>{children}</div></div>
  )
}
