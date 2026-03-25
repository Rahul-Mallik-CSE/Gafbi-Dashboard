/** @format */
"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { Button } from "@/components/ui/button";

export interface Application {
  id: string;
  applicationNo: string;
  name: string;
  email: string;
  phoneNumber: string;
  status: string;
  dateSubmitted: string;
  address: string;
  insuranceType: string;
  insuranceProvider: string;
  notes: string;
}

interface ApplicationsTableProps {
  applications: Application[];
  onViewDetails: (application: Application) => void;
}

const ApplicationsTable = ({
  applications,
  onViewDetails,
}: ApplicationsTableProps) => {
  const columns = [
    {
      header: "Application No",
      accessor: "applicationNo" as keyof Application,
      className: "font-medium",
    },
    {
      header: "Name",
      accessor: "name" as keyof Application,
    },
    {
      header: "Email",
      accessor: "email" as keyof Application,
    },
    {
      header: "Phone Number",
      accessor: "phoneNumber" as keyof Application,
    },
    {
      header: "Status",
      accessor: "status" as keyof Application,
    },
  ];

  return (
    <CustomTable
      data={applications}
      columns={columns}
      title="Applications"
      actionColumn={{
        header: "Actions",
        render: (row: Application) => (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(row)}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Details
          </Button>
        ),
      }}
    />
  );
};

export default ApplicationsTable;
