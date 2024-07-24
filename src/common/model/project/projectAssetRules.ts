import { CollaboratorRole } from '../collaborator/collaboratorRole';
import { ProjectAssetType } from './projectAssetType';

export const collaboratorRoleToProjectAssetTypes: Record<CollaboratorRole, ProjectAssetType[]> = {
    [CollaboratorRole.Producer]: [
        ProjectAssetType.melody,
        ProjectAssetType.text,
        ProjectAssetType.voice,
        ProjectAssetType.cover,
        ProjectAssetType.result,
    ],
    [CollaboratorRole.Composer]: [
        ProjectAssetType.melody,
    ],
    [CollaboratorRole.Lyricist]: [
        ProjectAssetType.text,
    ],
    [CollaboratorRole.Vocalist]: [
        ProjectAssetType.voice,
    ],
};

export const instrumentalProjectAssetTypes: ProjectAssetType[] = [
    ProjectAssetType.melody,
    ProjectAssetType.cover,
    ProjectAssetType.result,
];
