export enum OperationType {
  tokenSell = 1,
  withdraw = 2,
  tokenResell = 3,
  funding = 4,
  royalty = 5,
  tokenSellChange = 6,
  minting = 7,
  internalTransfer = 8,
  deposit = 9,
  allotToken = 10,
  systemRefill = 11,
  smartContractDeploy = 12
}

export const operationTypeDictionary: Record<OperationType, string> = {
  [OperationType.tokenSell]: 'Token Sell',
  [OperationType.withdraw]: 'Withdraw',
  [OperationType.tokenResell]: 'Token Resell',
  [OperationType.funding]: 'Funding',
  [OperationType.royalty]: 'Royalty',
  [OperationType.tokenSellChange]: 'Token Sell Change',
  [OperationType.minting]: 'Minting',
  [OperationType.internalTransfer]: 'Internal transfer',
  [OperationType.deposit]: 'Deposit',
  [OperationType.allotToken]: 'Allot token',
  [OperationType.systemRefill]: 'System refill',
  [OperationType.smartContractDeploy]: 'Smart contract deploy',
};
