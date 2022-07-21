import '../../index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const links = [
        {id: 1, name: "Administració", link:"/admin"},
        {id: 2, name: "Informes", link:"/informes"},
        {id: 3, name: "Perfil", link:"/user"},
    ];

    return(
        <nav className="flex justify-around text-center py-3 bg-red-500 text-white">
            <div className=''>
                <ul>
                    <Link to="/main">
                        <li className='px-4 py-3 border-b-2 border-red-500 transition duration-500 hover:border-white'>Client</li>
                    </Link>
                </ul>
            </div>
            <div>
                <ul className='flex justify-between'>
                    {
                        links.map((link) => (
                            <li key={link.id} className='px-4 py-3 border-b-2 border-red-500 transition duration-500 hover:border-white'>
                                <Link to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }  
                </ul>
            </div>      
        </nav>
    );
}

export default Navbar;