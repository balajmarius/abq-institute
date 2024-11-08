import * as React from "react";
import { FormattedMessage } from "react-intl";

import Layout from "@/layouts/Layout";
import { Link } from "gatsby";

export default () => {
  const renderers = {
    b: (chunks: React.ReactNode[]) => <strong>{chunks}</strong>,
  };

  return (
    <Layout>
      <h3 className="italic mt-0">
        <FormattedMessage id="ABOUT_ABOUT" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="ABOUT_FUTURE_PROOFING_HUMANITY" />
      </h2>

      <p>
        <FormattedMessage id="ABOUT_WR_ARE_AT_THE_FOREFRONT" values={renderers} />
      </p>

      <hr className="mt-12" />

      <h3 className="italic">
        <FormattedMessage id="MISSON_MISSION" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="MISSON_GLOBAL_APPROACH" />
      </h2>

      <p>
        <FormattedMessage id="MISSON_GLOBAL_WE_BRING_TOGETHER_ACADEMIA" values={renderers} />
      </p>

      <hr className="mt-12" />

      <h3 className="italic">
        <FormattedMessage id="FOCUS_FOCUS" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="FOCUS_MAIN_PILLARS" />
      </h2>

      <p>
        <FormattedMessage id="FOCUS_WE_FOCUS_ON_FINDING" values={renderers} />
      </p>

      <hr className="mt-12" />

      <h3 className="italic">
        <FormattedMessage id="EVENTS_EVENTS_AND_COURSES" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="EVENTS_WHATS_NEXT" />
      </h2>

      <nav>
        <ol>
          <li>
            <a href="https://bit.ly/Future-of-AI-event" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="EVENTS_EVENTS" />
            </a>
          </li>
          <li>
            <a href="https://bit.ly/3C7jEWp" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="EVENTS_COURSES" />
            </a>
          </li>
        </ol>
      </nav>

      <hr className="mt-12" />
    </Layout>
  );
};

export { Head } from "@/components/Head";
