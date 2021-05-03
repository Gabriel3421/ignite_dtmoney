import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <TransactionsProvider>
      <Header  setIsVisible={setIsVisible} />
      <Dashboard />
      <NewTransactionModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
