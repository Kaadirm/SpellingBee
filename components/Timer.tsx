// components/Timer.tsx
'use client';

import { useEffect } from 'react';

interface TimerProps {
    letters: string[];
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ letters, time, setTime }) => {
    useEffect(() => {
        if (time > 0 && letters && letters.length > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [letters, time, setTime]);

    return (
        <div>
            <h2 className="text-2xl text-red-500">Time: {time}s</h2>
        </div>
    );
};

export default Timer;
