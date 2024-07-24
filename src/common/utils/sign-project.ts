export const getProjectSignString = (
  projectId: string,
  projectOwnerId: string,
  signDate: Date,
): string => {
  return [
    projectId,
    projectOwnerId,
    signDate.toLocaleDateString('en'),
  ].join('_');
};
