import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class GoogleOauth extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj)
        
    }
    render() {
        return (
            <div>
                <GoogleLogin
                clientId= "739887851095-8adae8hjotoqt869ivcn88ot08thhdif.apps.googleusercontent.com"
                buttonText= "Login"
                onSuccess= { this.responseGoogle }
                onFailure= { this.responseGoogle }
                cookiePolicy= { 'single_host_origin' }
                />
            </div>
        )
    }
}

export default GoogleOauth
