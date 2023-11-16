import { Renderer } from "@k8slens/extensions";
import React from "react";
import { policiesStore } from "../Policy-store";
import { Policy } from "../Policy";
import Severity from "./Severity";
const {
  Component: { TabLayout, KubeObjectListLayout, Icon },
} = Renderer;

export function ExampleIcon(props: Renderer.Component.IconProps) {
  return <Icon {...props} material="policy" />;
}
enum sortBy {
  name = "name",
  category = "category",
  severity = "severity",
}

function PolicyPage() {
  return (
    <TabLayout>
      <KubeObjectListLayout
        className="Policies"
        store={policiesStore}
        sortingCallbacks={{
          [sortBy.name]: (policy: Policy) => policy.spec.name,
          [sortBy.category]: (policy: Policy) => policy.spec.category,
          [sortBy.severity]: (policy: Policy) => policy.spec.severity,
        }}
        tableId="policies"
        renderHeaderTitle="Policies"
        renderTableHeader={[
          { title: "Policy Name", sortBy: sortBy.name },
          {
            title: "Category",
            sortBy: sortBy.category,
          },
          {
            title: "Severity",
            sortBy: sortBy.severity,
          },
        ]}
        renderTableContents={(policy: Policy) => [
          policy.spec.name,
          policy.spec.category,
          <Severity severity={policy.spec.severity} />,
        ]}
      />
    </TabLayout>
  );
}

export default PolicyPage;
