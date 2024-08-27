import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import EditContest from "./edit/EditContest";
import { useUserStore } from "@/lib/store/user";
import { readContests } from "../actions";
import { IContests } from "@/lib/types";

export default async function ListOfContests() {
  const { data: contest } = await readContests();
  const user = useUserStore.getState().user;
  const isAdmin = user?.user_metadata.role === "admin";
  const gridColumnsClass = isAdmin ? "grid-cols-6" : "grid-cols-5";

  return (
    <div className="dark:bg-inherit bg-[#E4EAF0] mx-2 rounded-sm">
      {(contest as IContests[])?.map((contest, index) => {
        return (
          <div
            className={`grid ${gridColumnsClass} rounded-sm p-3 align-middle font-normal`}
            key={index}
          >
            <h1>{contest.name_contest}</h1>
            <h1>{contest.code_contest}</h1>
            <h1>{contest.URL_contest}</h1>
            <h1>{contest.date_start_contest}</h1>
            <h1>{contest.date_end_contest}</h1>
            {isAdmin && (
              <div className="flex gap-2 items-center">
                <Button variant="outline">
                  <TrashIcon />
                  Borrar
                </Button>
                <EditContest />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
