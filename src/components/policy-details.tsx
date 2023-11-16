import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Policy } from "../Policy";
import PolicyViolations from "./policy-violation";
import styled from "@emotion/styled";

const {
  Component: { DrawerItem, DrawerTitle, MonacoEditor },
} = Renderer;

const Editor = styled(MonacoEditor)`
  .monaco-editor {
    min-height: 300px !important;
  }
`;

const Code = styled.code`
  background-color: var(--inputControlBackground);
  color: var(--textColorTertiary);
  padding: 1rem;
`;

export type PolicyDetailsProps =
  Renderer.Component.KubeObjectDetailsProps<Policy>;

function PolicyDetails({ object: policy }: PolicyDetailsProps) {
  if (!policy) return null;
  return (
    <div className="Policy">
      <DrawerItem name="Name">{policy.spec.name}</DrawerItem>

      <div className="flex column">
        <DrawerTitle>Description</DrawerTitle>
        <Code>{policy.spec.description}</Code>
      </div>

      <div className="flex column">
        <DrawerTitle>How to solve</DrawerTitle>
        <Code>{policy.spec.how_to_solve}</Code>
      </div>

      <div className="flex column">
        <DrawerTitle>Code</DrawerTitle>
        <Editor value={policy.spec.code} readOnly />
      </div>

      <div className="flex column">
        <DrawerTitle>Violations</DrawerTitle>
        <PolicyViolations policyId={policy.metadata.name} />
      </div>
    </div>
  );
}

export default PolicyDetails;
