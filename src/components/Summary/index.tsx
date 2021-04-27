import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas"/>
        </header>
        <strong>R$ 1</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas"/>
        </header>
        <strong>R$ 1</strong>
      </div>
      <div className="green">
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$ 1</strong>
      </div>
    </Container>
  );
}
