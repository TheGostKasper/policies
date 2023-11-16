import { Renderer } from "@k8slens/extensions";
import React from "react";

type Props = {
  severity: string;
};

const {
  Component: { Icon },
} = Renderer;
const Severity = ({ severity }: Props) => {
  let icon = null;
  switch (severity.toLocaleLowerCase()) {
  case "low":
    icon = <Icon material="call_received" className="info" size="16px" />;
    break;
  case "medium":
    icon = <Icon material="remove" size="16px" />;
    break;
  case "high":
    icon = <Icon material="call_made" className="error" size="16px" />;
    break;
  }
  return (
    <div className="flex align-center gaps">
      {icon}
      <span>{severity}</span>
    </div>
  );
};

export default Severity;
