export enum ProjectRequestStatus {
  New = 1,
  Accepted = 2,
  Rejected = 3,
  Expired = 4
}

export const projectRequestStatusDictionary: Record<ProjectRequestStatus, string> = {
  [ProjectRequestStatus.New]: 'new',
  [ProjectRequestStatus.Accepted]: 'accepted',
  [ProjectRequestStatus.Rejected]: 'rejected',
  [ProjectRequestStatus.Expired]: 'expired',
};
