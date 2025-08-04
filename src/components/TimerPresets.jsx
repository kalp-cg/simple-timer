function TimerPresets({ onPresetSelect }) {
  const presets = [
    { label: '1m', value: 60000 },
    { label: '3m', value: 180000 },
    { label: '5m', value: 300000 },
    { label: '10m', value: 600000 },
    { label: '30m', value: 1800000 },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Presets</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onPresetSelect(preset.value)}
            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
          >
            {preset.label}
          </button>
        ))}
        <button
          onClick={() => onPresetSelect(3600000)}
          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        >
          1h
        </button>
      </div>
    </div>
  );
}

export default TimerPresets;