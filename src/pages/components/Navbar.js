import '../../index.css';

const Navbar = () => {
    
    const links = [
        {name: "Administració", link:"/admin"},
        {name: "Informes", link:"/informes"},
        {name: "Perfil", link:"/user"},
    ]

    return(
        <nav className="flex justify-around text-center py-3 bg-red-500 text-white">
            <div className=''>
                <h1 className='w-full py-3'>Client</h1>
            </div>
            <div>
                <ul className='flex justify-between'>
                    {
                        links.map((link) => (
                            <li className='px-4 py-3 border-b-2 border-red-500 transition duration-500 hover:border-white'>
                                <a className="" href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }  
                </ul>
            </div>      
        </nav>
    );
}

export default Navbar;