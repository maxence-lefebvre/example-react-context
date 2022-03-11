import { useCustomerAddresses } from '../context/hook';
import { AddressesListItem } from './AddressesListItem';
import {memo, useCallback} from 'react';
import { v4 as uuid } from 'uuid';

export const AddressesList = memo(() => {
  const [addresses, api] = useCustomerAddresses();

  const onClickAdd = useCallback(() => {
    const id = uuid();
    return api.add({ id, name: id });
  }, [api]);

  return (
    <>
      {addresses.map((address) => (
        <AddressesListItem key={address.id} address={address} api={api} />
      ))}

      <button onClick={onClickAdd}>Add</button>
    </>
  );
});
