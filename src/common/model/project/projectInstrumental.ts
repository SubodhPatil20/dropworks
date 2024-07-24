export enum ProjectInstrumental {
  Yes = 1,
  No = 0,
}

export const projectInstrumentalDictionary: Record<ProjectInstrumental, string> = {
    [ProjectInstrumental.Yes]: 'Yes',
    [ProjectInstrumental.No]: 'No',
};
