import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`../languages/${namespace}/${language}.json`)
  ))
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'homepage'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;