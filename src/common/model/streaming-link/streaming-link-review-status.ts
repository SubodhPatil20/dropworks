export enum StreamingLinkReviewStatus {
  toReview = 1,
  approved = 2,
  rejected = 3,
}

export const streamingLinkReviewStatusDictionary: Record<StreamingLinkReviewStatus, string> = {
  [StreamingLinkReviewStatus.toReview]: 'To review',
  [StreamingLinkReviewStatus.approved]: 'Approved',
  [StreamingLinkReviewStatus.rejected]: 'Rejected',
}
