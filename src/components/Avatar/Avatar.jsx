import React from 'react'

import './Avatar.scss'

const Avatar = ({ src, alt }) => {
  return (
    <figure className="avatar">
      <img src={src} alt={alt} className="avatar__img" />
    </figure>
  )
}

export default Avatar
