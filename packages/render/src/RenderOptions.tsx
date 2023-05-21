import React from 'react';
import { Localization } from './Localization';
import { WrapperProps } from './WrapperProps';

export interface RenderOptions<T extends object> extends Localization {
  /**
   * An element to render
   */
  template: React.FC<T>;
  /**
   * Data required for the template
   * @example
   * { "message": "Hello, World!"}
   */
  data: T;
  /**
   * Base URL to resolve static assets (without a trailing slash)
   * @example
   * "https://bucket.s3.eu-central-1.amazonaws.com"
   */
  baseUrl: string;
  /**
   * Add a wrapper element to initialize providers. Do not render any HTML elements here because they will result in the output
   * @example
   * import { IntlProvider } from 'react-intl';
   *
   * const messages = {
   *  en: {
   *    greeting: 'Hello, {user}'
   *  },
   * };
   *
   * const Wrapper = ({ locale, timeZone, children }) => (
   *  <IntlProvider locale={locale} messages={messages[locale]} timeZone={timeZone}>
   *    {children}
   *  </IntlProvider>
   * );
   */
  wrapper?: React.FC<WrapperProps>;
}
