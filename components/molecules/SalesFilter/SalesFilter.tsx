"use client";

import React from "react";
import { Input } from "@/components/atoms/Input/Input";

interface SalesFilterProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export const SalesFilter: React.FC<SalesFilterProps> = ({
  threshold,
  onThresholdChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onThresholdChange(value);
  };

  return (
    <div className="w-full max-w-xs">
      <Input
        type="number"
        label="Sales Threshold Filter"
        placeholder="Enter minimum sales amount"
        value={threshold}
        onChange={handleChange}
      />
      <p className="mt-2 text-sm text-gray-500">
        Show only months with sales above ${threshold.toLocaleString()}
      </p>
    </div>
  );
};

