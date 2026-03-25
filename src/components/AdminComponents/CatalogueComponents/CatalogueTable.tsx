/** @format */
"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { Pencil, Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export interface Product {
  id: string;
  name: string;
  category: string;
  status: boolean;
  image: string;
}

interface CatalogueTableProps {
  products: Product[];
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (product: Product) => void;
  onToggleStatus: (product: Product) => void;
}

const ProductImage = () => {
  return (
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <Package className="w-6 h-6 text-primary" />
    </div>
  );
};

const CatalogueTable = ({
  products,
  onEditProduct,
  onDeleteProduct,
  onToggleStatus,
}: CatalogueTableProps) => {
  const columns = [
    {
      header: "Product Name",
      accessor: (row: Product) => (
        <div className="flex items-center gap-3">
          <ProductImage />
          <span className="font-medium text-foreground">{row.name}</span>
        </div>
      ),
    },
    {
      header: "Category",
      accessor: "category" as keyof Product,
    },
    {
      header: "Status",
      accessor: (row: Product) => (
        <div className="flex items-center gap-2">
          <Switch
            checked={row.status}
            onCheckedChange={() => onToggleStatus(row)}
          />
          <span
            className={`text-sm ${row.status ? "text-green-600" : "text-muted-foreground"}`}
          >
            {row.status ? "Active" : "Inactive"}
          </span>
        </div>
      ),
    },
  ];

  return (
    <CustomTable
      data={products}
      columns={columns}
      title="Catalogue"
      actionColumn={{
        header: "Actions",
        render: (row: Product) => (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onEditProduct(row)}
              className="hover:bg-primary/10 text-primary"
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onDeleteProduct(row)}
              className="hover:bg-destructive/10 text-destructive"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ),
      }}
    />
  );
};

export default CatalogueTable;
