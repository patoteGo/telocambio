import Cookies from 'universal-cookie';
import { NAMES , OPTIONS } from './../config/config.js'
class Auth {
    constructor(){
        const cookies = new Cookies();
        if(cookies.get(NAMES.COOKIENAME, OPTIONS))
        {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        
    }

    login(token, cb){
        this.authenticated = true
        const cookies = new Cookies();
        cookies.set(NAMES.COOKIENAME, token, OPTIONS);
        cb()
    }

    logout(cb){
        this.authenticated = false;
        cb();
        // const cookies = new Cookies();
        // cookies.remove(NAMES.COOKIENAME, OPTIONS);
    }

    isAuthenticated() {
        return this.authenticated
    }

}

export default new Auth()