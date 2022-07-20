const Sidebar = (props) => {
    const preguntes = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div className="">
            <ul className="py-4">
                {
                    preguntes.map((p) => (
                        <li className="p-4 px-12 border-b-2 border-black">Pregunta {p}</li>
                    ))
                }                
            </ul>
        </div>
    )
}

export default Sidebar;