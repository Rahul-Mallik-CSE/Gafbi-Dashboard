/** @format */
"use client";
import React from "react";
import {
  PageHeader,
  DateDisplay,
  NotificationCard,
  GafbiBoxContents,
} from "@/components/HomeComponents";

const boxItems = [
  {
    id: "1",
    name: "Surface Disinfectant",
    quantity: "500ml",
  },
  {
    id: "2",
    name: "Surface Disinfectant",
    quantity: "500ml",
  },
  {
    id: "3",
    name: "Surface Disinfectant",
    quantity: "500ml",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-2xl">
      <PageHeader title="Overview" />
      <DateDisplay />

      <div className="mt-6">
        <NotificationCard message="Due to supply issues, we have temporarily replaced FFP2 masks with surgical masks in your care box. We apologize for any inconvenience." />
      </div>

      <GafbiBoxContents items={boxItems} />
    </div>
  );
}
