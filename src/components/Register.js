import {  useEffect, useContext } from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useInput } from "../customHooks/useInput";
import UserForm from "./UserForm";


const Register = ({name, isFormValid, onSubmit}) => {

  // const { currentUser } = useContext(CurrentUserContext);

  // useEffect(() => {
  //   nameInput.setValue(currentUser.name);
  //   aboutInput.setValue(currentUser.about);
  // }, [currentUser]);



  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   props.onUpdateUser({
  //     name: nameInput.value,
  //     about: aboutInput.value,
  //   });
  // }

  // const handleClose = () => {
  //   nameInput.setValue(currentUser.name);
  //   aboutInput.setValue(currentUser.about);
  //   props.onClose();
  // }

  return (
    <div className={`user-form`} >
    <div className={"user-form__modal-window"} >

     <UserForm
      formsName={'register'}
      formsId={'register'}
      formsTitle={'Регистрация'}
      formsButtonLabel={'Зарегистрироваться'} />
      </div>
    </div>
  )
};

export default Register;
