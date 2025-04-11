import * as React from "react";

import Layout from "@/layouts/Layout";

export default () => {
  return (
    <Layout>
      <iframe
        className="w-full min-h-xl"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=eYlwkP6VkkSKGZi3FcU5f8PPEhcRy19LhpD7_mvKlXhUMlVMN0xERktXWDJHNldCTVdMNUJONElDUC4u&embed=true"
      />
    </Layout>
  );
};

export { Head } from "@/components/Head";
