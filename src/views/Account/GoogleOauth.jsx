import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login';


export class GoogleOauth extends Component {

    const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        onAutoLoadFinished,
        clientId,
        cookiePolicy,
        loginHint,
        hostedDomain,
        autoLoad,
        isSignedIn,
        fetchBasicProfile,
        redirectUri,
        discoveryDocs,
        onFailure,
        uxMode,
        scope,
        accessType,
        responseType,
        jsSrc,
        onRequest,
        prompt
      })

    const { signOut, loaded } = useGoogleLogout({
        jsSrc,
        onFailure,
        clientId,
        cookiePolicy,
        loginHint,
        hostedDomain,
        fetchBasicProfile,
        discoveryDocs,
        uxMode,
        redirectUri,
        scope,
        accessType,
        onLogoutSuccess
      })

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
                isSignedIn={true}
                />
            </div>
        )
    }
}

export default GoogleOauth
