import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
// the translations

const resources = {
  en: {
    translation: {
      Welcome: 'Hello World!',
    },
  },
  ar: {
    translation: {
      Welcome: 'اهلا بالعالم!',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',
  fallbackLng: 'ar',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
