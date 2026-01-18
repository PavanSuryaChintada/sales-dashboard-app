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
  "#6366f1", // indigo
  "#8b5cf6", // purple
  "#ec4899", // pink
  "#f59e0b", // amber
  "#10b981", // emerald
  "#ef4444", // red
  "#06b6d4", // cyan
  "#84cc16", // lime
  "#f97316", // orange
  "#3b82f6", // blue
  "#14b8a6", // teal
  "#a855f7", // violet
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
          stroke="#fff"
          strokeWidth={2}
        >
          {filteredData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number | undefined) => `$${(value || 0).toLocaleString()}`}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
          labelStyle={{ color: "#1e293b", fontWeight: 600 }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="circle"
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

