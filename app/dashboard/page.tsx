"use client";

import React, { useState, useMemo } from "react";
import { Card } from "@/components/atoms/Card/Card";
import { SalesFilter } from "@/components/molecules/SalesFilter/SalesFilter";
import { ChartTypeSelector, ChartType } from "@/components/molecules/ChartTypeSelector/ChartTypeSelector";
import { YearSelector } from "@/components/organisms/YearSelector/YearSelector";
import { SalesChart } from "@/components/organisms/SalesChart/SalesChart";
import {
  yearlySalesData,
  getSalesByYear,
} from "@/data/salesData";

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);

  const availableYears = yearlySalesData.map((y) => y.year);
  const selectedYearData = yearlySalesData.find((y) => y.year === selectedYear);
  const salesData = useMemo(
    () => getSalesByYear(selectedYear),
    [selectedYear]
  );

  const filteredDataCount = salesData.filter(
    (item) => item.sales >= threshold
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
              ANALYTICS DASHBOARD
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Sales Dashboard
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Analyze sales performance across different years and visualize data
            with interactive charts
          </p>
        </div>

        {/* Year Selector */}
        <Card className="mb-6 bg-gradient-to-br from-white to-blue-50/30">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Select Year
            </h2>
            <YearSelector
              selectedYear={selectedYear}
              availableYears={availableYears}
              onYearChange={setSelectedYear}
            />
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="relative overflow-hidden group border-l-4 border-l-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Sales ({selectedYear})</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${selectedYearData?.total.toLocaleString() || 0}
              </div>
            </div>
          </Card>
          <Card className="relative overflow-hidden group border-l-4 border-l-purple-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Average Monthly Sales</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                $
                {selectedYearData
                  ? Math.round(selectedYearData.total / 12).toLocaleString()
                  : 0}
              </div>
            </div>
          </Card>
          <Card className="relative overflow-hidden group border-l-4 border-l-green-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Months Above Threshold</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {filteredDataCount} / {salesData.length}
              </div>
            </div>
          </Card>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-white to-indigo-50/30">
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-indigo-700 bg-clip-text text-transparent">
              Chart Type
            </h2>
            <ChartTypeSelector
              selectedType={chartType}
              onTypeChange={setChartType}
            />
          </Card>

          <Card className="bg-gradient-to-br from-white to-purple-50/30">
            <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-purple-700 bg-clip-text text-transparent">
              Filter Options
            </h2>
            <SalesFilter
              threshold={threshold}
              onThresholdChange={setThreshold}
            />
          </Card>
        </div>

        {/* Chart */}
        <Card className="bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-indigo-700 bg-clip-text text-transparent">
              Sales Data Visualization - {selectedYear}
            </h2>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <span className="text-xs text-gray-500 font-medium">Live Data</span>
            </div>
          </div>
          <SalesChart
            data={salesData}
            chartType={chartType}
            threshold={threshold}
          />
        </Card>

        {/* Footer Info */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Data visualization showing monthly sales for <span className="font-bold text-gray-700">{selectedYear}</span>. Use the
            filters above to customize your view.
          </p>
        </div>
      </div>
    </div>
  );
}

