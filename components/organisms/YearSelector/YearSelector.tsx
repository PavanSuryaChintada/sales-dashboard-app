"use client";

import React from "react";
import { Button } from "@/components/atoms/Button/Button";

interface YearSelectorProps {
  selectedYear: number;
  availableYears: number[];
  onYearChange: (year: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({
  selectedYear,
  availableYears,
  onYearChange,
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {availableYears.map((year) => (
        <Button
          key={year}
          onClick={() => onYearChange(year)}
          variant={selectedYear === year ? "primary" : "outline"}
          isActive={selectedYear === year}
        >
          {year}
        </Button>
      ))}
    </div>
  );
};

