import React from "react";
import App, { AppProps } from "next/app";

class MyApp extends App<AppProps> {
  componentDidMount(): void {}
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
