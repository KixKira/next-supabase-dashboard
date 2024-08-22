import React from "react";
import SearchParticipants from "./components/SearchParticipants";
import ParticipantsTable from "./components/ParticipantsTable";

export default function Participants() {
  return (
    <div className="space-y-5 w-full overflow-y-auto px-3">
      <h1 className="text-3xl font-bold">Participantes</h1>
      <div className="flex gap-2">
        <SearchParticipants />
      </div>
      <ParticipantsTable />
    </div>
  );
}
