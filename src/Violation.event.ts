import { Renderer } from "@k8slens/extensions";

export class ViolationEvent extends Renderer.K8sApi.KubeEvent {
  static kind = "Event";
  static reason = "PolicyViolation";
  static type = "Warning";

  kind: string;
  apiVersion: string;
  metadata: {
    name: string;
    namespace: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels: {
      [key: string]: string;
    };
    annotations: {
      [key: string]: string;
    };
    selfLink: string;
  };

  action: string;
  eventTime: string;
  firstTimestamp: string;
  involvedObject: {
    kind: string;
    namespace: string;
    name: string;
    uid: string;
    apiVersion: string;
    resourceVersion: string;
  };
  message: string;
  related: {
    kind: string;
    name: string;
    uid: string;
    apiVersion: string;
    resourceVersion: string;
  };
  lastTimestamp: string;
  reportingComponent: string;
  reportingInstance: string;
  source: {
    component: string;
  };
  type: string;
}
