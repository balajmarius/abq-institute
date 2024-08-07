import React from "react";
import { Link } from "gatsby";
import { FormattedMessage, IntlProvider } from "react-intl";

import copy from "@/copy/en-EN.json";

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <IntlProvider messages={copy} locale="en-US">
    <nav role="navigation">
      <ul className="flex-center gap-8">
        <li className="before:content-none">
          <Link to="/">
            <FormattedMessage id="MENU_HOME" />
          </Link>
        </li>
        <li className="before:content-none">
          <Link to="/manifesto">
            <FormattedMessage id="MENU_MANIFESTO" />
          </Link>
        </li>
        <li className="before:content-none">
          <Link to="/contact">
            <FormattedMessage id="MENU_CONTACT" />
          </Link>
        </li>
        <li className="before:content-none">
          <Link to="/press">
            <FormattedMessage id="MENU_PRESS" />
          </Link>
        </li>
      </ul>
    </nav>

    <header className="text-center my-12">
      <div className="max-w-40 mx-auto">
        <Link to="/">
          <img src="/images/logo-360x360.png" />
        </Link>
      </div>

      <h1 className="font-bold">
        <FormattedMessage id="HEADER_ABQ_INSTITUTE" />
      </h1>
    </header>

    <main {...props}>
      <article>
        {children}

        <h3 className="italic">
          <FormattedMessage id="PARTICIPATE_PARTICIPATE" />
        </h3>
        <h2 className="font-bold mt-2">
          <FormattedMessage id="PARTICIPATE_JOIN_US" />
        </h2>

        <p>
          <FormattedMessage id="PARTICIPATE_JOIN_OUR_COMMUNITY" />
        </p>

        <nav>
          <ol>
            <li>
              <a href="mailto:membership@abq.institute" target="_blank">
                <FormattedMessage id="PARTICIPATE_EMAIL" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/abq-institute/" target="_blank">
                <FormattedMessage id="PARTICIPATE_LINKEDIN" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/9SnddvMjEC" target="_blank">
                <FormattedMessage id="PARTICIPATE_DISCORD" />
              </a>
            </li>
          </ol>
        </nav>

        <div className="footnotes mt-12">
          <p>
            <FormattedMessage id="FOOTER_COPYRIGHT" />
          </p>
        </div>
      </article>
    </main>
  </IntlProvider>
);

export default Layout;
