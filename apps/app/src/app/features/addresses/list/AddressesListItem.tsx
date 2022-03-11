import { Address, AddressApi } from '../types';
import {memo, useCallback} from 'react';

export const AddressesListItem = memo(({
  address,
  api,
}: {
  address: Address;
  api: AddressApi;
}) => {
  const { name } = address;
  const onClickDelete = useCallback(() => api.delete(address), [address, api]);

  return (
    <div>
      {name}
      <button onClick={onClickDelete}>x</button>
    </div>
  );
});
