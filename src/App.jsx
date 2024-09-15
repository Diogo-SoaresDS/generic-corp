import Local from './assets/local.png'
import Logo from './assets/logo.png'
import LogoGoogle from './assets/google-logo.png'

export default function App() {
    return (
        <main>
            <aside>
                <img src={Local} alt="Local" />
            </aside>

            <section>
                <header>
                    <img src={Logo} alt="Logo Generic Corp" />
                    <span>Generic Corp</span>
                </header>
                
                <div>
                    <h1>Nice to see you again</h1>
                    
                    <form>
                        <div>
                            <label htmlFor="login">Login</label>
                            <input type="text" id="login" name="login" placeholder="Email or phone number" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter password" />
                        </div>
                        <div>
                            <label htmlFor="toggle">
                                <input type="checkbox" name="toggle" id="toggle" />
                                <span>Remember me</span>
                            </label>
                            <p>
                                <a href="#">Forgot password?</a>
                            </p>
                        </div>
                        <button type="submit">Sign in</button>
                    </form>
                </div>

                <hr />
                <div>
                    <button>
                        <img src={LogoGoogle} alt="Logo Google" />
                        <span>Or sign in with Google</span>
                    </button>

                    <p>
                        Dont have an account?
                        <a href="#"> Sign up now</a>
                    </p>
                </div>
            </section>
        </main>
    )
}
