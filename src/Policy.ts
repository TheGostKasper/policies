import { Renderer } from "@k8slens/extensions";

export class Policy extends Renderer.K8sApi.KubeObject {
  static kind = "Policy";
  static apiBase = "/apis/pac.weave.works/v2beta2/policies";

  kind: string;
  apiVersion: string;
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels: {
      [key: string]: string;
    };
    annotations: {
      [key: string]: string;
    };
  };
  spec: {
    id: string;
    name: string;
    enabled: boolean;
    description: string;
    how_to_solve: string;
    category: string;
    severity: string;
    targets: {
      kinds?: string[];
      labels?: {
        values?: { [key: string]: string };
      }[];
      namespaces?: string[];
    };
    parameters?: {
      name: string;
      type: string;
      value: unknown;
      required?: boolean;
    }[];
    code: string;
    tags: string[];
  };
}
