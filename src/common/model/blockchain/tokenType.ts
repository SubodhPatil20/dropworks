import { TokenDefinitionType } from '../project/tokenDefinition';

export enum TokenType {
    DropStocks = 1,
}

export const tokenTypeDictionary: Record<TokenType, string> = {
    [TokenType.DropStocks]: 'DropStocks',
  };

export const tokenTypeToTokenDefinitionType: Record<TokenType, TokenDefinitionType> = {
    [TokenType.DropStocks]: TokenDefinitionType.DropStocks,
};

export const tokenDefinitionTypeToTokenType: Record<TokenDefinitionType, TokenType> = {
    [TokenDefinitionType.DropStocks]: TokenType.DropStocks,
};
