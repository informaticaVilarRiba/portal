import "../index.css";
import logo from '../images/logo.png';

import React /*, {useState} */ from "react";
import { Link } from "react-router-dom";

import {Input, Button} from "./components/components";

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
        console.log("Hola");
    }

    const set_values = (e) => {
        console.log(e.target.value);
    }

    return(
        <div className="flex h-screen bg-red-500">
            <div className="m-auto">
                <div className="p-2 py-20">   
                    <img src={logo} alt="Logo" width="500"/>
                </div>
                <div className="bg-white rounded p-8">
                    <div>
                        <h1 className="text-center text-3xl p-2">Portal RGPD</h1>
                    </div>
                    <form className="text-center p-4">
                        <div className="p-4">
                            {inputs.map((items) => 
                                <Input key={items.id} type={items.type} label={items.label} required={items.required} placeholder={items.placeholder} onChange={set_values}/>
                            )}
                        </div>
                        <Link to={"/main"}>
                            <Button text="Entra" onClick={login_handler}/>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;