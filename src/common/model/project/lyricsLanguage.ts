export enum LyricsLanguage {
  English = 1,
  Spanish = 2,
  Portuguese = 3,
  Deutsch = 4,
  Chinese = 5,
  Japanese = 6,
  Korean = 7
}

export const lyricsLanguageDictionary: Record<LyricsLanguage, string> = {
  [LyricsLanguage.English]: 'English',
  [LyricsLanguage.Spanish]: 'Spanish',
  [LyricsLanguage.Portuguese]: 'Português',
  [LyricsLanguage.Deutsch]: 'Deutsch',
  [LyricsLanguage.Chinese]: '華語',
  [LyricsLanguage.Japanese]: '日本語',
  [LyricsLanguage.Korean]: '한국어',
};
