type Props = {
  type: string;
  setType: (val: string) => void;
};

export default function ChartTypeToggle({ type, setType }: Props) {
  return (
    <div className="flex gap-2">
      {['Bar', 'Line', 'Pie'].map(chart => (
        <button
          key={chart}
          className={`px-4 py-1 rounded ${type === chart ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setType(chart)}
        >
          {chart}
        </button>
      ))}
    </div>
  );
}
