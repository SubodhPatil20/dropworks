export enum ArtistAliasType {
    PrimaryArtist = 1,
    FeaturedArtist = 2,
    Hidden = 3,
}

export const artistAliasTypeDictionary: Record<ArtistAliasType, string> = {
    [ArtistAliasType.PrimaryArtist]: 'PrimaryArtist',
    [ArtistAliasType.FeaturedArtist]: 'FeaturedArtist',
    [ArtistAliasType.Hidden]: 'Hidden',
};
