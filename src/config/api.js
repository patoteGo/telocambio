import { APIS } from './config'

export const fetchUsers = async() => {
  const response = await fetch(APIS.GETUSERS);
  const res = response.json();
  return await res;
}

export const fetchUserById = async (userid) => {
    const response = await fetch(APIS.GETUSER + '/' +  userid);
    const res = response.json();
    // console.log('del api', APIS.GETUSER + '/' + userid );
    return await res;
}

export const createUser = async (data) => {
    const response = await fetch(APIS.CREATEUSER, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
    });
    const res = response.json();
    return await res;
}

export const loginUser = async (data) => {
    const response = await fetch(APIS.LOGIN, {
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

export const fetchUserByToken = async (token) => {
  const response = await fetch(APIS.USERTOKEN,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    )
  const res = response.json();
  console.log('token', res );
  
  return await res;
}

export const fetchProducts = async() => {
  const response = await fetch(APIS.GETPRODUCTS);
  const res = response.json();
  return await res;
}

export const fetchProductsbyUser = async(userid) => {
  const response = await fetch(APIS.GETPRODUCTSBYUSER + '/' +  userid);
  const res = response.json();
  return await res;
}

export const fetchProductbyID = async(id) => {
  const response = await fetch(APIS.GETPRODUCT + '/' +  id);
  const res = response.json();
  return await res;
}

export const createProduct = async (data) => {
  const response = await fetch(APIS.CREATEPRODUCT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  const res = response.json();
  return await res;
}



export const deleteProduct = async (id) => {
  const response = await fetch(APIS.GETPRODUCT + '/' +  id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  const res = response.json();
  return await res;
}

export const createSwap = async (data) => {
  const response = await fetch(APIS.CREATESWAP, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  const res = response.json();
  return await res;
}

export const fetchSwapsbyProduct = async(productid) => {
  const response = await fetch(APIS.GETSWAPBYPRODUCT + '/' +  productid);
  const res = response.json();
  return await res;
}

export const SwapDone = async (data) => {
  const response = await fetch(APIS.SWAPDONE, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  const res = response.json();
  return await res;
}

export const SendEmail = async (data) => {
  console.log(data)
  const response = await fetch(APIS.SENDEMAIL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
  });
  const res = response.json();
  return await res;
}





// https://reqres.in/api/login
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }