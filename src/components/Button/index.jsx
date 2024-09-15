import { twMerge } from "tailwind-merge"

export default function Button({ children, className, ...rest }) {
    return (
        <button {...rest} 
            className={twMerge('px-8 py-[10px] rounded-md my-6', className)}>
            {children}
        </button>
    )
}