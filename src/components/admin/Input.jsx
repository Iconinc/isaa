import React from 'react'

const Input = ({ value, change, classes }) => {
  return (
    <input type="text" value={value} className={`px-4 py-2 rounded-sm border-none outline-none bg-slate-100/10 ${classes}`} onChange={change}/>
  )
}

export default Input