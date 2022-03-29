import React from 'react'

function InputField({ name, type, value, setValue }) {
  return (
    <input
      type={type}
      id={name}
      className="form-control"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      autoComplete="off"
    />
  )
}

export default InputField