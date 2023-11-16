import { Renderer,Common} from "@k8slens/extensions";
import { Policy } from "./Policy";

export class PoliciesApi extends Renderer.K8sApi.KubeApi<Policy> {
}

export const certificatesApi = new PoliciesApi({
  objectConstructor: Policy
});

export class PoliciesStore extends Renderer.K8sApi.KubeObjectStore<Policy> {
  api = certificatesApi
}

export const policiesStore = new PoliciesStore();
Renderer.K8sApi.apiManager.registerStore(policiesStore);