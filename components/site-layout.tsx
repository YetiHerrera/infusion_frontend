import React, { ReactNode } from "react";
import Head from "components/head";

function SiteLayout(props: { children: ReactNode }): JSX.Element {
  return (
    <>
      <header>
        <Head />
      </header>
      <main>{props.children}</main>
    </>
  );
}

export default SiteLayout;
