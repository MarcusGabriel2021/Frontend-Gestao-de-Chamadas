import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Menu.css"

function Menu() {

    const handleContact = () => {
        return navigate("/AdicionarMembro");
    }
    return (
        <div className="menu">
            <h3>Opções</h3>
            <ButtonGroup>
                <Button > Turmas</Button>
                <Button onClick={handleContact}>Adicionar Membro</Button>
                <Button>Remover Membro</Button>
                <Button>Mudar Professor</Button>
                <Button>Criar Turma</Button>
            </ButtonGroup>
        </div>
  
    );
}

export default Menu;
