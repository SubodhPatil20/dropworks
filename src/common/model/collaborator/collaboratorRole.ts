import {ProjectAssetType} from '../project/projectAssetType';

export enum CollaboratorRole {
  Composer = 1 << 0,
  Vocalist = 1 << 1,
  Lyricist = 1 << 2,
  Producer = 1 << 14
}

export const collaboratorRoleAuth0RoleDictionary: Record<CollaboratorRole, string> = {
  [CollaboratorRole.Composer]: 'Composer',
  [CollaboratorRole.Vocalist]: 'Vocalist',
  [CollaboratorRole.Lyricist]: 'Lyricist',
  [CollaboratorRole.Producer]: 'Producer'
}

export enum CollaboratorPseudoRole {
  Investors = 1 << 15,
  DropWorks = 1 << 16,
}

export const collaboratorPseudoRoleAuth0RoleDictionary: Record<CollaboratorPseudoRole, string> = {
  [CollaboratorPseudoRole.Investors]: 'Investors',
  [CollaboratorPseudoRole.DropWorks]: 'Dropworks',
}


export const roleToProjectAssetTypeDictionary: Record<CollaboratorRole, ProjectAssetType[]> = {
  [CollaboratorRole.Producer]: [ProjectAssetType.result],
  [CollaboratorRole.Vocalist]: [ProjectAssetType.voice],
  [CollaboratorRole.Lyricist]: [ProjectAssetType.text],
  [CollaboratorRole.Composer]: [ProjectAssetType.melody]
}
