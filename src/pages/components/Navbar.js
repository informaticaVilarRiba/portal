import '../../index.css';

const Navbar = () => {
    
    const links = [
        {name: "Administració", link:"/admin"},
        {name: "Informes", link:"/informes"},
        {name: "Perfil", link:"/user"},
    ]

    return(
        <nav className="py-3 bg-red-500 text-white">
            <div>
                <h1>SF</h1>
            </div>
            <div>
                <h1>Client</h1>
            </div>
            <div>
                <ul>
                    {
                        links.map((link) => (
                            <li>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }  
                </ul>
            </div>      
        </nav>
    );
}

export default Navbar;