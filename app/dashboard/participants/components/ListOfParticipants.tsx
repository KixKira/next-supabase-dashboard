import React from "react";

export default function ListOfParticipants() {
  const participants = [
    {
      dni: "V12345678",
      name: "Oscar Machado",
      email: "oscarmachado@gmail.com",
      phone: "+584127089438",
      ticket: "SGF00001",
      date: new Date().toDateString(),
    },
    {
      dni: "V12345678",
      name: "Oscar Machado",
      email: "oscarmachado@gmail.com",
      phone: "+584127089438",
      ticket: "SGF00001",
      date: new Date().toDateString(),
    },
    {
      dni: "V12345678",
      name: "Oscar Machado",
      email: "oscarmachado@gmail.com",
      phone: "+584127089438",
      ticket: "SGF00001",
      date: new Date().toDateString(),
    },
    {
      dni: "V12345678",
      name: "Oscar Machado",
      email: "oscarmachado@gmail.com",
      phone: "+584127089438",
      ticket: "SGF00001",
      date: new Date().toDateString(),
    },
    {
      dni: "V12345678",
      name: "Oscar Machado",
      email: "oscarmachado@gmail.com",
      phone: "+584127089438",
      ticket: "SGF00001",
      date: new Date().toDateString(),
    },
  ];

  return (
    <div className="dark:bg-inherit bg-white mx-2 rounded-sm">
      {participants.map((participant, index) => {
        return (
          <div
            className="grid grid-cols-6 rounded-sm p-3 align-middle font-normal"
            key={index}
          >
            <h1>{participant.dni}</h1>
            <h1>{participant.name}</h1>
            <h1>{participant.email}</h1>
            <h1>{participant.phone}</h1>
            <h1>{participant.ticket}</h1>
            <h1>{participant.date}</h1>
          </div>
        );
      })}
    </div>
  );
}
