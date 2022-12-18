export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = async ({email, password}) => {

  const response = await  fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({email,password})
  })

  const json = await response.json();
    if(response.ok){
      return json;
    }

    throw new Error(json.error);
  }

  export const authorize = async({email, password}) => {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })

  const json = await response.json();
    if(response.ok){
      return json;
  }

  throw new Error(json.error);
  };

// export const authorize = ({email, password}) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({email, password})
//   })
//   .then((response => response.json()))
//   .then((data) => {
//     console.log(data)
//     if (data.user){
//       localStorage.setItem('jwt', data.jwt);
//       return data;
//     }
//   })
//   .catch(err => console.log(err))
// };
