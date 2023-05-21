import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { replaceBaseUrl } from './replaceBaseUrl';
import { RenderTextOptions } from './RenderTextOptions';

export async function renderText<T extends object>(options: RenderTextOptions<T>) {
  const { wrapper: Wrapper = React.Fragment } = options;
  return replaceBaseUrl(
    renderToStaticMarkup(
      <Wrapper {...options}>
        <options.template {...options.data} />
      </Wrapper>
    ),
    options.baseUrl
  );
}
