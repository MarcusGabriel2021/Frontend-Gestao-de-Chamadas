import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MembroAPI from "../api/MembroAPI";
import MembroAPI from "../api/MembroAPI";
import { Button, Container, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import AdicionarMembro from "./AdicionarMembro";






function TurmaForm({id}){

    const [nome,setNome] = useState("");
    const [sexo,setSexo] = useState("");
    const [data,setData] = useState("");
    const [telefone,setTelefone] = useState("");
    const [tipo,setTipo] = useState("");
    const navigate = useNavigate();

    function setMembro(membro){
        setNome(membro.nome);
        setNome(membro.sexo);
        setNome(membro.data);
        setNome(membro.telefone);
        setNome(membro.tipo);
    }

    useEffect(() => {
        if(id){
            console.log("Consultar membro por id");
            const MembroAPI = new MembroAPI();
            MembroAPI.getMembro(setMembro, id);
        }
    }, [id]);

    function cadastrarMembro(e){
        e.preventDefault();
        var membro = {id, nome, sexo, data, telefone, tipo};
        console.log(JSON.stringify(membro));
        console.log("cadastreMembro exec..");


        const MembroAPI = new MembroAPI();
        if(id){
            MembroAPI.alterarMembro(membro);
        }else{
            MembroAPI.cadastrarMembro(membro);
        }

        navigate(`/components/Turmas`);
    }

    return(
        <Container>
            <Form onSubmit={AdicionarMembro}>
                <Row>
                    <Col sm="6">
                    {id && (
                        <Form.Group as={Row} className="mb-3" controlId="id">
                            <FormLabel column sm="2">
                                Id.
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={id} />
                            </Col>
                        </Form.Group>
                    )}

                        <FormGroup as={Row} className="mb-3" controlId="nome">
                            <FormLabel column sm="2">
                                Nome
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nome" defaultValue={nome} onChange={(e) => setNome(e.target.value)} />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-3" controlId="sexo">
                            <FormLabel column sm="2">
                                Sexo
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Sexo" defaultValue={nome} onChange={(e) => setSexo(e.target.value)} />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-3" controlId="data">
                            <FormLabel column sm="2">
                                Data
                            </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Data" defaultValue={nome} onChange={(e) => setData(e.target.value)} />
                            </Col>
                    </FormGroup>

                    <FormGroup as={Row} className="mb-3" controlId="telefone">
                        <FormLabel column sm="2">
                                Telefone
                        </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Telefone" defaultValue={nome} onChange={(e) => setNosetTelefoneme(e.target.value)} />
                            </Col>
                    </FormGroup>

                    <FormGroup as={Row} className="mb-3" controlId="tipo">
                        <FormLabel column sm="2">
                                Tipo
                        </FormLabel>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Tipo" defaultValue={nome} onChange={(e) => setTipo(e.target.value)} />
                            </Col>
                    </FormGroup>                 

                        
                    <br/>

                    <Row className="justify-content-md-center">
                        <Col xl={12}>
                        <Stack direction="horizontal" gap={3}>
                            <div className="p-2">
                                <Link to="/components/Turmas">
                                    <Button variant="danger">
                                        Cancelar
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-2 ms-auto">
                                <Button variant="primary" type="submit">
                                    Confirmar
                                </Button>
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Form>
</Container>
    )
}