"use client";

import React from "react";
import { Button } from "@/components/atoms/Button/Button";

export type ChartType = "bar" | "line" | "pie";

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const chartTypes: { type: ChartType; label: string }[] = [
    { type: "bar", label: "Bar Chart" },
    { type: "line", label: "Line Chart" },
    { type: "pie", label: "Pie Chart" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {chartTypes.map(({ type, label }) => (
        <Button
          key={type}
          onClick={() => onTypeChange(type)}
          variant={selectedType === type ? "primary" : "outline"}
          isActive={selectedType === type}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

