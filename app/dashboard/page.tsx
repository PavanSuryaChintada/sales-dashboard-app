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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sales Dashboard
          </h1>
          <p className="text-gray-600">
            Analyze sales performance across different years and visualize data
            with interactive charts
          </p>
        </div>

        {/* Year Selector */}
        <Card className="mb-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <div className="text-sm text-gray-600 mb-1">Total Sales ({selectedYear})</div>
            <div className="text-3xl font-bold text-gray-900">
              ${selectedYearData?.total.toLocaleString() || 0}
            </div>
          </Card>
          <Card>
            <div className="text-sm text-gray-600 mb-1">Average Monthly Sales</div>
            <div className="text-3xl font-bold text-gray-900">
              $
              {selectedYearData
                ? Math.round(selectedYearData.total / 12).toLocaleString()
                : 0}
            </div>
          </Card>
          <Card>
            <div className="text-sm text-gray-600 mb-1">Months Above Threshold</div>
            <div className="text-3xl font-bold text-gray-900">
              {filteredDataCount} / {salesData.length}
            </div>
          </Card>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Chart Type
            </h2>
            <ChartTypeSelector
              selectedType={chartType}
              onTypeChange={setChartType}
            />
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filter Options
            </h2>
            <SalesFilter
              threshold={threshold}
              onThresholdChange={setThreshold}
            />
          </Card>
        </div>

        {/* Chart */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales Data Visualization - {selectedYear}
          </h2>
          <SalesChart
            data={salesData}
            chartType={chartType}
            threshold={threshold}
          />
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Data visualization showing monthly sales for {selectedYear}. Use the
            filters above to customize your view.
          </p>
        </div>
      </div>
    </div>
  );
}

