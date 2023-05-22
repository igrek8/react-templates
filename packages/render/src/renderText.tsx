import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { replaceBaseUrl } from './replaceBaseUrl';
import { RenderTextOptions } from './RenderTextOptions';

export async function renderText<T extends object>(options: RenderTextOptions<T>) {
  return replaceBaseUrl(
    renderToStaticMarkup(
      <>
        {options.wrapper
          ? React.createElement(options.wrapper, options, options.template(options.data))
          : options.template(options.data)}
      </>
    ),
    options.baseUrl
  );
}
