import { RenderOptions } from './RenderOptions';

export interface RenderHtmlOptions<T extends object> extends RenderOptions<T> {
  /**
   * Title of the document used in `<title>`
   * @example "Blog"
   */
  title: string;
  /**
   * A text writing directionality used as `<html dir="ltr">`
   * @example "ltr"
   */
  direction: string;
  /**
   * A custom CSS class used as `<body class="theme-dark">`
   * @example "theme-dark"
   */
  theme?: string;
  /**
   * Extra CSS styles (html format only)
   * @example
   * "body { font-family: 'Roboto', sans-serif; }"
   */
  styles?: string[];
}
