import { Address } from '../types';
import { omit } from 'lodash';

export const reducer = (
  state: Record<string, Address>,
  { type, payload }: { type: string; payload: Address }
) => {
  switch (type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        [payload.id]: payload,
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        [payload.id]: payload,
      };
    case 'DELETE_ADDRESS':
      return omit(state, payload.id);
    default:
      return state;
  }
};
