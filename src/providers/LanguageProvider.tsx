import React from "react";
import { IntlProvider } from "react-intl";
import nbMessages from "../language/nb.json";
import enMessages from "../language/en.json";

type Props = {
  defaultSprak: string;
  children?: any;
};

const loadMessages = (sprak: string) =>
  ({
    nb: nbMessages,
    en: enMessages,
  }[sprak]);

const LanguageProvider = ({ defaultSprak, children }: Props) => (
  <IntlProvider locale={defaultSprak} messages={loadMessages(defaultSprak)}>
    {children}
  </IntlProvider>
);

export default LanguageProvider;
