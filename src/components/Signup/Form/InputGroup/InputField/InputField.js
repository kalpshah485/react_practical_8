import React from 'react'

function InputField({ name, type, value, onChange, onBlur }) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete="off"
    />
  )
}

export default InputField