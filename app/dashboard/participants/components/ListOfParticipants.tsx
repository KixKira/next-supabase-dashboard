import React from "react";
import { readParticipants } from "../actions";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default async function ListOfParticipants() {
  const { data: participants } = await readParticipants();
  const sortedParticipants = [...participants].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  });

  return (
    <div className="dark:bg-inherit bg-white mx-2 rounded-sm">
      {sortedParticipants?.map((participant, index) => {
        return (
          <div
            className="grid grid-cols-5 rounded-sm p-3 align-middle font-normal"
            key={index}
          >
            <h1>{participant.DNI_participant}</h1>
            <h1 className="lowercase">
              {participant.name_participant} {participant.lastname_participant}
            </h1>
            <h1 className="lowercase">{participant.email_participant}</h1>
            <h1>{participant.free_ticket}</h1>
            <h1>
              {format(new Date(participant.created_at), "dd/MM/yyyy", {
                locale: es,
              })}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
