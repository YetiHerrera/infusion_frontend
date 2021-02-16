import SiteLayout from "components/site-layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import "styles/custom-bootstrap.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
