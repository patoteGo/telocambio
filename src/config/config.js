export const URLBASE = 'telocambio';
export const APIS = {
    GETUSERS: 'https://reqres.in/api/users?page=1',
    GETUSER: 'https://reqres.in/api/users/2', //aqui va el id del user
    CREATEUSER: '',
    GETPOSTS: '',
}
export const options = {
    secure: process.env.NODE_ENV === 'production'
}

// https://source.unsplash.com/1600x900/?nature,water