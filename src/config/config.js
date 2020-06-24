export const URLBASE = 'telocambio';
export const APIS = {
    GETUSERS: 'https://reqres.in/api/users?page=1',
    GETUSER: 'http://localhost:5000/user/', //aqui va el id del user
    CREATEUSER: 'http://localhost:5000/register',
    GETPOSTS: '',
    LOGIN: 'http://localhost:5000/login',
    USERTOKEN: 'http://localhost:5000/token',
    CREATEPRODUCT: 'http://localhost:5000/product'

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