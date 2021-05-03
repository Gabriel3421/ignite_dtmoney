import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { api } from '../../service/api';
import { Container, Section, RadioBox } from './styles';

interface NewTransactionModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function NewTransactionModal ({ isVisible, setIsVisible}: NewTransactionModalProps){
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = {
      title,
      value,
      category,
      type
    }
    api.post('/transactions', data)
  }
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
        <Container onSubmit={handleSubmit}>
          <h2>Cadastrar Transação</h2>
          <input placeholder="Titulo" value={title} onChange={(e)=> setTitle(e.target.value)} />
          <input placeholder="Valor" type="number" value={value} onChange={(e)=> setValue(Number(e.target.value))} />
          <Section>
            <RadioBox
              type="button"
              onClick={()=> setType('deposit')}
              isActive={type==='deposit'}
              activeColor="green"
            >
              <img src={income} alt="Entradas"/>
              <span>Entradas</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={()=> setType('withdraw')}
              isActive={type==='withdraw'}
              activeColor="red"
            >
              <img src={outcome} alt="Saidas"/>
              <span>Saidas</span>
            </RadioBox>
          </Section>
          <input placeholder="Categoria" value={category} onChange={(e)=> setCategory(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}

