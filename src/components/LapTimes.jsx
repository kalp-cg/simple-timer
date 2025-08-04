function LapTimes({ laps, isCountdown }) {
  // Format time into minutes, seconds and milliseconds
  const formatTime = (time) => {
    const hours = Math.floor((time / 3600000) % 24);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return `${hours > 0 ? `${String(hours).padStart(2, "0")}:` : ''}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Lap Times</h3>
      <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden max-h-40 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-3 text-left font-medium">#</th>
              <th className="py-2 px-3 text-left font-medium">Time</th>
              {!isCountdown && laps.length > 1 && (
                <th className="py-2 px-3 text-left font-medium">+/-</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {laps.map((lap, index) => {
              let difference = null;
              if (!isCountdown && index > 0) {
                difference = lap.time - laps[index - 1].time;
              }
              
              return (
                <tr key={lap.number} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-2 px-3 font-mono">{lap.number}</td>
                  <td className="py-2 px-3 font-mono">{formatTime(lap.time)}</td>
                  {!isCountdown && laps.length > 1 && (
                    <td className="py-2 px-3 font-mono">
                      {index > 0 && (
                        <span className={difference >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {difference >= 0 ? '+' : '-'}{formatTime(Math.abs(difference))}
                        </span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LapTimes;