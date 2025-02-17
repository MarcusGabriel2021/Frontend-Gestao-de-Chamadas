import {Col, Container, Form, ModalBody, ModalFooter, ModalHeader, ModalTitle, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import TurmaAPI from "../api/TurmaAPI.js";
import "./Turmas.css"
import RemoverMembro from "./RemoverMembro.jsx";
import MembroAPI from "../api/MembroAPI.js"

function Turmas() {

    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState(false);
    const [turmas, setTurmas] = useState([]);
    const turmaAPI = new TurmaAPI();

    function handleExluir(){
        setShow(false);
        MembroAPI.RemoverMembro(idDelete);
        console.log(`Exluido o membro id: ${idDelete}`);
    }

    function handleShow(id){
        setIdDelete(id);
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    useEffect(() => {
        obterTurmas();
    }, []);


    function obterTurmas() {
        try {
            turmaAPI.getTurmas(setTurmas);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <h1>Turmas</h1>  
            <p>UPA   <Button>Registrar Presenças</Button></p>
            <p>Templo   <Button>Registrar Presenças</Button></p>
            {turmas.map((turma) => (
                <Container className={"turmas"} key={turma.id}>
                    <Container className={"turma"} r>
                        <h3>{turma.nome}</h3>
                        <Button>Registrar Presenças</Button>
                    </Container>
                    <br/>
                    <Table striped border hover>
                    <thread>
                        <tr>
                            <th>Id.</th>
                            <th>Aluno</th>
                            <th>Professor</th>
                        </tr>
                    </thread>
                    <body>
                        {
                            getTurmas.map((turma) => (
                                <tr key={turma.id}>
                                    <td>{turma.id}</td>
                                    <td>{turma.aluno}</td>
                                    <td>{turma.professor}</td>
                                    <td>
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="ms-auto">
                                               <Button variant="danger" size="sm" onClick={(e) =>handleShow(turma.id)}>
                                                    <BsFillPencilfILL/>
                                               </Button>
                                            </div>
                                            <div className="">
                                                <Link to={`components/AdicionarMembro/${turma.id}`}>
                                                    <Button size="sm"><BsFillPencilfILL/></Button>
                                                </Link>
                                            </div>
                                        </Stack>
                                    </td>
                                </tr>
                            ))
                        }
                    </body>
                </Table>    

                <Modal show={show} onHide={handleExluir}>
                    <ModalHeader closeButton>
                        <ModalTitle>Confirmação</ModalTitle>
                    </ModalHeader>
                    <ModalBody>Confirma exclusão do membro {idDelete}?</ModalBody>
                    <ModalFooter>
                        <Button variant="secundary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="danger" onClick={handleExluir}>
                            Excluir
                        </Button>
                    </ModalFooter>
                </Modal>
            </Container>
                
            ))}
        </>
    );
}

export default Turmas;