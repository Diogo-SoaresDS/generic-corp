import Local from './assets/local.png'
import Logo from './assets/logo.png'
import LogoGoogle from './assets/google-logo.png'
import Button from './components/Button'
import Form from './components/Form'

export default function App() {
    return (
        <main className="w-screen h-screen grid grid-cols-3 grid-rows-6">
            <aside className="row-span-6 col-span-2">
                <img className="h-full w-full" src={Local} alt="Local" />
            </aside>

            <section className="row-span-6 flex justify-center items-center flex-col">
                <div className="w-[70%]">
                    <div className="flex items-center mb-6">
                        <img className="w-12" src={Logo} alt="Logo Generic Corp" />
                        <span className="font-bold text-lg ml-2">Generic Corp</span>
                    </div>
                    
                    <Form />
                    <hr className="border-y-[1px] border-gray-100" />
                    <div className="text-center">
                        <Button className="flex gap-2 items-center justify-center bg-gray-800 text-slate-50 w-full">
                            <img className="w-4" src={LogoGoogle} alt="Logo Google" />
                            <span className="text-sm">Or sign in with Google</span>
                        </Button>

                        <p className="text-sm font-[600]">
                            Dont have an account?
                            <a className="text-blue-500 ml-2" href="#"> Sign up now</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
