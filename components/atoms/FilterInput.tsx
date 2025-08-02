type Props = {
  threshold: number;
  onChange: (val: number) => void;
};

export default function FilterInput({ threshold, onChange }: Props) {
  return (
    <input
      type="number"
      placeholder="Filter sales >"
      className="border p-2 rounded"
      value={threshold}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}
