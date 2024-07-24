export enum SystemRoleString {
    platformUser = 'platformUser',
    admin = 'admin',
    account = 'account',
}

export enum SystemRole {
    platformUser = 0,
    admin = 1 << 1,
    account = 1 << 2
}

export const SystemRoleNames: Record<SystemRole, string> = {
    [SystemRole.platformUser]: 'platformUser',
    [SystemRole.admin]: 'admin',
    [SystemRole.account]: 'account',
};
