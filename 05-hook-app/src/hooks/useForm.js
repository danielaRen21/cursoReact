import { useState } from "react";

export const useForm = (initialState = {}) => {
  // recibe un objeto con las propiedades
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };
  const handleInputChange = ({ target }) => {
    //para leer rapidamente
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
