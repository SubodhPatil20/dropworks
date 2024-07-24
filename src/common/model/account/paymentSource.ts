export enum PaymentSource {
    ditto = 1,
    openSea = 2,
}

export const paymentSourceDictionary: Record<PaymentSource, string> = {
    [PaymentSource.ditto]: 'Ditto',
    [PaymentSource.openSea]: 'OpenSea',
};
