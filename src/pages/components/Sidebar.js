const Sidebar = (props) => {
    const preguntes = [1,2,3,4,5,6,7,8,9,10]; // Select a la bd
    return(
        <div className="">
            <ul className="py-4">
                {
                    preguntes.map((p) => (
                        <li className="p-4 px-12 border-b-2 border-black hover:border-red-500">Pregunta {p}</li>
                    ))
                }                
            </ul>
        </div>
    )
}

export default Sidebar;