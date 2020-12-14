import React from "react";

import DivWrapper from "../layouts/DivWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <DivWrapper>
      <Component {...pageProps} />
    </DivWrapper>
  );
}

export default MyApp;
