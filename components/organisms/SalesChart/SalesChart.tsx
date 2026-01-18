"use client";

import React from "react";
import { SalesData } from "@/data/salesData";
import { BarChart } from "@/components/organisms/BarChart/BarChart";
import { LineChart } from "@/components/organisms/LineChart/LineChart";
import { PieChart } from "@/components/organisms/PieChart/PieChart";
import { ChartType } from "@/components/molecules/ChartTypeSelector/ChartTypeSelector";

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  threshold?: number;
}

export const SalesChart: React.FC<SalesChartProps> = ({
  data,
  chartType,
  threshold = 0,
}) => {
  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <BarChart data={data} threshold={threshold} />;
      case "line":
        return <LineChart data={data} threshold={threshold} />;
      case "pie":
        return <PieChart data={data} threshold={threshold} />;
      default:
        return <BarChart data={data} threshold={threshold} />;
    }
  };

  return <div className="w-full">{renderChart()}</div>;
};

