import type { Preview } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";
import { i18n } from "../src/i18n";

const preview: Preview = {
  globalTypes: {
    lang: {
      name: "Language",
      description: "Language",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "🇬🇧", title: "English" },
          { value: "de", right: "🇩🇪", title: "German" },
        ],
      },
    },
    tz: {
      name: "Timezone",
      description: "Timezone",
      defaultValue: "UTC",
      toolbar: {
        icon: "time",
        items: [
          { value: "UTC", title: "UTC" },
          { value: "Europe/Berlin", title: "Europe/Berlin" },
          { value: "America/Los_Angeles", title: "America/Los_Angeles" },
          { value: "Asia/Shanghai", title: "Asia/Shanghai" },
        ],
      },
    },
  },
  decorators: [
    (Story, { globals: { lang, tz } }) => {
      return (
        <IntlProvider locale={lang} timeZone={tz} messages={i18n[lang]}>
          <Story />
        </IntlProvider>
      );
    },
  ],
};

export default preview;
