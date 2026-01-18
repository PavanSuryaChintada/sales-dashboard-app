"use client";

import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SalesData } from "@/data/salesData";

interface LineChartProps {
  data: SalesData[];
  threshold?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  threshold = 0,
}) => {
  const filteredData = data.filter((item) => item.sales >= threshold);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#3b82f6"/>
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
          iconType="line"
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="url(#lineGradient)"
          strokeWidth={3}
          name="Sales ($)"
          dot={{ fill: "#6366f1", r: 6, strokeWidth: 2, stroke: "#fff" }}
          activeDot={{ r: 8, stroke: "#6366f1", strokeWidth: 2 }}
          strokeDasharray="0"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

