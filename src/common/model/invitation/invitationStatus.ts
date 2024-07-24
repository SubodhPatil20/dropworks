export enum InvitationStatus {
    New = 1,
    Signed = 2,
    Replied = 3,
    Rejected = 4,
    Archived = 6,
    Expired = 7,
}

export const invitationStatusDictionary: Record<InvitationStatus, string> = {
    [InvitationStatus.New]: 'New',
    [InvitationStatus.Signed]: 'Signed',
    [InvitationStatus.Replied]: 'Replied',
    [InvitationStatus.Rejected]: 'Rejected',
    [InvitationStatus.Archived]: 'Archived',
    [InvitationStatus.Expired]: 'Expired',
};
