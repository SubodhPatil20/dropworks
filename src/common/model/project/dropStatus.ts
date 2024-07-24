export enum DropStatus {
  Active = 1,
  SoldOut = 2,
  Minting = 3,
  Minted = 4,
  // @deprecated
  // FundsCollected = 5
}

export const dropStatusDictionary: Record<DropStatus, string> = {
  [DropStatus.Active]: 'Active',
  [DropStatus.SoldOut]: 'Sold Out',
  [DropStatus.Minting]: 'Minting',
  [DropStatus.Minted]: 'Minted',
  // [DropStatus.FundsCollected]: 'Funds are collected'
};
