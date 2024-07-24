import {
  TokenDefinition,
  TokenDefinitionType,
} from "../model/project/tokenDefinition";

export const calculateTokenPrice = (
  target: bigint,
  tokenDefinition: TokenDefinition,
  publicShare: number,
): Record<TokenDefinitionType, bigint> => {
  const dCount = tokenDefinition[TokenDefinitionType.DropStocks] ?? 0;
  const k = BigInt(dCount * publicShare) / BigInt(100);
  const dropStocks = target / k;
  return {
    [TokenDefinitionType.DropStocks]: dropStocks
  };
};
