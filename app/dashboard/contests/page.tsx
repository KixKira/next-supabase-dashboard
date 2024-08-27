import React from "react";
import SearchContests from "./components/SearchContests";
import CreateContest from "./components/create/CreateContest";
import ContestTable from "./components/ContestTable";
import { useUserStore } from "@/lib/store/user";

export default function Contests() {
  const user = useUserStore.getState().user;
  const isAdmin = user?.user_metadata.role === "admin";

  return (
    <div className="space-y-5 w-full overflow-y-auto px-3">
      <h1 className="text-3xl font-bold">Promociones</h1>
      <div className="flex gap-2">
        <SearchContests />
        {isAdmin && <CreateContest />}
      </div>
      <ContestTable />
    </div>
  );
}
