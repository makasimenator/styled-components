import React from 'react';
import { hydrate } from 'react-dom';

import AppRNW from './AppRNW';

const render = Component => {
  hydrate(<Component />, document.querySelector('#react-root'));
};

render(AppRNW);

if (module.hot) {
  module.hot.accept('./AppRNW', () => {
    // eslint-disable-next-line global-require
    const { default: Component } = require('./AppRNW');
    render(Component);
  });
}
