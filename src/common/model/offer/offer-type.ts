export enum OfferType {
  Invitation = 1,
  ProjectRequest = 2
}

export const offerTypeDictionary: Record<OfferType, string> = {
  [OfferType.Invitation]: 'Invitation',
  [OfferType.ProjectRequest]: 'Request',
};
