import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import AppRNW from './AppRNW';

const sheet = new ServerStyleSheet();

export const html = renderToString(sheet.collectStyles(<AppRNW />));
export const css = sheet.getStyleTags();
