
import { CollaboratorRole } from './model/collaborator/collaboratorRole';
import { UserRole } from './model/user/userRole';

export const userToCollaboratorRoles = (role: UserRole) =>{
  switch (role) {
    case UserRole.Composer:
        return CollaboratorRole.Composer;
    case UserRole.Vocalist:
        return CollaboratorRole.Vocalist;
    case UserRole.Lyricist:
        return CollaboratorRole.Lyricist;
    case UserRole.Producer:
        return CollaboratorRole.Producer;
    default:
        return undefined;
  }
};

export const collaboratorToUserRoles = (role: CollaboratorRole) =>{
  switch (role) {
    case CollaboratorRole.Composer:
        return UserRole.Composer;
    case CollaboratorRole.Vocalist:
        return UserRole.Vocalist;
    case CollaboratorRole.Lyricist:
        return UserRole.Lyricist;
    case CollaboratorRole.Producer:
        return UserRole.Producer;
    default:
        return undefined;
  }
};
