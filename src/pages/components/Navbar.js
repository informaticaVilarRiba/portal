import '../../index.css';

const Navbar = () => {
    
    const links = [
        {name: "Administració", link:"/admin"},
        {name: "Informes", link:"/informes"},
        {name: "Perfil", link:"/user"},
    ]

    return(
        <nav className="w-full flex justify-between text-center py-6 bg-red-500 text-white">
            <div className='text-center px-20'>
                <h1>SF</h1>
            </div>
            <div className='text-center'>
                <h1 className=''>Client</h1>
            </div>
            <div>
                <ul className='flex justify-between'>
                    {
                        links.map((link) => (
                            <li className='px-8'>
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