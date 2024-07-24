import { LegalAgreementSign } from '../model/user/legalAgreementSign';

export const getLegalAgreementSignText = (sign: LegalAgreementSign): string => {
  const res: LegalAgreementSign = {
    agreementId: sign.agreementId,
    role: sign.role,
    isExclusive: sign.isExclusive,
    share: sign.share,
  }
  if (sign.assetId) {
    res.assetId = sign.assetId
  }
  if (sign.userId) {
    res.userId = sign.userId
  }
  if (sign.projectId) {
    res.projectId = sign.projectId
  }
  if (sign.userEmail) {
    res.userEmail = sign.userEmail
  }
  return JSON.stringify(res);
}
