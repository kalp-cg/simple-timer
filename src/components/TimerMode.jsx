function TimerMode({ isCountdown, onModeChange }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-gray-100 p-1 rounded-md flex w-full max-w-xs">
        <button
          className={`flex-1 py-2 px-4 rounded transition-all font-medium ${!isCountdown 
            ? 'bg-white shadow-sm text-blue-700' 
            : 'text-gray-600 hover:bg-gray-200'}`}
          onClick={() => onModeChange('stopwatch')}
        >
          Stopwatch
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded transition-all font-medium ${isCountdown 
            ? 'bg-white shadow-sm text-red-700' 
            : 'text-gray-600 hover:bg-gray-200'}`}
          onClick={() => onModeChange('countdown')}
        >
          Countdown
        </button>
      </div>
    </div>
  );
}

export default TimerMode;