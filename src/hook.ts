import { useState, useEffect } from "react";
import { Renderer } from "@k8slens/extensions";

export interface Event {
  kind?: string;
  apiVersion?: string;
  metadata?: {
    name?: string;
    namespace?: string;
    uid?: string;
    resourceVersion?: string;
    creationTimestamp?: string;
    labels?: {
      [key: string]: string;
    };
    annotations?: {
      [key: string]: string;
    };
    selfLink?: string;
  };

  action?: string;
  eventTime?: string;
  firstTimestamp?: string;
  involvedObject?: {
    kind?: string;
    namespace?: string;
    name?: string;
    uid?: string;
    apiVersion?: string;
    resourceVersion?: string;
  };
  message?: string;
  related?: {
    kind?: string;
    name?: string;
    uid?: string;
    apiVersion?: string;
    resourceVersion?: string;
  };
  lastTimestamp?: string;
  reportingComponent?: string;
  reportingInstance?: string;
  source?: {
    component?: string;
  };
  type?: string;
}

export function useEventList(policyId: string) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await Renderer.K8sApi.eventApi.list(
          {},
          {
            fieldSelector: ["type=Warning", "reason=PolicyViolation"],
          }
        );
        let eventsData: Event[] = [];
        if (response) {
          eventsData = response.filter(
            (event) => event.metadata.annotations.policy_id === policyId
          );
        }
        setEvents(eventsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, [policyId]);

  return { events, loading, error };
}
