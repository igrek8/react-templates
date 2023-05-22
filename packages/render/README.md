# @react-templates/render

Renders a template using React & CSS modules

## Installation

```bash
npm install @react-templates/render --save
yarn add @react-templates/render
```

## Usage

```tsx
import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { renderHtml } from '@react-templates/render';
import { WrapperProps } from '@react-templates/render';

// 1) Define props
interface MyTemplateProps {
  user: string;
}

// 2) Define a React template
const MyTemplate: React.FC<MyTemplateProps> = ({ user }) => {
  const intl = useIntl();
  return <p>{intl.formatMessage({ id: 'welcome' }, { user })}</p>;
};

// 3) Define localization
const localization: Record<string, Record<string, string>> = {
  en: {
    welcome: 'Hello, {user}',
  },
};

// 4) Define React providers for localization
const wrapper: React.FC<WrapperProps> = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={localization[locale]}>
      {children}
    </IntlProvider>
  );
};

// 5) Render HTML
renderHtml<MyTemplateProps>({
  title: 'Hello World!',
  template: MyTemplate,
  data: { user: 'John' },
  dir: 'ltr',
  locale: 'en',
  timeZone: 'Europe/Berlin',
  baseUrl: 'https://bucket.s3.eu-central-1.amazonaws.com',
  wrapper,
});
```

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World!</title>
  </head>
  <body>
    <p>Hello, John</p>
  </body>
</html>
```
