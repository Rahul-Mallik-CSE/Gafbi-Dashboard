/** @format */
"use client";

import React from "react";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { Order } from "./OrdersTable";

interface OrderDetailsProps {
  order: Order;
}

const ItemImage = () => {
  return (
    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
      <Package className="w-8 h-8 text-primary" />
    </div>
  );
};

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="hover:bg-muted"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-semibold text-foreground">
          Order Details
        </h1>
      </div>

      <div className="bg-card rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium text-foreground">{order.orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Customer Name</p>
              <p className="font-medium text-foreground">
                {order.customerName}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">{order.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium text-foreground">{order.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <span
                className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Payment Method</p>
              <p className="font-medium text-foreground">
                {order.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Shipping Address</p>
          <p className="font-medium text-foreground">{order.shippingAddress}</p>
        </div>
      </div>

      <div className="bg-card rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Order Items
        </h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-muted rounded-lg"
            >
              <div className="flex items-center gap-4">
                <ItemImage />
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">Total</span>
            <span className="text-xl font-bold text-primary">
              ${order.total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
