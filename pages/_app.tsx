import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {/* <ChakraBaseProvider> */}
    <Component {...pageProps} />
    {/* </ChakraBaseProvider> */}
  </>
);

export default App;
