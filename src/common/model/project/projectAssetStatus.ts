export enum ProjectAssetStatus {
    New = 1,
    Verified = 2,
    Rejected = 3,
    Accepted = 4,
    Archived = 5
}

export const projectAssetStatusDictionary: Record<ProjectAssetStatus, string> = {
    [ProjectAssetStatus.New]: 'New',
    [ProjectAssetStatus.Verified]: 'Verified',
    [ProjectAssetStatus.Rejected]: 'Rejected',
    [ProjectAssetStatus.Accepted]: 'Accepted',
    [ProjectAssetStatus.Archived]: 'Archived',
};
