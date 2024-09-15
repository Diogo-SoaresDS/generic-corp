export default function RememberMe() {
    return (
        <div>
            <label htmlFor="toggle">
                <input type="checkbox" name="toggle" id="toggle" />
                <span>Remember me</span>
            </label>
            <p>
                <a href="#">Forgot password?</a>
            </p>
        </div>
    )
}