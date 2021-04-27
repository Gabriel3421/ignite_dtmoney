import { useEffect } from 'react';
import { api } from '../../service/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(()=> {
    api.get('transactions').then((response)=>{
      console.log('teste')
      console.log(response.data)
    })
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dev</td>
            <td className="deposit">R$1</td>
            <td>dev</td>
            <td>12/12/12</td>
          </tr>
          <tr>
            <td>dev</td>
            <td className="withdraw">R$1</td>
            <td>dev</td>
            <td>12/12/12</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
