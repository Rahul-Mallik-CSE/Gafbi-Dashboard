/** @format */
"use client";

import React, { useState } from "react";
import CatalogueTable, {
  type Product,
} from "@/components/AdminComponents/CatalogueComponents/CatalogueTable";
import EditProductModal from "@/components/AdminComponents/CatalogueComponents/EditProductModal";
import DeleteProductModal from "@/components/AdminComponents/CatalogueComponents/DeleteProductModal";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Vitamin D3 Supplements",
    category: "Vitamins",
    status: true,
    image: "/products/vitamin-d3.jpg",
  },
  {
    id: "2",
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    status: true,
    image: "/products/omega3.jpg",
  },
  {
    id: "3",
    name: "Multivitamin Complex",
    category: "Vitamins",
    status: false,
    image: "/products/multivitamin.jpg",
  },
  {
    id: "4",
    name: "Protein Powder",
    category: "Nutrition",
    status: true,
    image: "/products/protein.jpg",
  },
  {
    id: "5",
    name: "Calcium Tablets",
    category: "Minerals",
    status: true,
    image: "/products/calcium.jpg",
  },
  {
    id: "6",
    name: "Probiotic Capsules",
    category: "Digestive Health",
    status: false,
    image: "/products/probiotic.jpg",
  },
  {
    id: "7",
    name: "Iron Supplements",
    category: "Minerals",
    status: true,
    image: "/products/iron.jpg",
  },
  {
    id: "8",
    name: "Vitamin C Tablets",
    category: "Vitamins",
    status: true,
    image: "/products/vitamin-c.jpg",
  },
  {
    id: "9",
    name: "Zinc Lozenges",
    category: "Minerals",
    status: true,
    image: "/products/zinc.jpg",
  },
  {
    id: "10",
    name: "Collagen Peptides",
    category: "Beauty",
    status: false,
    image: "/products/collagen.jpg",
  },
  {
    id: "11",
    name: "B-Complex Vitamins",
    category: "Vitamins",
    status: true,
    image: "/products/b-complex.jpg",
  },
  {
    id: "12",
    name: "Magnesium Citrate",
    category: "Minerals",
    status: true,
    image: "/products/magnesium.jpg",
  },
];

const CataloguePage = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDeleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const handleToggleStatus = (product: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, status: !p.status } : p)),
    );
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
    );
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <CatalogueTable
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        onToggleStatus={handleToggleStatus}
      />

      <EditProductModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />

      <DeleteProductModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        product={selectedProduct}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default CataloguePage;
