import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/loginForm/loginForm";
import { Helmet } from 'react-helmet'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    const TITLE = 'Log-In'
    return (
        <main>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
        <h1>Auth page</h1>
        <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'LOG IN' : 'SIGN UP'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </main>
    )
}