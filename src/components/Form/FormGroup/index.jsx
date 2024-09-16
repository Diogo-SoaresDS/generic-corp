import { useState } from 'react'
import EyeIcon from '../../../assets/visibility_24.svg'
import EyeOffIcon from '../../../assets/visibility_off_24.svg'
import { twMerge } from 'tailwind-merge'

export default function FormGroup({ label, type, name, placeholder, register, validation, error }) {
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible)
    }

    return (
        <div className="relative flex flex-col">
            <label id={`${name}-label`} className="text-xs ml-4 hidden md:block lg:block font-medium text-gray-500 mb-1" htmlFor={name}>
                {label}
            </label>
            <input
                className={twMerge('px-4 py-3 text-sm rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none w-full focus:ring-2 focus:ring-gray-300', error ? 'border border-red-400' : '')}
                type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
                id={name}
                name={name}
                {...register(name, validation)}
                placeholder={placeholder}
                aria-label={placeholder}
                aria-labelledby={label ? `${name}-label` : 'error-label'}
                aria-invalid={error ? 'true' : 'false'}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute h-10 mt-1 md:mt-[22px] pr-4 p-2 inset-y-0 right-0 flex items-center"
                    onClick={togglePasswordVisibility}
                    aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                    tabIndex={-1}
                >
                    <img
                        src={isPasswordVisible ? EyeOffIcon : EyeIcon}
                        alt={isPasswordVisible ? 'Hide password' : 'Show password'}
                        className="h-5 w-5 text-gray-500"
                        aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                        tabIndex={0}
                    />
                </button>
            )}
            {error && (
                <p className="text-red-400 text-xs mt-1 ml-4" id={`${name}-error`}>
                    {error.message}
                </p>
            )}
        </div>
    )
}
