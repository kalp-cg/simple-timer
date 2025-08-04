import { useState, useEffect, useRef } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import TimerPresets from './components/TimerPresets';
import LapTimes from './components/LapTimes';
import TimerMode from './components/TimerMode';

function App() {
  const [time, setTime] = useState(0);
  const [countdownTime, setCountdownTime] = useState(60000); // 1 minute default
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [isCountdown, setIsCountdown] = useState(false);
  const audioContextRef = useRef(null);

  // Initialize audio context
  useEffect(() => {
    // Initialize audio context on first user interaction
    const handleFirstInteraction = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      window.removeEventListener('click', handleFirstInteraction);
    };
    
    window.addEventListener('click', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        if (isCountdown) {
          setCountdownTime((prevTime) => {
            if (prevTime <= 10) {
              clearInterval(interval);
              setIsRunning(false);
              playAlarmSound();
              return 0;
            }
            return prevTime - 10;
          });
        } else {
          setTime((prevTime) => prevTime + 10);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, isCountdown]);

  const playAlarmSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.01);
    
    oscillator.start(ctx.currentTime);
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime + 0.3);
    oscillator.frequency.setValueAtTime(800, ctx.currentTime + 0.6);
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime + 0.9);
    
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    oscillator.stop(ctx.currentTime + 1.5);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (isCountdown) {
      setCountdownTime(60000); // Reset to default 1 minute
    } else {
      setTime(0);
    }
    setLaps([]);
  };

  const handleLap = () => {
    const currentLap = isCountdown ? countdownTime : time;
    const lapNumber = laps.length + 1;
    setLaps([...laps, { number: lapNumber, time: currentLap }]);
  };

  const handleModeChange = (mode) => {
    setIsRunning(false);
    setIsCountdown(mode === 'countdown');
    if (mode === 'countdown') {
      setCountdownTime(60000);
    } else {
      setTime(0);
    }
    setLaps([]);
  };

  const handlePresetSelect = (presetTime) => {
    if (isCountdown) {
      setCountdownTime(presetTime);
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 md:p-6">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-md w-full animate-in fade-in duration-700 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Advanced Timer
        </h1>
        
        <TimerMode 
          isCountdown={isCountdown} 
          onModeChange={handleModeChange} 
        />
        
        <TimerDisplay 
          time={isCountdown ? countdownTime : time} 
          isCountdown={isCountdown}
        />
        
        {isCountdown && (
          <TimerPresets onPresetSelect={handlePresetSelect} />
        )}
        
        <TimerControls 
          isRunning={isRunning} 
          onStart={handleStart} 
          onStop={handleStop} 
          onReset={handleReset}
          onLap={handleLap}
          disableLap={laps.length >= 10} // Limit to 10 laps
        />
        
        {laps.length > 0 && <LapTimes laps={laps} isCountdown={isCountdown} />}
      </div>
    </div>
  );
}

export default App;