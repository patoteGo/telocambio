export const URLBASE = 'telocambio';
export const APIS = {
    GETUSERS: 'https://reqres.in/api/users?page=1',
    GETUSER: 'https://reqres.in/api/users/2', //aqui va el id del user
    CREATEUSER: '',
    GETPOSTS: '',
    LOGIN: 'https://reqres.in/api/login',

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