import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import TurmaAPI from "../api/TurmaAPI.js";
import "./Turmas.css"

function Turmas() {

    const [turmas, setTurmas] = useState([]);
    const turmaAPI = new TurmaAPI();

    function obterTurmas() {
        try {
            turmaAPI.getTurmas(setTurmas);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obterTurmas();
    }, []);

    return (
        <>
            <h1>Turmas</h1>
            {turmas.map((turma) => (
                <Container className={"turmas"} key={turma.id}>
                    <Container className={"turma"} r>
                        <h3>{turma.nome}</h3>
                        <Button>Registrar Presenças</Button>
                    </Container>
                    <br/>
                </Container>
            ))}
        </>
    );
}

export default Turmas;