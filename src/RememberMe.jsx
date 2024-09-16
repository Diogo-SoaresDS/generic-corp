import { useState } from "react"
import { twMerge } from "tailwind-merge"

export default function RememberMe() {
    const [isChecked, setIsChecked] = useState(false)

    const toggleCheckbox = () => {
        setIsChecked(prev => !prev)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleCheckbox()
        }
    }

    return (
        <div className="flex justify-between text-sm font-medium items-center mt-4">
            <div className="flex items-center space-x-2">
                <label className="relative cursor-pointer w-14 h-7 rounded-full bg-gray-100 shadow-inner" htmlFor="toggle" tabIndex={0} onKeyDown={handleKeyDown}>
                    <input 
                        className="sr-only peer" type="checkbox" name="toggle" id="toggle"
                        aria-label="Switch to remember me"
                        aria-labelledby="switch-label"
                        tabIndex={-1}
                    />
                    <span className={twMerge("block w-5 h-5 bg-slate-50 absolute top-1 left-1 rounded-full peer-checked:bg-blue-500 peer-checked:translate-x-7 transition-transform duration-300 ease-in-out shadow-md", isChecked ? 'bg-blue-500 translate-x-7' : '')} role="switch" aria-checked={isChecked}></span>
                </label>
                <p id="switch-label">Remember Me</p>
            </div>
            <p>
                <a href="#" className="text-blue-700">Forgot password?</a>
            </p>
        </div>
    )
}