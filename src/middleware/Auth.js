import Cookies from 'universal-cookie';
import { NAMES  } from './../config/config.js'
import { fetchUserById, fetchUserByToken } from './../config/api.js'


const cookies = new Cookies();
export const isAuth = async () => {
    
    if(!cookies.get(NAMES.COOKIENAME)) { return false }
    const token = cookies.get(NAMES.COOKIENAME);

    const userAPI = await fetchUserByToken(token);
    if (!userAPI ) return false;
    // const user = await fetchUserById(user.id);    
    // if (!user) return false;
    return {
        'token':token,
        'user':{
            'id': userAPI.id,
            'firstname': userAPI.firstname,
            'lastname': userAPI.lastname,
            'email': userAPI.email,
            'role': userAPI.role,
            }
    }
}






// class Auth {
//     constructor(){
//         const cookies = new Cookies();
//         if(cookies.get(NAMES.COOKIENAME, OPTIONS))
//         {
//             this.authenticated = true;
//         } else {
//             this.authenticated = false;
//         }
        
//     }

//     login(token, cb){
//         this.authenticated = true
//         const cookies = new Cookies();
//         cookies.set(NAMES.COOKIENAME, token, OPTIONS);
//         cb()
//     }

//     logout(cb){
//         this.authenticated = false;
//         cb();
//         // const cookies = new Cookies();
//         // cookies.remove(NAMES.COOKIENAME, OPTIONS);
//     }

//     isAuthenticated() {
//         return this.authenticated
//     }

// }

// export default new Auth()