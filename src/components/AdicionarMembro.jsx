import React from "react";
import { Link } from "react-router-dom";

const AdicionarMembro = () => {
    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"components/AdicionarMembro"}>Membro</Link> / Adicionar Membro

            <h1> Adicionar Membro:</h1>
            <br/>
            <TurmaForm/>
        </>        
    )
}

export default AdicionarMembro