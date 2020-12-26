import { useState } from "react";

export const UseForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  return [values, handleChange, handleReset];
};
