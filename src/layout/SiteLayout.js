import React from "react";
import SiteHeader from "components/website/SiteHeader";

const SiteLayout = ({children}) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}

export default SiteLayout;