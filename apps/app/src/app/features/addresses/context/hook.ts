import React from 'react';
import { CustomerAddresses } from './context';

export const useCustomerAddresses = () => React.useContext(CustomerAddresses);
