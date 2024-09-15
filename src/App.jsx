import Local from './assets/local.png'
import Logo from './assets/logo.png'
import LogoGoogle from './assets/google-logo.png'
import Button from './components/Button'
import Form from './components/Form'

export default function App() {
    return (
        <main>
            <aside>
                <img src={Local} alt="Local" />
            </aside>

            <section>
                <div>
                    <img src={Logo} alt="Logo Generic Corp" />
                    <span>Generic Corp</span>
                </div>
                
                <Form />
                <hr />
                <div>
                    <Button>
                        <img src={LogoGoogle} alt="Logo Google" />
                        <span>Or sign in with Google</span>
                    </Button>

                    <p>
                        Dont have an account?
                        <a href="#"> Sign up now</a>
                    </p>
                </div>
            </section>
        </main>
    )
}
