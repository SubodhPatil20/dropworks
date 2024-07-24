export enum UserRole {
    None = 0,
    Composer = 1 << 0,
    Vocalist = 1 << 1,
    Lyricist = 1 << 2,
    VideoComposer = 1 << 3,
    Investor = 1 << 4,
    Producer = 1 << 5,
}

export const artisticRoles = [
    UserRole.Composer,
    UserRole.Lyricist,
    UserRole.Vocalist,
    UserRole.VideoComposer
];

export const UserRoleAuth0RoleDictionary: Record<UserRole, string> = {
    [UserRole.None]: 'None',
    [UserRole.Composer]: 'Composer',
    [UserRole.Vocalist]: 'Vocalist',
    [UserRole.Lyricist]: 'Lyricist',
    [UserRole.VideoComposer]: 'VideoComposer',
    [UserRole.Investor]: 'Investor',
    [UserRole.Producer]: 'Producer',
};

export const ParticipantRoles = [
    UserRole.Composer,
    UserRole.Vocalist,
    UserRole.Lyricist,
    UserRole.VideoComposer,
    UserRole.Producer
];
