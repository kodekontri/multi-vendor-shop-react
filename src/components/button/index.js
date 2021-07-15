import useButtonLogic from "./buttonLogic"
import style from './button.module.css'

export default function Button(props) {
    const {className = "", children, ...others} = props
    const {loading, toggleLoading} = useButtonLogic()

    return (
        <button onClick={toggleLoading} className={`${style.btn} ${className}`} {...others}>
            {loading ? "Loading..." : children}
        </button>
    )
}