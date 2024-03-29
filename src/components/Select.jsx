import React, { useEffect, useRef } from "react"

export const Select = ({ label, fieldName, defaultValue, options, onChange, resetCounter }) => {
  const select = useRef(null)
  useEffect(() => {
    if (select && select.current) {
      // console.log(select.current.value)
      select.current.value = defaultValue
    }
  }, [resetCounter])
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <select ref={select} id={fieldName} name={fieldName} defaultValue={defaultValue} onChange={onChange}>
        {options.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  )
}
