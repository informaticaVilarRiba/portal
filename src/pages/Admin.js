import {Navbar} from "./components/components";

const Admin = () => {
    return(
        <div>
            <Navbar/>
            <ul>
                <li>Empresa 1</li> {/* On click, accedeix a la pestanya d'usuaris */}
                <li>Empresa 2</li>
                <li>Empresa 3</li>
                <li>Empresa 4</li>
            </ul>
        </div>
    )
}   

export default Admin;