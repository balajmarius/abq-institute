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
        <FormattedMessage id="MANIFESTO_MANIFESTO" />
      </h3>
      <h2 className="font-bold mt-2">
        <FormattedMessage id="MANIFESTO_MISSION_STATEMENT" />
      </h2>

      <p>
        <FormattedMessage id="MANIFESTO_THE_ABQ_INSTUTUTE" values={renderers} />
      </p>

      <hr className="mt-12" />

      <h2 className="font-bold">
        <FormattedMessage id="MANIFESTO_VISION" />
      </h2>

      <p>
        <FormattedMessage id="MANIFESTO_WE_INVISION" />
      </p>

      <hr className="mt-12" />

      <h2 className="font-bold">
        <FormattedMessage id="MANIFESTO_GUIDING_PRINCIPLES" />
      </h2>

      <p>
        <FormattedMessage id="MANIFESTO_COMPLEXITY" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_TRANDISCIPLINARITY" values={renderers} />
      </p>
      <p>
        <FormattedMessage id="MANIFESTO_GLOBALITY" values={renderers} />
      </p>

      <hr className="mt-12" />

      <h2 className="font-bold">
        <FormattedMessage id="MANIFESTO_CORE_FOCUS_AREAS" />
      </h2>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_AI_BLOCKCHAIN_QUANTUM" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_DEVELOP_QUANTUM_RESISTANT" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_CREATE_AI_MODELS" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_ECONOMIC_TRANFORMATION" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_DESIGN_AND_TEST_AI_DRIVEN" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_MODEL_THE_IMPACT" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_FUTURE_OF_WORK" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_PROTOTYPE_NEW_FORMS" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_IDENTIFY_AND_DEFINE_EMERGING" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_ETHICAL_AND_SOCIETAL" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_CONDUCT_COMPREHENSIVE_STUDIES" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_DEVELOP_FRAMEWORKS_FOR_ENSURING_PRIVACY" />
        </li>
      </ul>
      <hr className="mt-12" />

      <h2 className="font-bold">
        <FormattedMessage id="MANIFESTO_OUR_APPROACH" />
      </h2>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_INTERDISCIPLINARY_RESEARCH" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_ESTABLISH_A_GLOBAL_NETWORK" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_CONDUCT_ANNUAL" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_PRAGMATIC_ENTREPRENEURSHIP" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_MENTORSHIP_PROGRAM" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_INNOVATION_LAB" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_GLOBAL_ACCELERATOR" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_FUTURE_SCENARIO" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_DEVELOP_ADVANCED_SIMULATION" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_PUBLISH_QUARTERLY_REPORTS" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_EDUCATION_AND_PUBLIC_ENGAGEMENT" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_CREATE_BOTH_ONLINE" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_HOST_PUBLIC_LECTURES" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_DEVELOP_EDUCATIONAL_PROGRAMS" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_CONCRETE_GOALS" />
      </h4>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_ESTABLISH_PARTNERSHIPS" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_INCUBATE" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_PUBLISH_OVER_20_PEER_REVIEWED" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_DEVELOP_AND_LAUNCH" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_HOST_AN_ANNUAL" />
        </li>
      </ul>

      <h4 className="font-bold">
        <FormattedMessage id="MANIFESTO_MEMBERSHIP" />
      </h4>

      <p>
        <FormattedMessage id="MANIFESTO_JOIN_THE_ABQ" />
      </p>

      <ul className="list-disc pl-8">
        <li>
          <FormattedMessage id="MANIFESTO_INDIVIDUAL_RESEARCHER" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_CORPORATE_PARTNER" />
        </li>
        <li>
          <FormattedMessage id="MANIFESTO_GOVERMENT_NGO" />
        </li>
      </ul>

      <p>
        <FormattedMessage id="MANIFESTO_TO_BECOME" />
      </p>

      <p>
        <FormattedMessage id="MANIFESTO_TOGETHER_WE_WILL_HARNESS" />
      </p>

      <hr className="mt-12" />
    </Layout>
  );
};

export { Head } from "@/components/Head";
