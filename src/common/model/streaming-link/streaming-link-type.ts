export enum StreamingLinkType {
  spotify = 'spotify',
  iTunes = 'iTunes',
  soundCloud = 'soundCloud',
}

export const streamingLinkTypeDictionary: Record<StreamingLinkType, string> = {
  [StreamingLinkType.spotify]: 'Spotify',
  [StreamingLinkType.iTunes]: 'iTunes',
  [StreamingLinkType.soundCloud]: 'SoundCloud',
};
