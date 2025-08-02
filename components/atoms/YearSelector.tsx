type Props = {
  selectedYear: number;
  onChange: (year: number) => void;
};

export default function YearSelector({ selectedYear, onChange }: Props) {
  return (
    <select
      className="p-2 border rounded"
      value={selectedYear}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      {[2022, 2023, 2024].map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
}
