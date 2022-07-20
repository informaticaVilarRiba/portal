import {Button, Resposta} from "./components";
import { useState } from "react";

const Pregunta = (props) => {
    const [preg, setPreg] = useState(1);
    const respostes = ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"];
    return(
        <div>
            <div className="px-32 py-5 text-3xl">Pregunta {preg}</div>
            <div>
                <ul>
                    {
                        respostes.map((r) => (
                            <Resposta resposta={r}/>
                        ))
                    }
                </ul>
                <div className="flex justify-end p-3">
                    <div className="p-3">
                        <Button text="Anterior" onClick={() => setPreg(preg-1)}/> {/* Set pregunta_id-=1 */}
                    </div>
                    <div className="p-3">
                        <Button text="Següent" onClick={() => setPreg(preg+1)}/> {/* Set pregunta_id+=1 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pregunta;