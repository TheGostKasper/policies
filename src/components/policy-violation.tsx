import { Renderer } from "@k8slens/extensions";
import React from "react";
import { useEventList } from "../hook";

const {
  Component: {
    Table,
    TableHead,
    TableCell,
    TableRow,
    Spinner,
  },
} = Renderer;

function PolicyViolations({ policyId }: { policyId: string }) {
  const { events, loading } = useEventList(policyId);

  if (loading) return <Spinner />;

  if (events.length === 0) return <p>No Violations found</p>;

  return (
    <>
      <Table tableId="eventsV">
        <TableHead >
          <TableCell>Message</TableCell>
          <TableCell>Object</TableCell>
          <TableCell>Age</TableCell>
        </TableHead>
      </Table>
      {events.map((event, index) => (
        <TableRow key={index}>
          <TableCell>{event.message}</TableCell>
          <TableCell>{event.involvedObject.name}</TableCell>
          <TableCell>{event.lastTimestamp}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
export default PolicyViolations;
