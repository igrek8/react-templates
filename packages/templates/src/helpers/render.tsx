import React from 'react';
import { IntlProvider } from 'react-intl';
import { i18n } from '../i18n';

export function create(element: React.ReactElement) {
  return (
    <html>
      <head>
        <title>Snapshot</title>
      </head>
      <body>
        <IntlProvider locale={'en'} messages={i18n['en']} timeZone="UTC">
          {element}
        </IntlProvider>
      </body>
    </html>
  );
}
