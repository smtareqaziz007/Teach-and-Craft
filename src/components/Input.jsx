import React, { useEffect, useRef } from "react";

export const Input = ({
  label,
  fieldName,
  onChangeHandler,
  defaultValue,
  type = "text",
  resetCounter,
}) => {
  const input = useRef(null);
  useEffect(() => {
    if (input && input.current) {
      // console.log(input.current.value)
      input.current.value = defaultValue ? defaultValue : "";
    }
  }, [resetCounter]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        ref={input}
        type={type}
        id={fieldName}
        name={fieldName}
        onChange={onChangeHandler}
      />
    </div>
  );
};
