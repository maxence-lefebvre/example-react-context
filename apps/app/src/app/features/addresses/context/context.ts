import React from 'react';
import { Address, AddressApi } from '../types';

export const CustomerAddresses = React.createContext<[Address[], AddressApi]>([
  [],
  {} as AddressApi,
]);
