export const URLBASE = 'telocambio';

const VERCEL = process.env.NODE_ENV === 'production';

export const APIS = {
    GETUSERS: VERCEL ? 'https://telocambio-api.herokuapp.com/users' : 'http://localhost:5000/users',
    GETUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/user' : 'http://localhost:5000/user', //aqui va el id del user
    CREATEUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/register' : 'http://localhost:5000/register', 
    LOGIN: VERCEL ? 'https://telocambio-api.herokuapp.com/login' : 'http://localhost:5000/login',
    USERTOKEN: VERCEL ? 'https://telocambio-api.herokuapp.com/token' : 'http://localhost:5000/token', 
    GETPRODUCTS: VERCEL ? 'https://telocambio-api.herokuapp.com/products' : 'http://localhost:5000/products',
    GETPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/product' : 'http://localhost:5000/product',
    
    GETPRODUCTSBYUSER: VERCEL ? 'https://telocambio-api.herokuapp.com/products/user' : 'http://localhost:5000/products/user',
    CREATEPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/product' : 'http://localhost:5000/product',
    DELETEPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/product' : 'http://localhost:5000/product',
    CREATESWAP: VERCEL ? 'https://telocambio-api.herokuapp.com/swap/create' : 'http://localhost:5000/swap/create',
    GETSWAPBYPRODUCT: VERCEL ? 'https://telocambio-api.herokuapp.com/swap' : 'http://localhost:5000/swap',
    SWAPDONE: VERCEL ? 'https://telocambio-api.herokuapp.com/swap/done' : 'http://localhost:5000/swap/done',
    SWAPDELETE: VERCEL ? 'https://telocambio-api.herokuapp.com/swap/delete' : 'http://localhost:5000/swap/delete',
    SENDEMAIL: VERCEL ? 'https://telocambio-api.herokuapp.com/sendemail' : 'http://localhost:5000/sendemail',

    UPLOADIMAGE: VERCEL ? 'https://telocambio-api.herokuapp.com/upload' : 'http://localhost:5000/upload',

    ADMINEMAIL: 'patote.gonzalez@gmail.com',
    ADMINEMAIL2: 'sequeracrespo@gmail.com',
    BASEURL: VERCEL ? 'https://telocambio-api.herokuapp.com/' : 'http://localhost:3000/',
}
export const NAMES = {
    COOKIENAME : 'auth'
}
export const OPTIONS = {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 36000,
    domain : 'localhost',    
}

// https://source.unsplash.com/1600x900/?nature,water