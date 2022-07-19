import "../index.css";
import logo from '../images/logo.png';

import Input from "./components/Input";
import Button from "./components/Button";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    // const [credentials, setCredentials] = useState([
    //     {
    //         username: "",
    //         password: ""
    //     }
    // ]);

    const inputs = [
        {
            id: 1,
            label: "Usuari",
            type: "text",
            required: true,
            placeholder: "hello@example.com"
        },
        {
            id: 2,
            label: "Password",
            type: "password",
            required: true,
            placeholder: "···············"
        },
    ];

    const login_handler = () => {
        // Insert
    }

    const set_values = () => {
        // On change
    }

    return(
        <div className="flex h-screen bg-red-500">
            <div className="m-auto">
                <div className="p-2 py-4">   
                    <img src={logo} alt="Logo" width="500"/>
                </div>
                <div className="bg-white rounded">
                    <div>
                        <h1 className="text-center text-3xl p-8">Portal RGPD</h1>
                    </div>
                    <div className="text-center p-8">
                        {inputs.map((items) => 
                            <Input key={items.id} type={items.type} label={items.label} required={items.required} placeholder={items.placeholder} onChange={set_values()}/>
                        )}
                        <Link to={"/main"} >
                            <Button text="Entra" onClick={login_handler}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;