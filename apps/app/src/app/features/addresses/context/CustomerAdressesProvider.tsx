import React, { ReactNode, ReactNodeArray } from 'react';

import { CustomerAddresses } from './context';
import { Address, AddressApi } from '../types';
import { reducer } from './reducer';

export const CustomerAdressesProvider = ({
  children,
}: {
  children?: ReactNode | ReactNodeArray;
}) => {
  const [addressesRecord, dispatch] = React.useReducer(reducer, {});

  const api: AddressApi = React.useMemo(
    () => ({
      add: (payload: Address) => dispatch({ type: 'ADD_ADDRESS', payload }),
      update: (payload: Address) =>
        dispatch({ type: 'UPDATE_ADDRESS', payload }),
      delete: (payload: Address) =>
        dispatch({ type: 'DELETE_ADDRESS', payload }),
    }),
    [dispatch]
  );

  const addresses = React.useMemo(
    () => Object.values(addressesRecord),
    [addressesRecord]
  );

  return (
    <CustomerAddresses.Provider value={[addresses, api]}>
      {children}
    </CustomerAddresses.Provider>
  );
};
