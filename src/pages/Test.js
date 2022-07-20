import "../index.css";

import { Navbar, Sidebar, Pregunta } from "./components/components";

const Test = () => {

    // const preguntes = [
    //     {
    //         id:1,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:2,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:3,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:4,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:5,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:6,
    //         pregunta:"",
    //         r1:"",
    //         r2:"",
    //         r3:"",
    //         r4:""
    //     },
    //     {
    //         id:7,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:8,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:9,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    //     {
    //         id:10,
    //         pregunta:"",
    //         r1: "",
    //         r2: "",
    //         r3: "",
    //         r4: ""
    //     },
    // ]

    return(
        <div>
            <Navbar/>
            <div className="flex justify-start">
                <Sidebar/>
                <Pregunta />
            </div>
            {/* {preguntes} */}
        </div>
    )
}

export default Test;