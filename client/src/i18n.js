import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './lang/en/translation.json';
import translationRU from './lang/ru/translation.json';

const resources = {
	en: {
		translation: translationEN,
	},
	ru: {
		translation: translationRU,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
