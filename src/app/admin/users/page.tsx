/** @format */
"use client";

import React from "react";
import UsersTable from "@/components/AdminComponents/UsersComponents/UsersTable";

const mockUsers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 234 567 8901",
    applicationNo: "APP-2024-001",
    avatar: "/avatars/user1.jpg",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 234 567 8902",
    applicationNo: "APP-2024-002",
    avatar: "/avatars/user2.jpg",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "m.brown@email.com",
    phone: "+1 234 567 8903",
    applicationNo: "APP-2024-003",
    avatar: "/avatars/user3.jpg",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "+1 234 567 8904",
    applicationNo: "APP-2024-004",
    avatar: "/avatars/user4.jpg",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "d.wilson@email.com",
    phone: "+1 234 567 8905",
    applicationNo: "APP-2024-005",
    avatar: "/avatars/user5.jpg",
  },
  {
    id: "6",
    name: "Jessica Martinez",
    email: "j.martinez@email.com",
    phone: "+1 234 567 8906",
    applicationNo: "APP-2024-006",
    avatar: "/avatars/user6.jpg",
  },
  {
    id: "7",
    name: "Chris Anderson",
    email: "c.anderson@email.com",
    phone: "+1 234 567 8907",
    applicationNo: "APP-2024-007",
    avatar: "/avatars/user7.jpg",
  },
  {
    id: "8",
    name: "Amanda Taylor",
    email: "a.taylor@email.com",
    phone: "+1 234 567 8908",
    applicationNo: "APP-2024-008",
    avatar: "/avatars/user8.jpg",
  },
  {
    id: "9",
    name: "Robert Thomas",
    email: "r.thomas@email.com",
    phone: "+1 234 567 8909",
    applicationNo: "APP-2024-009",
    avatar: "/avatars/user9.jpg",
  },
  {
    id: "10",
    name: "Lisa Garcia",
    email: "l.garcia@email.com",
    phone: "+1 234 567 8910",
    applicationNo: "APP-2024-010",
    avatar: "/avatars/user10.jpg",
  },
  {
    id: "11",
    name: "James Moore",
    email: "j.moore@email.com",
    phone: "+1 234 567 8911",
    applicationNo: "APP-2024-011",
    avatar: "/avatars/user11.jpg",
  },
  {
    id: "12",
    name: "Patricia Lee",
    email: "p.lee@email.com",
    phone: "+1 234 567 8912",
    applicationNo: "APP-2024-012",
    avatar: "/avatars/user12.jpg",
  },
];

const UsersPage = () => {
  const handleViewUser = (user: (typeof mockUsers)[0]) => {
    console.log("View user:", user);
  };

  return (
    <div className="p-4 sm:p-6">
      <UsersTable users={mockUsers} onViewUser={handleViewUser} />
    </div>
  );
};

export default UsersPage;
