import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";
// COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Content from "@/components/Content";
import styled from "styled-components";

const Bg = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  min-width: 360px;
  min-height: 100vh;
  background-color: #0f0f11;
`;
const GlobalStyle = createGlobalStyle`
  * {
    font-family: GmarketSans;
    font-style: normal;
    font-weight: normal;
    box-sizing: border-box;
    text-decoration: none; 
  }
   ::-webkit-scrollbar {
  display: none; 
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Bg>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Content />
          <Footer />
        </Bg>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
