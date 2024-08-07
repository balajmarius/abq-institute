import * as React from "react";
import { FormattedMessage } from "react-intl";

import Layout from "@/layouts/Layout";

export default () => {
  const renderers = {
    b: (chunks: React.ReactNode[]) => <strong>{chunks}</strong>,
    i: (chunks: React.ReactNode[]) => <em>{chunks}</em>,
    url1: (chunks: React.ReactNode[]) => (
      <a href="https://abq.institute" target="_blank">
        {chunks}
      </a>
    ),
    url2: (chunks: React.ReactNode[]) => (
      <a href="mailto:contact@abq.institute" target="_blank">
        {chunks}
      </a>
    ),
  };

  return (
    <Layout>
      <h3 className="italic mt-0">
        <FormattedMessage id="PRESS_MEDIA_AND_PRESS" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="PRESS_FIND_HERE_MEDIA_RESOURCES" />
      </h2>

      <hr className="mt-12" />

      <h4 className="font-bold">
        <FormattedMessage id="PRESS_COMUNICAT_DE_PRESA" values={renderers} />
      </h4>

      <p className="underline">
        <FormattedMessage id="PRESS_INSTITUTUL_ABQ" />
      </p>
      <p className="italic">
        <FormattedMessage id="PRESS_RELEASE_DATE" />
      </p>

      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_1" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_2" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_3" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_4" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_5" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_6" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_7" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_8" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_9" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_10" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_11" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_PRESS_RELEASE_12" values={renderers} />
      </p>

      <hr className="mt-12" />
    </Layout>
  );
};

export { Head } from "@/components/Head";
