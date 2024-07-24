import { AssetType } from '../user/assetType';

export enum ProjectAssetType {
  melody = 1,
  text = 2,
  voice = 3,
  cover = 4,
  result = 6,
}

export enum ProjectAssetTypeName {
  melody = 'melody',
  text = 'text',
  voice = 'voice',
  cover = 'cover',
  result = 'result',
}

export const projectAssetTypeDictionary: Record<ProjectAssetType, ProjectAssetTypeName> = {
  [ProjectAssetType.melody]: ProjectAssetTypeName.melody,
  [ProjectAssetType.text]: ProjectAssetTypeName.text ,
  [ProjectAssetType.voice]: ProjectAssetTypeName.voice,
  [ProjectAssetType.cover]: ProjectAssetTypeName.cover,
  [ProjectAssetType.result]: ProjectAssetTypeName.result
}

export const baseAssetTypeToProjectAssetType: Record<AssetType, ProjectAssetType> = {
  [AssetType.audio]: ProjectAssetType.melody,
  [AssetType.picture]: ProjectAssetType.cover,
  [AssetType.text]: ProjectAssetType.text
};

export const assetTypeToProjectAssetTypes: Record<AssetType, ProjectAssetType[]> = {
  [AssetType.audio]: [
    ProjectAssetType.melody,
    ProjectAssetType.voice,
    ProjectAssetType.result,
  ],
  [AssetType.picture]: [
    ProjectAssetType.cover,
  ],
  [AssetType.text]: [
    ProjectAssetType.text,
  ]
};

export const projectAssetTypeToAssetType: Record<ProjectAssetType, AssetType> = {
  [ProjectAssetType.melody]: AssetType.audio,
  [ProjectAssetType.text]: AssetType.text,
  [ProjectAssetType.voice]: AssetType.audio,
  [ProjectAssetType.cover]: AssetType.picture,
  [ProjectAssetType.result]: AssetType.audio,
};
