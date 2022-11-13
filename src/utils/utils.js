export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const cardsContainer = document.querySelector('.places__items')
export const userSelectorsData = {
  userName: '.profile__title',
  userInfo: '.profile__subtitle',
  avatar: '.profile__avatar'
}

export const popups = {
  popupEdit:
  {
    title: 'Редактировать профиль',
    name: 'type_edit',
    buttonLabel: 'Сохранить',
  },
  popupAdd:
  {
    title: 'Новое место',
    name: 'type_add',
    buttonLabel: 'Сохранить',
  },
  popupSetAvatar:
  {
    title: 'Обновить аватар',
    name: 'type_set-avatar',
    buttonLabel: 'Сохранить',
  }
  ,
  popupConfirm:
  {
    title: 'Вы уверены?',
    name: 'type_confirm',
    buttonLabel: 'Да',
  }
}

export const inputs = {

  editNameInput:
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя'
  },
  editAboutInput: {
    type: 'text',
    name: 'about',
    placeholder: 'О себе'

  },

  addPlacenameInput: {
    type: 'text',
    name: 'name',
    placeholder: 'Название'
  },
  addPlaceUrlInput: {
    type: 'url',
    name: 'link',
    placeholder: 'Ссылка на картинку'
  },
  avatarUrlInput:
  {
    type: 'url',
    name: 'avatar',
    placeholder: 'Ссылка на аватар'
  }
}
