import logo from '../../assets/logo.svg';
import { Container, Content } from './styles'

interface HeaderProps {
  setIsVisible: (isVisible: boolean) => void;
}

export function Header({ setIsVisible }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money"/>
        <button type="button" onClick={()=> setIsVisible(true)}>
          Nova transação
        </button>
      </Content>
      
    </Container>
  )
}