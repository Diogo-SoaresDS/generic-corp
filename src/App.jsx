import Local from './assets/local.png'
import Logo from './assets/logo.png'
import LogoGoogle from './assets/google-logo.png'
import Button from './components/Button'
import Form from './components/Form'

export default function App() {
    return (
        <main className="flex justify-center items-center w-screen h-screen">
            <div className="h-full w-full grid sm:grid-cols-1 lg:w-full lg:grid-cols-3 md:w-3/5 md:items-center grid-rows-6">
                <aside className="row-span-6 col-span-2 hidden md:col-span-1 lg:block lg:h-full lg:col-span-2">
                    <img className="w-full h-full object-cover" src={Local} alt="Local" />
                </aside>

                <section className="row-span-6 flex justify-center">
                    <div className="w-[90%] h-full flex flex-col-reverse md:flex-col xl:w-[70%]">
                        <header className="flex items-center mb-12 justify-center md:justify-start">
                            <img className="w-12" src={Logo} alt="Logo Generic Corp" />
                            <span className="font-bold text-sm md:text-lg ml-2">Generic Corp.</span>
                        </header>
                        
                        <div className="h-full flex flex-col justify-center">
                            <Form />
                            <hr className="border-y-[1px] border-gray-100" />
                            <div className="text-center">
                                <Button className="flex gap-2 items-center justify-center bg-gray-800 text-slate-50 w-full transition-transform duration-300 transform hover:scale-105 hover:bg-gray-950">
                                    <img className="w-4" src={LogoGoogle} alt="Logo Google" />
                                    <span className="text-sm">Or sign in with Google</span>
                                </Button>

                                <p className="text-sm font-medium">
                                    Dont have an account?
                                    <a className="text-blue-700 ml-2" href="#"> Sign up now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
