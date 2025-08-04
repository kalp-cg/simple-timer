function TimerDisplay({ time, isCountdown }) {
  // Format time into hours, minutes, seconds and milliseconds
  const formatTime = () => {
    const hours = Math.floor((time / 3600000) % 24);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      milliseconds: String(milliseconds).padStart(2, "0")
    };
  };

  const { hours, minutes, seconds, milliseconds } = formatTime();

  return (
    <div className="text-center mb-8 select-none">
      <div className="flex justify-center items-center space-x-1 md:space-x-2 text-4xl md:text-5xl font-mono font-semibold">
        <div className="flex flex-col items-center">
          <span className={`bg-gray-50 px-3 py-3 rounded-lg shadow-inner border ${isCountdown ? 'border-red-100' : 'border-blue-100'} transition-all`}>
            {hours}
          </span>
          <span className="text-xs text-gray-600 mt-1 font-sans">HOURS</span>
        </div>
        <span className="text-gray-400">:</span>
        <div className="flex flex-col items-center">
          <span className={`bg-gray-50 px-3 py-3 rounded-lg shadow-inner border ${isCountdown ? 'border-red-100' : 'border-blue-100'} transition-all`}>
            {minutes}
          </span>
          <span className="text-xs text-gray-600 mt-1 font-sans">MIN</span>
        </div>
        <span className="text-gray-400">:</span>
        <div className="flex flex-col items-center">
          <span className={`bg-gray-50 px-3 py-3 rounded-lg shadow-inner border ${isCountdown ? 'border-red-100' : 'border-blue-100'} transition-all`}>
            {seconds}
          </span>
          <span className="text-xs text-gray-600 mt-1 font-sans">SEC</span>
        </div>
        <span className="text-gray-400">:</span>
        <div className="flex flex-col items-center">
          <span className={`bg-gray-50 px-3 py-3 rounded-lg shadow-inner border ${isCountdown ? 'border-red-100' : 'border-blue-100'} transition-all`}>
            {milliseconds}
          </span>
          <span className="text-xs text-gray-600 mt-1 font-sans">MS</span>
        </div>
      </div>
    </div>
  );
}

export default TimerDisplay;