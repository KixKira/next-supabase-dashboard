import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import EditContest from "./edit/EditContest";

export default function ListOfContests() {
  const contests = [
    {
      name: "Prueba 1",
      code: "SGF00001",
      status: "activo",
      created_at: new Date().toDateString(),
    },
    {
      name: "Prueba 2",
      code: "SGF00002",
      status: "inactivo",
      created_at: new Date().toDateString(),
    },
    {
      name: "Prueba 3",
      code: "SGF00003",
      status: "activo",
      created_at: new Date().toDateString(),
    },
  ];

  return (
    <div className="dark:bg-inherit bg-[#E4EAF0] mx-2 rounded-sm">
      {contests.map((contest, index) => {
        return (
          <div
            className="grid grid-cols-6 rounded-sm p-3 align-middle font-normal"
            key={index}
          >
            <h1>{contest.name}</h1>
            <h1>{contest.code}</h1>
            <div>
              <span
                className={cn(
                  " dark:bg-zinc-800 px-2 py-1 rounded-full  capitalize text-sm border-zinc-300  border",
                  {
                    "text-green-600 px-4 dark:border-green-400 bg-green-200":
                      contest.status === "activo",
                    "text-red-500 px-3 bg-red-100 dark:text-red-300 dark:border-red-400":
                      contest.status === "inactivo",
                  }
                )}
              >
                {contest.status}
              </span>
            </div>
            <h1>{contest.created_at}</h1>
            <h1>{contest.created_at}</h1>
            <div className="flex gap-2 items-center">
              <Button variant="outline">
                <TrashIcon />
                Borrar
              </Button>
              <EditContest />
            </div>
          </div>
        );
      })}
    </div>
  );
}
