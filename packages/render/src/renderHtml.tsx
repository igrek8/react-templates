import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { replaceBaseUrl } from './replaceBaseUrl';
import { RenderHtmlOptions } from './RenderHtmlOptions';

export async function renderHtml<T extends object>(options: RenderHtmlOptions<T>) {
  const { wrapper: Wrapper = React.Fragment } = options;
  return replaceBaseUrl(
    '<!DOCTYPE html>' +
      renderToStaticMarkup(
        <html lang={options.locale} dir={options.dir}>
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {global.__stylesheets__?.flatMap((styles, i) =>
              styles.map(([, __html], j) => (
                <style key={`${i}-${j}`} dangerouslySetInnerHTML={{ __html }} />
              ))
            )}
            {options.styles?.map((__html, index) => (
              <style key={index} dangerouslySetInnerHTML={{ __html }} />
            ))}
            <title>{options.title}</title>
          </head>
          <body className={options.theme}>
            <Wrapper {...options}>
              <options.template {...options.data} />
            </Wrapper>
          </body>
        </html>
      ),
    options.baseUrl
  );
}
