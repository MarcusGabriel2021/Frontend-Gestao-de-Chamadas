import Menu from "./Menu.jsx";
import {Col, Row} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Turmas from "./Turmas.jsx";
import "./App.css"

function App() {
    return (
        <>
            <BrowserRouter>
                <Row>
                    <Col>
                        <Menu/>
                    </Col>
                    <Col className={"conteudo-principal"}>
                        <Routes>
                            <Route exact path="/" element={<Turmas/>}/>
                        </Routes>
                    </Col>
                </Row>
            </BrowserRouter>
        </>
    )
}

export default App
