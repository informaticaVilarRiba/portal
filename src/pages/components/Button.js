const Button = (props) => {
    return(
        <div className="p-4">
            <button className="bg-black text-white py-2 px-6 border-2 border-black transition transform duration-500 hover:bg-white hover:text-black">
                {props.text}
            </button>
        </div>
    )
}

export default Button;