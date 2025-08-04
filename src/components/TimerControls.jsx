function TimerControls({ isRunning, onStart, onStop, onReset, onLap, disableLap }) {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex justify-center space-x-3">
        {!isRunning ? (
          <button
            onClick={onStart}
            className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors shadow-sm flex-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Start
          </button>
        ) : (
          <button
            onClick={onStop}
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors shadow-sm flex-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            Stop
          </button>
        )}

        <button
          onClick={onReset}
          className="px-6 py-2.5 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition-colors shadow-sm flex-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          Reset
        </button>
      </div>

      <button
        onClick={onLap}
        disabled={!isRunning || disableLap}
        className={`px-6 py-2.5 font-medium rounded-md transition-colors shadow-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 ${
          isRunning && !disableLap 
            ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        Record Lap {disableLap && "(Max 10)"}
      </button>
    </div>
  );
}

export default TimerControls;