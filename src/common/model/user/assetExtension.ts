import { AssetType } from "./assetType";

export enum AssetExtension {
  MP3 = "mp3",
  WAV = "wav",
  OGG = "ogg",
  MID = "mid",
  JPG = "jpg",
  PNG = "png",
  TXT = "txt",
  PDF = "pdf",
  DOCX = "docx",
}

export const assetTypeAssetExtensions: Record<AssetType, AssetExtension[]> = {
  [AssetType.audio]: [
    AssetExtension.MP3,
    AssetExtension.WAV,
    AssetExtension.OGG,
    AssetExtension.MID,
  ],
  [AssetType.picture]: [AssetExtension.JPG, AssetExtension.PNG],
  [AssetType.text]: [AssetExtension.PDF, AssetExtension.DOCX, AssetExtension.TXT],
};

export const assetExtensionToType: Record<AssetExtension, AssetType> = {
  [AssetExtension.MP3]: AssetType.audio,
  [AssetExtension.WAV]: AssetType.audio,
  [AssetExtension.OGG]: AssetType.audio,
  [AssetExtension.MID]: AssetType.audio,
  [AssetExtension.JPG]: AssetType.picture,
  [AssetExtension.PNG]: AssetType.picture,
  [AssetExtension.TXT]: AssetType.text,
  [AssetExtension.PDF]: AssetType.text,
  [AssetExtension.DOCX]: AssetType.text,
};

export const assetExtensionType: Record<string, AssetExtension> = {
  'audio/mpeg': AssetExtension.MP3,
  'audio/wav': AssetExtension.WAV,
  'audio/ogg': AssetExtension.OGG,
  'video/ogg': AssetExtension.OGG,
  'audio/mid': AssetExtension.MID,
  'audio/midi': AssetExtension.MID,
  'image/jpg': AssetExtension.JPG,
  'image/jpeg': AssetExtension.JPG,
  'image/png': AssetExtension.PNG,
  'text/plain': AssetExtension.TXT,
  'application/pdf': AssetExtension.PDF,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': AssetExtension.DOCX,
};

export const assetContentType: Record<string, string> = {
  'mp3': 'audio/mpeg',
  'wav': 'audio/wav',
  'ogg': 'audio/ogg',
  'mid': 'audio/mid',
  'jpg': 'image/jpg',
  'jpeg': 'image/jpeg',
  'png': 'image/png',
  'txt': 'text/plain',
  'pdf': 'application/pdf',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
