const Button = (props) => {
    return(
        <button className="bg-black text-white py-2 px-6 border-2 border-black transition transform duration-500 hover:bg-white hover:text-black" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;