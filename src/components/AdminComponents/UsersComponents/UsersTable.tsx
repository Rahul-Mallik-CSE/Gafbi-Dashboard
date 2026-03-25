/** @format */
"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  applicationNo: string;
  avatar: string;
}

interface UsersTableProps {
  users: UserData[];
  onViewUser: (user: UserData) => void;
}

const UserAvatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="text-primary font-semibold text-sm">{initials}</span>
    </div>
  );
};

const UsersTable = ({ users, onViewUser }: UsersTableProps) => {
  const columns = [
    {
      header: "Name",
      accessor: (row: UserData) => (
        <div className="flex items-center gap-3">
          <UserAvatar name={row.name} />
          <span className="font-medium text-foreground">{row.name}</span>
        </div>
      ),
    },
    {
      header: "Email",
      accessor: "email" as keyof UserData,
    },
    {
      header: "Phone",
      accessor: "phone" as keyof UserData,
    },
    {
      header: "Application No",
      accessor: "applicationNo" as keyof UserData,
    },
  ];

  return (
    <CustomTable
      data={users}
      columns={columns}
      title="Users"
      actionColumn={{
        header: "Actions",
        render: (row: UserData) => (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => onViewUser(row)}
            className="hover:bg-muted"
          >
            <Eye className="w-5 h-5 text-primary" />
          </Button>
        ),
      }}
    />
  );
};

export default UsersTable;
