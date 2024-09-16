import RememberMe from "../../RememberMe"
import Button from "../Button"
import FormGroup from "./FormGroup"

export default function Form() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Nice to see you again</h1>
            <form className="flex flex-col gap-3 mt-3">
                <FormGroup 
                    label="Login" 
                    type="text" 
                    name="login" 
                    placeholder="Email or phone number"
                />
                <FormGroup 
                    label="Password" 
                    type="password" 
                    name="password"
                    placeholder="Enter password" 
                />
            </form>
            <RememberMe />
            <Button className="w-full bg-blue-600 font-bold text-slate-50 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700">Sign in</Button>
        </div>
    )
}