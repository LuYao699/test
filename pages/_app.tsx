import { AppProps } from "next/app";
import Head from "next/head";
import { ReduceContextProvider } from "../contexts/ReduceContext";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ReduceContextProvider>
      <Component {...pageProps} />
    </ReduceContextProvider>
  </>
);

export default App;
