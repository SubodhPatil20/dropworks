export enum RoyaltyDistributionOrderStatus {
    New = 1,
    Processing = 2,
    Done = 3,
}

export const royaltyDistributionOrderStatusDictionary: Record<RoyaltyDistributionOrderStatus, string> = {
    [RoyaltyDistributionOrderStatus.New]: 'New',
    [RoyaltyDistributionOrderStatus.Processing]: 'Processing',
    [RoyaltyDistributionOrderStatus.Done]: 'Done',
};
