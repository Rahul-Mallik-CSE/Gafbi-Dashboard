/** @format */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { Button } from "@/components/ui/button";

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  date: string;
  status: string;
  items: OrderItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  const router = useRouter();

  const columns = [
    {
      header: "Order Number",
      accessor: "orderNumber" as keyof Order,
      className: "font-medium",
    },
    {
      header: "Name",
      accessor: "customerName" as keyof Order,
    },
    {
      header: "Email",
      accessor: "email" as keyof Order,
    },
    {
      header: "Date",
      accessor: "date" as keyof Order,
    },
    {
      header: "Status",
      accessor: "status" as keyof Order,
    },
  ];

  const handleViewDetails = (order: Order) => {
    router.push(`/admin/orders/${order.id}`);
  };

  return (
    <CustomTable
      data={orders}
      columns={columns}
      title="Orders"
      actionColumn={{
        header: "Actions",
        render: (row: Order) => (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleViewDetails(row)}
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        ),
      }}
    />
  );
};

export default OrdersTable;
