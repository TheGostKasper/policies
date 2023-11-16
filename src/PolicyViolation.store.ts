import { Renderer } from "@k8slens/extensions";
import { ViolationEvent } from "./Violation.event";

export class ViolationsApi extends Renderer.K8sApi.KubeApi<ViolationEvent> {}

export const violationsApi = new ViolationsApi({
  objectConstructor: ViolationEvent,
});

export class ViolationStore extends Renderer.K8sApi
  .KubeObjectStore<ViolationEvent> {
  api = violationsApi;
}

export const violationStore = new ViolationStore();
Renderer.K8sApi.apiManager.registerStore(violationStore);
