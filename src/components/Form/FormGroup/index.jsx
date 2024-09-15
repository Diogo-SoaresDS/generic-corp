import { useState } from 'react';
import EyeIcon from '../../../assets/visibility_24.svg';
import EyeOffIcon from '../../../assets/visibility_off_24.svg';

export default function FormGroup({ label, type, name, placeholder }) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="relative flex flex-col">
            <label className="text-xs ml-4 hidden md:block lg:block font-medium text-gray-500 mb-1" htmlFor={name}>
                {label}
            </label>
            <input
                className="px-4 py-3 rounded-md bg-gray-100 placeholder-gray-500 focus:outline-none w-full"
                type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
                id={name}
                name={name}
                placeholder={placeholder}
            />
            {type === 'password' && (
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 pt-1 md:pr-5 md:pt-5 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                >
                    <img
                        src={isPasswordVisible ? EyeOffIcon : EyeIcon}
                        alt={isPasswordVisible ? 'Hide password' : 'Show password'}
                        className="h-5 w-5 text-gray-500"
                    />
                </button>
            )}
        </div>
    );
}
