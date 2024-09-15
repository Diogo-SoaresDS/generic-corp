export default function FormGroup({ label, type, name, placeholder }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} />
        </div>
    )
}