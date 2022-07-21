const Resposta = (props) => {
    return(
        <li className="px-64 p-4 flex justify-between">  
            <div className="p-4">
                <button className="p-3 bg-red-500 hover:bg-black"></button>
            </div>  
            <div className="p-4">
                <h1>{props.resposta}</h1>
            </div>
        </li>
    )
}

export default Resposta;