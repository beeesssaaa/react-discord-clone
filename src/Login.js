import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase";
import React from 'react'
import "./Login.css"

function Login() {
    const signIn = () => {
        //do clever google login shizz...
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <h2>This is login page</h2>

            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="Discord"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
