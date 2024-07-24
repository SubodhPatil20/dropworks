/* eslint-disable */
import i18next from 'i18next';
import englishdict from './english';
import spanishdict from './spanish';
//const english = require('./english');
//const chinese = require('./chinese');
//const spanish = require('./spanish');

i18next.init({
  lng: localStorage.getItem('lng') || 'en',
  debug: true,
  resources: {
    'en': { translation: englishdict },
    'es': { translation: spanishdict },
  },
});

// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';
