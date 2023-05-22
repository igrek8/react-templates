export function replaceBaseUrl(content: string, baseUrl: string) {
  return content
    .replaceAll('file:///__webpack_public_path__/static', baseUrl)
    .replaceAll('/__webpack_public_path__/static', baseUrl);
}
