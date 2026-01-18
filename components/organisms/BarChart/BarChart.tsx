"use client";

import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesData } from "@/data/salesData";

interface BarChartProps {
  data: SalesData[];
  threshold?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter((item) => item.sales >= threshold);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={1}/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
        <XAxis 
          dataKey="month" 
          tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
          axisLine={{ stroke: "#cbd5e1" }}
        />
        <YAxis 
          tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
          axisLine={{ stroke: "#cbd5e1" }}
        />
        <Tooltip
          formatter={(value: number | undefined) => `$${(value || 0).toLocaleString()}`}
          labelStyle={{ color: "#1e293b", fontWeight: 600 }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend 
          wrapperStyle={{ paddingTop: "20px" }}
          iconType="circle"
        />
        <Bar 
          dataKey="sales" 
          fill="url(#colorGradient)" 
          name="Sales ($)"
          radius={[8, 8, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

