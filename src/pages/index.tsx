import * as React from "react";
import { FormattedMessage } from "react-intl";

import Layout from "@/layouts/Layout";

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

      <nav>
        <ol>
          <li>
            <FormattedMessage id="FOCUS_AI_BLOCKCHAIN_QUANTUM" values={renderers} />
          </li>
          <li>
            <FormattedMessage id="FOCUS_ECONOMIC_TRANFORMATION" values={renderers} />
          </li>
          <li>
            <FormattedMessage id="FOCUS_ETHICAL_AND_LONG_TERM_SOCIETAL" values={renderers} />
          </li>
        </ol>
      </nav>

      <hr className="mt-12" />
    </Layout>
  );
};

export { Head } from "@/components/Head";