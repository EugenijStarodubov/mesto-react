import {  useEffect, useContext, useState } from "react";
import {Link, withRouter} from "react-router-dom";
import  useClose from '../customHooks/useClose'

import * as auth from "../utils/Auth";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";
import UserForm from "./UserForm";
import InfoTooltip from "./InfoTooltip";



const Register = ({isOk, isOpen, onClose, onRegister, ...props}) => {



const handleSubmit = (e) => {
  e.preventDefault();
  onRegister(e.target.email.value, e.target.password.value);
  }








  return (
    <>
      <div className={`user-form`} >
        <div className={"user-form__modal-window"} >

          <UserForm
            formsName={'register'}
            formsId={'register'}
            formsTitle={'Регистрация'}
            formsButtonLabel={'Зарегистрироваться'}
            onSubmit={handleSubmit}
          />

          <p className="register__text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>

        </div>
      </div>

      <InfoTooltip isOk={isOk}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          props.history.push('/sign-in');}}
       />

    </>
  )
};

// export default Register;
export default withRouter(Register);
