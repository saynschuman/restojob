import { i18next } from '../src/localization/i18n';
i18next;
import * as moment from 'moment';
moment.locale('ru');
// require('react-photoswipe/lib/photoswipe.css');
require('../src/styles/initial.styl');

import { configure as configureViewport } from '@storybook/addon-viewport';
import { configure } from '@storybook/react';

configureViewport({
	defaultViewport: 'iphone6'
});

const req = require.context('../src', true, /.story.tsx$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
