import Modal from 'react-modal';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { Container, Section } from './styles';

interface NewTransactionModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function NewTransactionModal ({ isVisible, setIsVisible}: NewTransactionModalProps){
  return (
    <Modal
        isOpen={isVisible}
        onRequestClose={()=>setIsVisible(false)}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={()=>setIsVisible(false)} 
          className="react-modal-close"
        >
          <img src={close} alt="Fechar modal"/>
        </button>
        <Container>
          <h2>Cadastrar Transação</h2>
          <input placeholder="Titulo" />
          <input placeholder="Valor" type="number" />
          <Section>
            <button
              type="button"
            >
              <img src={income} alt="Entradas"/>
              <span>Entradas</span>
            </button>
            <button
              type="button"
            >
              <img src={outcome} alt="Saidas"/>
              <span>Saidas</span>
            </button>
          </Section>
          <input placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}

