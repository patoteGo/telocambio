

export const fetchUser = async (userid) => {
    const response = await fetch(`https://reqres.in/api/users/${userid}`)
    const res = response.json();
    console.log('del api', res );
    
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