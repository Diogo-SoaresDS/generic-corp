import RememberMe from "../../RememberMe"
import Button from "../Button"
import FormGroup from "./FormGroup"

export default function Form() {
    return (
        <div>
            <h1>Nice to see you again</h1>
            <form>
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
            <Button>Sign in</Button>
        </div>
    )
}