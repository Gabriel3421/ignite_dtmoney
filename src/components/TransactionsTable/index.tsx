import { Container } from './styles';

export function TransactionsTable() {
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
