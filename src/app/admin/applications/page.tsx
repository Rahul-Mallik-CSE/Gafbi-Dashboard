/** @format */
"use client";

import React, { useState } from "react";
import ApplicationsTable, {
  type Application,
} from "@/components/AdminComponents/ApplicationsComponents/ApplicationsTable";
import ApplicationDetailsModal from "@/components/AdminComponents/ApplicationsComponents/ApplicationDetailsModal";

const mockApplications: Application[] = [
  {
    id: "1",
    applicationNo: "APP-2024-001",
    name: "John Smith",
    email: "john.smith@email.com",
    phoneNumber: "+1 234 567 8901",
    status: "Approved",
    dateSubmitted: "2024-03-15",
    address: "123 Main St, New York, NY 10001",
    insuranceType: "Health Insurance",
    insuranceProvider: "Blue Cross",
    notes: "Regular customer with good history.",
  },
  {
    id: "2",
    applicationNo: "APP-2024-002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phoneNumber: "+1 234 567 8902",
    status: "Pending",
    dateSubmitted: "2024-03-14",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    insuranceType: "Dental Insurance",
    insuranceProvider: "Delta Dental",
    notes: "",
  },
  {
    id: "3",
    applicationNo: "APP-2024-003",
    name: "Michael Brown",
    email: "m.brown@email.com",
    phoneNumber: "+1 234 567 8903",
    status: "In Progress",
    dateSubmitted: "2024-03-13",
    address: "789 Pine Rd, Chicago, IL 60601",
    insuranceType: "Vision Insurance",
    insuranceProvider: "VSP",
    notes: "Requires additional documentation.",
  },
  {
    id: "4",
    applicationNo: "APP-2024-004",
    name: "Emily Davis",
    email: "emily.d@email.com",
    phoneNumber: "+1 234 567 8904",
    status: "Approved",
    dateSubmitted: "2024-03-12",
    address: "321 Elm St, Houston, TX 77001",
    insuranceType: "Health Insurance",
    insuranceProvider: "Aetna",
    notes: "Premium plan selected.",
  },
  {
    id: "5",
    applicationNo: "APP-2024-005",
    name: "David Wilson",
    email: "d.wilson@email.com",
    phoneNumber: "+1 234 567 8905",
    status: "Rejected",
    dateSubmitted: "2024-03-11",
    address: "654 Maple Dr, Phoenix, AZ 85001",
    insuranceType: "Life Insurance",
    insuranceProvider: "MetLife",
    notes: "Incomplete application.",
  },
  {
    id: "6",
    applicationNo: "APP-2024-006",
    name: "Jessica Martinez",
    email: "j.martinez@email.com",
    phoneNumber: "+1 234 567 8906",
    status: "Pending",
    dateSubmitted: "2024-03-10",
    address: "987 Cedar Ln, Philadelphia, PA 19101",
    insuranceType: "Health Insurance",
    insuranceProvider: "Cigna",
    notes: "",
  },
  {
    id: "7",
    applicationNo: "APP-2024-007",
    name: "Chris Anderson",
    email: "c.anderson@email.com",
    phoneNumber: "+1 234 567 8907",
    status: "Approved",
    dateSubmitted: "2024-03-09",
    address: "147 Birch Ave, San Antonio, TX 78201",
    insuranceType: "Dental Insurance",
    insuranceProvider: "Guardian",
    notes: "Family plan approved.",
  },
  {
    id: "8",
    applicationNo: "APP-2024-008",
    name: "Amanda Taylor",
    email: "a.taylor@email.com",
    phoneNumber: "+1 234 567 8908",
    status: "In Progress",
    dateSubmitted: "2024-03-08",
    address: "258 Walnut St, San Diego, CA 92101",
    insuranceType: "Health Insurance",
    insuranceProvider: "United Healthcare",
    notes: "Waiting for verification.",
  },
  {
    id: "9",
    applicationNo: "APP-2024-009",
    name: "Robert Thomas",
    email: "r.thomas@email.com",
    phoneNumber: "+1 234 567 8909",
    status: "Approved",
    dateSubmitted: "2024-03-07",
    address: "369 Spruce Rd, Dallas, TX 75201",
    insuranceType: "Vision Insurance",
    insuranceProvider: "EyeMed",
    notes: "",
  },
  {
    id: "10",
    applicationNo: "APP-2024-010",
    name: "Lisa Garcia",
    email: "l.garcia@email.com",
    phoneNumber: "+1 234 567 8910",
    status: "Pending",
    dateSubmitted: "2024-03-06",
    address: "741 Ash Blvd, San Jose, CA 95101",
    insuranceType: "Health Insurance",
    insuranceProvider: "Kaiser Permanente",
    notes: "New applicant.",
  },
  {
    id: "11",
    applicationNo: "APP-2024-011",
    name: "James Moore",
    email: "j.moore@email.com",
    phoneNumber: "+1 234 567 8911",
    status: "Rejected",
    dateSubmitted: "2024-03-05",
    address: "852 Cherry Dr, Austin, TX 78701",
    insuranceType: "Life Insurance",
    insuranceProvider: "Prudential",
    notes: "Does not meet eligibility criteria.",
  },
  {
    id: "12",
    applicationNo: "APP-2024-012",
    name: "Patricia Lee",
    email: "p.lee@email.com",
    phoneNumber: "+1 234 567 8912",
    status: "Approved",
    dateSubmitted: "2024-03-04",
    address: "963 Poplar Ave, Jacksonville, FL 32099",
    insuranceType: "Dental Insurance",
    insuranceProvider: "Humana",
    notes: "Individual plan.",
  },
];

const ApplicationsPage = () => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setDetailsModalOpen(true);
  };

  return (
    <div className="p-4 sm:p-6">
      <ApplicationsTable
        applications={mockApplications}
        onViewDetails={handleViewDetails}
      />

      <ApplicationDetailsModal
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        application={selectedApplication}
      />
    </div>
  );
};

export default ApplicationsPage;
