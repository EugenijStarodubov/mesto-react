import { useState, useEffect } from "react";

const useValidation = (value, validators) => {

  const [errorMessage, setErrorMessage] = useState('');

  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isUrlError, setUrlError] = useState(false);

  useEffect(() => {
    for (let validator in validators) {
      switch (validator) {
        case 'isEmpty':
          (value) ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLength':
          if ((value.length < validators[validator])) {
            setMinLengthError(true);
            setErrorMessage('Поле не может быть короче двух символов');
          } else {
            setMinLengthError(false);
            setErrorMessage('');
          }
          break;
        case 'isUrl':
          const regExp = /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;
          if (regExp.test(String(value).toLowerCase())) {
            setUrlError(false);
            setErrorMessage('');
          } else {
            setUrlError(true);
            setErrorMessage('Введите корректный Url-адрес');
          }
          break;
      }
    }
  }, [value]);

  const isInputValid =  !(isEmpty || minLengthError || isUrlError);

  return {
    isEmpty,
    errorMessage,
    isInputValid
  }
}

export const useInput = (initialValue, validators) => {

  const [value, setValue] = useState(initialValue);
  const inputValidity = useValidation(value, validators);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return {
    setValue,
    value,
    onChange,
     ...inputValidity
  }
}




