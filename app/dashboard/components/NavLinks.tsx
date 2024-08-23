"use client";
import React from "react";
import { CrumpledPaperIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaPeopleGroup, FaAward, FaUsers, FaWpforms } from "react-icons/fa6";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard/contests",
      text: "Promociones",
      Icon: FaAward,
    },
    {
      href: "/dashboard/participants",
      text: "Participantes",
      Icon: FaPeopleGroup,
    },
    {
      href: "/dashboard/members",
      text: "Miembros",
      Icon: FaUsers,
    },
    {
      href: "/dashboard/forms",
      text: "Formulario",
      Icon: FaWpforms,
    },
    // {
    //   href: "/dashboard/todo",
    //   text: "Todo",
    //   Icon: CrumpledPaperIcon,
    // },
  ];

  return (
    <div className="space-y-5">
      {links.map((link, index) => {
        const Icon = link.Icon;
        return (
          <Link
            onClick={() => document.getElementById("sidebar-close")?.click()}
            href={link.href}
            key={index}
            className={cn("flex items-center gap-2 rounded-sm p-2", {
              " bg-green-500 dark:bg-green-700 text-white ":
                pathname === link.href,
            })}
          >
            <Icon />
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
