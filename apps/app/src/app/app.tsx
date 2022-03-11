import { CustomerAdressesProvider } from './features/addresses/context/CustomerAdressesProvider';
import { AddressesList } from './features/addresses/list/AddressesList';

export function App() {
  return (
    <CustomerAdressesProvider>
      <AddressesList />
    </CustomerAdressesProvider>
  );
}

export default App;
