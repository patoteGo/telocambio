export const URLBASE = 'telocambio';

const VERCEL = false;

export const APIS = {
    GETUSERS: VERCEL ? 'https://telocambio-api.herokuapp.com/users' : 'https://localhost:5000/users',
    GETUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/user' : 'https://localhost:5000/user', //aqui va el id del user
    CREATEUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/register' : 'https://localhost:5000/register', 
    LOGIN: VERCEL ? 'https://telocambio-api.herokuapp.com/login' : 'https://localhost:5000/login',
    USERTOKEN: VERCEL ? 'https://telocambio-api.herokuapp.com/token' : 'https://localhost:5000/token', 
    GETPRODUCTS: VERCEL ? 'https://telocambio-api.herokuapp.com/products' : 'https://localhost:5000/products',
    GETPRODUCTSBYUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/products/user' : 'https://localhost:5000/products/user',
    CREATEPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/product' : 'https://localhost:5000/product',
    CREATESWAP: VERCEL ? 'https://telocambio-api.herokuapp.com/swap/create' : 'https://localhost:5000/swap/create',
    GETSWAPBYPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/swap' : 'https://localhost:5000/swap',
    SWAPDONE: VERCEL ? 'https://telocambio-api.herokuapp.com/swap/done' : 'https://localhost:5000/swap/done',
    SENDEMAIL: VERCEL ? 'https://telocambio-api.herokuapp.com/sendemail' : 'https://localhost:5000/sendemail',
    ADMINEMAIL: 'patote.gonzalez@gmail.com'
}
export const NAMES = {
    COOKIENAME : 'auth'
}
export const OPTIONS = {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600,
    // domain : 'localhost',    
}

// https://source.unsplash.com/1600x900/?nature,water