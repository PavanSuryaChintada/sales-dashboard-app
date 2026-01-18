"use client";

import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesData } from "@/data/salesData";

interface PieChartProps {
  data: SalesData[];
  threshold?: number;
}

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#6366f1",
  "#14b8a6",
  "#a855f7",
];

export const PieChart: React.FC<PieChartProps> = ({
  data,
  threshold = 0,
}) => {
  const filteredData = data.filter((item) => item.sales >= threshold);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Pie
          data={filteredData as any}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ month, percent }: any) =>
            `${month} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={120}
          fill="#8884d8"
          dataKey="sales"
          nameKey="month"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number | undefined) => `$${(value || 0).toLocaleString()}`}
        />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

