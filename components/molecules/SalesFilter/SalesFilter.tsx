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
      <p className="mt-3 text-sm font-medium text-gray-600 bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">
        Show only months with sales above <span className="font-bold text-gray-700">${threshold.toLocaleString()}</span>
      </p>
    </div>
  );
};

