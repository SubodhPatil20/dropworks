export enum AssetType {
    audio = 1,
    text = 2,
    picture = 3
}

export enum AssetTypeName {
    audio = 'audio',
    text = 'text',
    image = 'image'
}

export const AssetTypeDictionary: Record<AssetTypeName, AssetType> = {
    [AssetTypeName.audio]: AssetType.audio,
    [AssetTypeName.text]: AssetType.text ,
    [AssetTypeName.image]: AssetType.picture
}
