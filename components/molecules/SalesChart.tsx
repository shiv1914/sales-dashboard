import { BarChart, LineChart, PieChart, XAxis, YAxis, Tooltip, Bar, Line, Pie, Cell } from 'recharts';
import { salesData } from '@/data/salesData';

type Props = {
  year: number;
  chartType: string;
  threshold: number;
};

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function SalesChart({ year, chartType, threshold }: Props) {
  const data = salesData[year].filter((item) => item.sales > threshold);

  if (chartType === 'Bar') {
    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    );
  }

  if (chartType === 'Line') {
    return (
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    );
  }

  if (chartType === 'Pie') {
    return (
      <PieChart width={600} height={300}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="month"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
  
}
