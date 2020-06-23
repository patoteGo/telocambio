import { APIS } from './config'

export const fetchUserById = async (userid) => {
    const response = await fetch(APIS.GETUSER + userid);
    const res = response.json();
    // console.log('del api', res );
    
    return await res;
}

export const fetchUserByToken = async (token) => {
  const response = await fetch(APIS.USERTOKEN + token,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
  const res = response.json();
  // console.log('token', res );
  
  return await res;
}

export const loginUser = async (data) => {
    const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    const res = response.json();
    return await res;
}

// https://reqres.in/api/login
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }