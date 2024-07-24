export enum ProjectStatus {
  EmptyProject = 1,
  UnderProduction = 2,
  Dropped = 3,
  Archived = 4,
  Released = 5,
}

export const projectStatusDictionary: Record<ProjectStatus, string> = {
  [ProjectStatus.EmptyProject]: 'Empty project',
  [ProjectStatus.UnderProduction]: 'Under production',
  [ProjectStatus.Dropped]: 'Dropped',
  [ProjectStatus.Archived]: 'Archived',
  [ProjectStatus.Released]: 'Released',
};
