import {  useEffect, useContext } from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";


const UserForm = ({formsName, formsId, formsTitle, formsButtonLabel, isFormValid, onSubmit}) => {

  const emailInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });

  const passwordInput = useInput('', {
    'isEmpty': true,
    'minLength': 2,
  });

  return (

      <form action="#"
        className={`form user-form__form`}
        method="POST"
        name={`form-${formsName}`}
        id={`form-${formsId}`}
        onSubmit={onSubmit}
      >
        <h2 className="title form__title">{formsTitle}</h2>

      <label className="form-field" >
        <input id="email-input" type="email"
          className="form__input form__input_field_email"
          name="email" placeholder={"Email"}
          value={emailInput.value}
          onChange={emailInput.onChange}
          noValidate
          required />
        <span id="email-input-error" className={`form__error ${!emailInput.isEmpty && !emailInput.isInputValid ? 'form__error_visible' : ''}`}>{emailInput.errorMessage}</span>
      </label>

      <label className="form-field" >
        <input id="password-input" type="password"
          className="form__input form__input_field_password"
          name="password" placeholder="Пароль"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
          noValidate
          required />
        <span id="password-input-error" className={`form__error  ${!passwordInput.isEmpty && !passwordInput.isInputValid ? 'form__error_visible' : ''}`}>{passwordInput.errorMessage}</span>
      </label>
      <button type="submit"
            className={`button form__button
            form__button${((!passwordInput.isInputValid || !emailInput.isInputValid)) ? '_disabled' : ''}`}
            aria-label={'Войти'}
            name={`form-button_${formsName}`}
             disabled={!(passwordInput.isInputValid && emailInput.isInputValid)}
          >
            {formsButtonLabel}
          </button>
        </form>
  )
};

export default UserForm;
