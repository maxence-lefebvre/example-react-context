export type Address = {
  id: string;
  name: string;
};

export type AddressApi = {
  add: (address: Address) => unknown;
  update: (address: Address) => unknown;
  delete: (address: Address) => unknown;
};
