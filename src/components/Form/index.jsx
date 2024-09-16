import RememberMe from "../../RememberMe"
import Button from "../Button"
import FormGroup from "./FormGroup"
import { useForm } from 'react-hook-form'

export default function Form() {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log('Form data:', data)
    }

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Nice to see you again</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-3">
                <FormGroup 
                    label="Login" 
                    type="text" 
                    name="login"
                    register={register}
                    error={errors.login}
                    validation={{ required: 'Email or phone number is required' }}
                    placeholder="Email or phone number"
                />
                <FormGroup 
                    label="Password" 
                    type="password" 
                    name="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required' }}
                    placeholder="Enter password" 
                />
                <RememberMe />
                <Button className="w-full bg-blue-600 font-bold text-slate-50 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700">Sign in</Button>
            </form>
        </div>
    )
}