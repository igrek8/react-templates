export interface Localization {
  /**
   * A locale of the content used as `<html lang="en">`
   * @example "en"
   */
  locale: string;
  /**
   * A text writing directionality used as `<html dir="ltr">`
   * @example "ltr"
   */
  dir: string;
  /**
   * Time zone to format date and time
   * @example "Europe/Berlin"
   */
  timeZone: string;
}
