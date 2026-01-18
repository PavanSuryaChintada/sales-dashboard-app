// Mock sales data for 2022, 2023, 2024
// Data inspired by Kaggle sales datasets

export interface SalesData {
  month: string;
  sales: number;
  year: number;
}

export interface YearlySales {
  year: number;
  data: SalesData[];
  total: number;
}

// Monthly sales data for 2022
const sales2022: SalesData[] = [
  { month: "Jan", sales: 125000, year: 2022 },
  { month: "Feb", sales: 142000, year: 2022 },
  { month: "Mar", sales: 138000, year: 2022 },
  { month: "Apr", sales: 165000, year: 2022 },
  { month: "May", sales: 178000, year: 2022 },
  { month: "Jun", sales: 192000, year: 2022 },
  { month: "Jul", sales: 205000, year: 2022 },
  { month: "Aug", sales: 198000, year: 2022 },
  { month: "Sep", sales: 215000, year: 2022 },
  { month: "Oct", sales: 228000, year: 2022 },
  { month: "Nov", sales: 245000, year: 2022 },
  { month: "Dec", sales: 268000, year: 2022 },
];

// Monthly sales data for 2023
const sales2023: SalesData[] = [
  { month: "Jan", sales: 145000, year: 2023 },
  { month: "Feb", sales: 158000, year: 2023 },
  { month: "Mar", sales: 165000, year: 2023 },
  { month: "Apr", sales: 182000, year: 2023 },
  { month: "May", sales: 195000, year: 2023 },
  { month: "Jun", sales: 208000, year: 2023 },
  { month: "Jul", sales: 225000, year: 2023 },
  { month: "Aug", sales: 218000, year: 2023 },
  { month: "Sep", sales: 235000, year: 2023 },
  { month: "Oct", sales: 248000, year: 2023 },
  { month: "Nov", sales: 265000, year: 2023 },
  { month: "Dec", sales: 288000, year: 2023 },
];

// Monthly sales data for 2024
const sales2024: SalesData[] = [
  { month: "Jan", sales: 165000, year: 2024 },
  { month: "Feb", sales: 178000, year: 2024 },
  { month: "Mar", sales: 185000, year: 2024 },
  { month: "Apr", sales: 202000, year: 2024 },
  { month: "May", sales: 215000, year: 2024 },
  { month: "Jun", sales: 228000, year: 2024 },
  { month: "Jul", sales: 245000, year: 2024 },
  { month: "Aug", sales: 238000, year: 2024 },
  { month: "Sep", sales: 255000, year: 2024 },
  { month: "Oct", sales: 268000, year: 2024 },
  { month: "Nov", sales: 285000, year: 2024 },
  { month: "Dec", sales: 308000, year: 2024 },
];

// Calculate totals
const calculateTotal = (data: SalesData[]): number => {
  return data.reduce((sum, item) => sum + item.sales, 0);
};

export const yearlySalesData: YearlySales[] = [
  {
    year: 2022,
    data: sales2022,
    total: calculateTotal(sales2022),
  },
  {
    year: 2023,
    data: sales2023,
    total: calculateTotal(sales2023),
  },
  {
    year: 2024,
    data: sales2024,
    total: calculateTotal(sales2024),
  },
];

// Get all sales data combined
export const getAllSalesData = (): SalesData[] => {
  return [...sales2022, ...sales2023, ...sales2024];
};

// Get sales data for a specific year
export const getSalesByYear = (year: number): SalesData[] => {
  const yearData = yearlySalesData.find((y) => y.year === year);
  return yearData ? yearData.data : [];
};

