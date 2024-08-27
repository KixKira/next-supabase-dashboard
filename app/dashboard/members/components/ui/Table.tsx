import { useUserStore } from "@/lib/store/user";
import React, { ReactNode } from "react";

export default function Table({
  children,
  headers,
}: {
  children: ReactNode;
  headers: string[];
}) {
  const user = useUserStore.getState().user;
  const isAdmin = user?.user_metadata.role === "admin";
  const gridColumnsClass = isAdmin ? "grid-cols-5" : "grid-cols-4";

  return (
    <div className="rounded-md border-zinc-200 dark:border-zinc-800 w-full overflow-y-auto border dark:bg-graident-dark">
      <div className="w-[900px] lg:w-full bg-white dark:bg-inherit rounded-md space-y-5 py-5">
        <div
          className={`grid ${gridColumnsClass} px-5 py-2 border-b pb-5 dark:border-zinc-600`}
        >
          {headers.map((header, index) => {
            if (index === headers.length - 1 && !isAdmin) {
              return null;
            }
            return (
              <h1
                key={index}
                className="underline font-bold text-sm dark:text-gray-500"
              >
                {header}
              </h1>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
