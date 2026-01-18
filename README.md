# Sales Dashboard Application

A modern, interactive sales analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. This application demonstrates atomic design principles and provides comprehensive sales data visualization for multiple years.

## 🚀 Features

### Core Functionality
- **Multi-Year Sales Data**: View sales data for 2022, 2023, and 2024
- **Interactive Charts**: Switch between Bar, Line, and Pie chart visualizations
- **Custom Filtering**: Set custom sales threshold to filter data dynamically
- **Real-time Updates**: All filters and selections update charts in real-time
- **Responsive Design**: Fully responsive layout that works on all devices

### Technical Features
- **Atomic Design Structure**: Organized component hierarchy (atoms → molecules → organisms)
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, utility-first styling
- **Recharts Integration**: Professional chart library for data visualization
- **Next.js 15**: Latest Next.js features with App Router

## 📁 Project Structure

```
sales-dashboard-app/
├── app/
│   ├── dashboard/          # Dashboard page
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── atoms/              # Basic building blocks
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Input/
│   ├── molecules/          # Simple component combinations
│   │   ├── ChartTypeSelector/
│   │   └── SalesFilter/
│   └── organisms/          # Complex components
│       ├── BarChart/
│       ├── LineChart/
│       ├── PieChart/
│       ├── SalesChart/
│       └── YearSelector/
├── data/
│   └── salesData.ts        # Mock sales data
└── public/                 # Static assets
```

## 🏗️ Atomic Design Principles

This project follows atomic design methodology:

1. **Atoms**: Basic UI elements (Button, Input, Card)
2. **Molecules**: Simple combinations of atoms (ChartTypeSelector, SalesFilter)
3. **Organisms**: Complex components (Charts, YearSelector)
4. **Templates**: Page layouts (Dashboard page)
5. **Pages**: Complete views (Home, Dashboard)

## 📊 Data Structure

The application uses mock sales data inspired by Kaggle datasets:

- **2022**: 12 months of sales data (Total: $2,299,000)
- **2023**: 12 months of sales data (Total: $2,572,000)
- **2024**: 12 months of sales data (Total: $2,812,000)

Each data point includes:
- Month abbreviation (Jan-Dec)
- Sales amount in USD
- Year

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sales-dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Usage

### Dashboard Features

1. **Year Selection**: Click on year buttons (2022, 2023, 2024) to view sales for that year
2. **Chart Type**: Switch between Bar, Line, and Pie charts using the chart type buttons
3. **Sales Threshold**: Enter a minimum sales amount to filter out months below that threshold
4. **Statistics**: View total sales, average monthly sales, and filtered month count

### Example Workflows

- **View 2024 sales as a line chart**: Select 2024 → Click "Line Chart"
- **Filter high-performing months**: Set threshold to $200,000 → View filtered results
- **Compare visualizations**: Switch between chart types to see different perspectives

## 🧩 Components Overview

### Atoms
- **Button**: Reusable button component with variants (primary, secondary, outline)
- **Input**: Form input with label support
- **Card**: Container component for grouping content

### Molecules
- **ChartTypeSelector**: Toggle buttons for selecting chart type
- **SalesFilter**: Input field for setting sales threshold

### Organisms
- **BarChart**: Bar chart visualization using Recharts
- **LineChart**: Line chart with smooth curves
- **PieChart**: Pie chart with color-coded segments
- **SalesChart**: Wrapper component that renders the selected chart type
- **YearSelector**: Year selection buttons

## 🔧 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library built on React and D3
- **React 19**: Latest React features

## 📈 Future Enhancements

The following enhancements are suggested for further development:

1. **API Integration**: Replace mock data with real API calls
2. **Multiple Datasets**: Add support for different product categories or regions
3. **Export Functionality**: Allow users to export charts as images or PDFs
4. **Date Range Selection**: Add custom date range picker
5. **Comparison Mode**: Compare sales across multiple years simultaneously
6. **Advanced Filters**: Add filters for regions, products, or sales representatives
7. **Dark Mode**: Implement dark theme toggle
8. **Animations**: Add smooth transitions and loading states

## 📝 Development Notes

### Adding New Chart Types

1. Create a new chart component in `components/organisms/`
2. Add the chart type to `ChartType` in `ChartTypeSelector`
3. Update `SalesChart` to include the new chart type in the switch statement

### Adding New Years

1. Add sales data to `data/salesData.ts`
2. Include the new year in the `yearlySalesData` array
3. The dashboard will automatically include it in year selection

### Styling

All styling uses Tailwind CSS utility classes. Custom styles can be added to `app/globals.css` if needed.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Built as a demonstration of modern web development practices with Next.js, TypeScript, and atomic design principles.

---

**Note**: This application uses mock data. For production use, integrate with a real data source or API.
