'use client';
import { useState } from 'react';
import YearSelector from '../atoms/YearSelector';
import ChartTypeToggle from '../atoms/ChartTypeToggle';
import FilterInput from '../atoms/FilterInput';
import SalesChart from '../molecules/SalesChart';

export default function DashboardContainer() {
  const [year, setYear] = useState(2024);
  const [chartType, setChartType] = useState('Bar');
  const [threshold, setThreshold] = useState(0);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      <div className="flex gap-4">
        <YearSelector selectedYear={year} onChange={setYear} />
        <ChartTypeToggle type={chartType} setType={setChartType} />
        <FilterInput threshold={threshold} onChange={setThreshold} />
      </div>
      <SalesChart year={year} chartType={chartType} threshold={threshold} />
    </div>
  );
}
