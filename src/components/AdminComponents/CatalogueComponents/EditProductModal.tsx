/** @format */
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Product } from "./CatalogueTable";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSave: (product: Product) => void;
}

interface FormData {
  name: string;
  category: string;
  status: boolean;
}

const EditProductModalContent = ({
  product,
  onClose,
  onSave,
}: {
  product: Product;
  onClose: () => void;
  onSave: (product: Product) => void;
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: product.name,
    category: product.category,
    status: product.status,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...product,
      ...formData,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="productName">Product Name</Label>
        <Input
          id="productName"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter product name"
          className="bg-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          placeholder="Enter category"
          className="bg-input"
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="status">Status</Label>
        <div className="flex items-center gap-2">
          <Switch
            id="status"
            checked={formData.status}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, status: checked })
            }
          />
          <span
            className={`text-sm ${formData.status ? "text-green-600" : "text-muted-foreground"}`}
          >
            {formData.status ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      <DialogFooter className="gap-2 sm:gap-0">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>
  );
};

const EditProductModal = ({
  isOpen,
  onClose,
  product,
  onSave,
}: EditProductModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Edit Product
          </DialogTitle>
        </DialogHeader>

        {product && (
          <EditProductModalContent
            product={product}
            onClose={onClose}
            onSave={onSave}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
