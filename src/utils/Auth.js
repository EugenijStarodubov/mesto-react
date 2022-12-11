export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ({email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email,password})
  })
  .then(response =>{

    if(response.ok){
      return response.json();
    }
    throw new Error(response.json().message);
  })
  .then((res) => {

    return res;
  })
  .catch(err => console.log(err.message));
}
