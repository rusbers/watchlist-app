const formatLanguageName = (languageInIso, languageToTranslate = 'en') => {
  const languageNames = new Intl.DisplayNames([languageToTranslate], { type: 'language' });

  return languageNames.of(languageInIso);
};

export default formatLanguageName;
