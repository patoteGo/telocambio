import Cookies from 'universal-cookie';
import { NAMES  } from './../config/config.js'


export const isAuth = () => {

    const cookies = new Cookies();
    // console.log('cc',context.token[0] , cookies.get(NAMES.COOKIENAME));
    
    if(cookies.get(NAMES.COOKIENAME)) {
    // if(context.token[0] === cookies.get(NAMES.COOKIENAME)) {
        // console.log(cookies.get(NAMES.COOKIENAME));
        return true;
    }
    return false;
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