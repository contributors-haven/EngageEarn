import "@/styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useEffect, useState } from "react";
import Script from "next/script";

const { chains, publicClient } = configureChains(
  [goerli],
  [
    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID as string }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "EnageEarn",
  projectId: "d34fb41a6861e2a4c04f4389c65561ce",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#F5EDE0",
        overflowX: "hidden",
        color: "#202124",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    brand: {
      black: "#202124",
      white: "#f2f2f2",
      pink: "#DF3285",
      darkBlue: "#3D89E5",
      gray: "#888888",
      //
      beige: "#F5EDE0",
      yellow: "#F3BF56",
      orange: "#FF6C3B",
      blue: "#4084F3",
    },
    textStyles: {
      header: {
        fontSize: ["200px"],
      },
      h1: {
        // you can also use responsive styles
        fontSize: ["48px", "72px"],
        fontWeight: "bold",
        lineHeight: "110%",
        letterSpacing: "-2%",
      },
      h2: {
        fontSize: ["36px", "48px"],
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <>
      {rendered && (
        <>
          <Script
            src="https://platform.twitter.com/widgets.js"
            onLoad={() => console.log("Loaded twitter script!!!")}
          ></Script>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <ChakraProvider resetCSS theme={chakraTheme}>
                <Layout title="Earn by Contributing Communities">
                  <Component {...pageProps} />
                </Layout>
              </ChakraProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </>
      )}
    </>
  );
}
