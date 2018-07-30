import i18next from 'i18next';
const translations = require('./translations.json');

(window as any).__t = () => '';

i18next
    .init({
        resources: {
            ru: {
                translations,
            },
        },

        lng: 'ru',
        fallbackLng: 'ru',
        lngWhitelist: ['ru'],

        debug: false,

        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: '.',

        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },

        react: {
            wait: true,
        },
    }, () => {
        (window as any).__t = (...args) => i18next.t(...args);
    },
);

export { i18next };
