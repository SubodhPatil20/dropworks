export interface LegalAgreementSign {
  agreementId: number;
  role: number;
  isExclusive: boolean;
  assetId?: string;
  share: number;
  userId?: string;
  projectId?: string;
  userEmail?: string;
}
