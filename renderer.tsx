import { Renderer } from "@k8slens/extensions";
import PolicyPage, { ExampleIcon } from "./src/components/policy-page";
import React from "react";
import { Policy } from "./src/Policy";
import PolicyDetails, {
  PolicyDetailsProps,
} from "./src/components/policy-details";

export default class ExampleExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "policy",
      components: {
        Page: () => <PolicyPage />,
      },
    },
    {
      id: "policy/events",
      kind: Policy.kind,
      apiVersions: ["pac.weave.works/v2beta2"],
      components: {
        Page: (props: PolicyDetailsProps) => <PolicyDetails {...props} />,
      },
    },
  ];

  clusterPageMenus = [
    {
      target: { pageId: "policy" },
      title: "Policy",
      components: {
        Icon: ExampleIcon,
      },
    },
  ];

  kubeObjectDetailItems = [
    {
      kind: Policy.kind,
      apiVersions: ["pac.weave.works/v2beta2"],
      components: {
        Details: (props: PolicyDetailsProps) => <PolicyDetails {...props} />,
      },
    },
  ];

  async onActivate() {
    console.log("hello world");
  }
}
