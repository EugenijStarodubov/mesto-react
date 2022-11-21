import { useState, useEffect } from "react";


const useValidation = (value, validators) => {
  const [isInputValid, setInputValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorVisible, setErrorVisible] = useState('');

  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [isUrlError, setUrlError] = useState(false);

  useEffect(() => {
    for (let validator in validators) {
      switch (validator) {
        case 'isEmpty':
          (value) ? setEmpty(false) : setEmpty(true);
          break;
        case 'minLength':
          if (value.length < validators[validator]) {
            setMinLengthError(true);
            setErrorMessage('Поле не может быть короче двух символов');
            setErrorVisible('popup__error_visible');
          } else {
            setMinLengthError(false);
            setErrorMessage('');
            setErrorVisible('');
          }
          break;
        case 'isUrl':
          const regExp = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
          if (!regExp.test(String(value).toLowerCase()) && !isEmpty) {
            setUrlError(true);
            setErrorMessage('Введите корректный Url-адрес');
            setErrorVisible('popup__error_visible');
          } else {
            setUrlError(false);
            setErrorMessage('');
            setErrorVisible('');
          }
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    (isEmpty || minLengthError || isUrlError)
      ? setInputValid(false)
      : setInputValid(true)
  }, [isEmpty, minLengthError, isUrlError]);

  return {
    errorMessage,
    isErrorVisible,
    minLengthError,
    isUrlError,
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




