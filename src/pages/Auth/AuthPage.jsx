import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/loginForm/loginForm";
import { Helmet } from 'react-helmet'

export default function AuthPage({ setUser }) {
    const TITLE = 'Log-In'
    return (
        <main>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
        <h1>Auth page</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </main>
    )
}