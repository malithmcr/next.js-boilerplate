import App from "next/app";
import React from "react";
import messages_de from "../translations/de.json";
import messages_en from "../translations/en.json";
import messages_fr from "../translations/fr.json";
import MainLayout from "../components/Layout/main";

const messages = {
  'de': messages_de,
  'en': messages_en,
  'fr': messages_fr
};


class MyApp extends App {
  state = { language: 'en' }

  render() {
    const { Component, baseUrl, pageProps } = this.props;
    return (
        <MainLayout locale={this.state.language} messages={messages[this.state.language]} baseUrl={baseUrl}>
          <Component {...pageProps} />
        </MainLayout>
    );
  }
}

export default MyApp
