import React from "react";
import App, { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter;
    src: url(./static/fonts/Inter-Regular.ttf);
  }
  @font-face {
    font-family: Inter-Bold;
    src: url(./static/fonts/Inter-Bold.ttf);
  }

  html, body{
    margin:0;
    min-width:300px;
  }
`;

class MyApp extends App<AppProps> {
  componentDidMount(): void {}
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
