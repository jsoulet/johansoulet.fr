import React from 'react';
import { IntlProvider, IntlContextProvider} from 'gatsby-plugin-intl';
import messages from '../config/i18n/messages/en.json';
import { createIntl, createIntlCache } from 'react-intl';

const intlCache = createIntlCache();
const intl = createIntl(
  {
    defaultLanguage: 'en',
    language: 'en',
    messages: messages,
  },
  intlCache,
);

export default function IntlProvider(Story) {
  return (
    <IntlProvider
      locale={intl.language}
      defaultLocale={intl.defaultLanguage}
      messages={intl.messages}
    >
      <IntlContextProvider
        value={intl}
      >
          <Story />
      </IntlContextProvider>
    </IntlProvider>
  );
}