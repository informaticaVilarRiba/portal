import {Button} from "./components";

const Pregunta = (props) => {
    return(
        <div>
            <div>Pregunta 1.....</div>
            <div>
                <ul>
                    <li>Resposta 1</li>
                    <li>Resposta 2</li>
                    <li>Resposta 3</li>
                    <li>Resposta 4</li>
                </ul>
                <div className="flex justify-end p-3">
                    <div className="p-3">
                        <Button text="Anterior"/> {/* Set pregunta_id-=1 */}
                    </div>
                    <div className="p-3">
                        <Button text="Següent"/> {/* Set pregunta_id+=1 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pregunta;