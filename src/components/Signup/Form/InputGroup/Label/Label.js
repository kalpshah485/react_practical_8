import React from 'react'

function Label({ name, label }) {
  return (
    <label htmlFor={name}>{label}</label>
  )
}

export default Label