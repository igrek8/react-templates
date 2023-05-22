import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { replaceBaseUrl } from './replaceBaseUrl';
import { RenderHtmlOptions } from './RenderHtmlOptions';

export async function renderHtml<T extends object>(options: RenderHtmlOptions<T>) {
  return replaceBaseUrl(
    '<!DOCTYPE html>' +
      renderToStaticMarkup(
        <html lang={options.locale} dir={options.direction}>
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{options.title}</title>
            {global.__stylesheets__?.flatMap((styles, i) =>
              styles.map(([, __html], j) => (
                <style key={`${i}-${j}`} dangerouslySetInnerHTML={{ __html }} />
              ))
            )}
            {options.styles?.map((__html, index) => (
              <style key={index} dangerouslySetInnerHTML={{ __html }} />
            ))}
          </head>
          <body className={options.theme}>
            {options.wrapper ? (
              <options.wrapper {...options}>
                <options.template {...options.data} />
              </options.wrapper>
            ) : (
              <options.template {...options.data} />
            )}
          </body>
        </html>
      ),
    options.baseUrl
  );
}
