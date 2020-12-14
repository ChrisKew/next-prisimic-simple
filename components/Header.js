import React from "react";
import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";
import siteLinks from "../utils/siteLinks";

import { DocLink } from "components";
import { headerStyles } from "styles";

const Header = ({ menu }) => {
  return (
    <header className="site-header">
      <NextLink href="/">
        <a>
          <div className="logo">My Nextly Site</div>
        </a>
      </NextLink>
      <MenuLinks menu={menu} siteLinks={siteLinks} />
      <style jsx global>
        {headerStyles}
      </style>
    </header>
  );
};

const MenuLinks = ({ menu, siteLinks }) => {
  const {
    data: { menu_links: menuLinks }
  } = menu;
  const allPageLinks = [...menuLinks, ...siteLinks];
  if (menu) {
    return (
      <nav>
        <ul>
          {allPageLinks.map((menuLink, index) => {
            return <MenuLink menuLink={menuLink} key={`menulink-${index}`} />;
          })}
        </ul>
      </nav>
    );
  }
  return null;
};

const MenuLink = ({ menuLink }) => {
  if (menuLink.link.link_type === "Local") {
    return (
      <li>
        <NextLink href={`/${menuLink.link.uid}`}>
          <a>{menuLink.label[0].text}</a>
        </NextLink>
      </li>
    );
  }
  return (
    <li>
      <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
    </li>
  );
};

export default Header;
