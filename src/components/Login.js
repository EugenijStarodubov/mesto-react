import {  useEffect, useContext } from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";
import UserForm from "./UserForm";


const Login = ({name, isFormValid,  onLogin}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(e.target.email.value, e.target.password.value)
    .then((data) => {
      if (data.user){
        localStorage.setItem('jwt', data.jwt);
        return data;
      }
    })

    }


  return (
    <div className={`user-form`} >
    <div className={"user-form__modal-window"} >

     <UserForm
      formsName={'login'}
      formsId={'login'}
      formsTitle={'Вход'}
      formsButtonLabel={'Войти'}
      onSubmit={handleSubmit} />
      <p className="register__text"></p>
      </div>
    </div>
  )
};

export default Login;
