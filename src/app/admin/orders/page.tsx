/** @format */
"use client";

import React from "react";
import OrdersTable from "@/components/AdminComponents/OrdersComponents/OrdersTable";
import { mockOrders } from "@/data/mockOrders";

const OrdersPage = () => {
  return (
    <div className="p-4 sm:p-6">
      <OrdersTable orders={mockOrders} />
    </div>
  );
};

export default OrdersPage;
