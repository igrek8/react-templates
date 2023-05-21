export function replaceBaseUrl(content: string, baseUrl: string) {
  return content.replaceAll('__webpack_public_path__/static', baseUrl);
}
