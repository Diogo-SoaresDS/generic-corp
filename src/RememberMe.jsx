export default function RememberMe() {
    return (
        <div className="flex justify-between text-sm font-semibold items-center mt-4">
            <div className="flex items-center space-x-2">
                <label className="relative cursor-pointer w-14 h-7 rounded-full bg-gray-100 shadow-inner" htmlFor="toggle">
                    <input className="sr-only peer" type="checkbox" name="toggle" id="toggle" />
                    <span className="block w-5 h-5 bg-slate-50 absolute top-1 left-1 rounded-full peer-checked:bg-blue-500 peer-checked:translate-x-7 transition-transform duration-300 ease-in-out shadow-md"></span>
                </label>
                <p>Remember Me</p>
            </div>
            <p>
                <a href="#" className="text-blue-500">Forgot password?</a>
            </p>
        </div>
    )
}