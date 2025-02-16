import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Menu.css"

function Menu() {
    return (
        <div className="menu">
            <h3>Opções</h3>
            <ButtonGroup>
                <Button>Turmas</Button>
                <Button>Adicionar Membro</Button>
                <Button>Remover Membro</Button>
                <Button>Mudar Professor</Button>
                <Button>Criar Turma</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
