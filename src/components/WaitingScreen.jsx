import { useEffect, useState } from 'react';

export default function WaitingScreen({ position = 3, onSeatAssigned }) {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate seat assignment when timer reaches 0
    if (seconds === 0) {
      const seatNumber = Math.floor(1 + Math.random() * 30);
      onSeatAssigned?.(seatNumber);
    }
  }, [seconds, onSeatAssigned]);

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div>
        <h2 className="text-[24px] md:text-[26px] font-bold text-[#1C1C1E]">You're in the queue</h2>
        <p className="mt-2 text-[16px] text-[#1C1C1E]/70">
          Thanks! You’ve been added. We’ll notify you when a seat is ready.
        </p>

        <div className="mt-8 rounded-2xl bg-white border border-[#E5E7EB] p-6">
          <div className="text-center">
            <div className="text-[#0057FF] text-[22px] font-bold">{seconds > 0 ? `${seconds}s` : 'You are next!'}</div>
            <div className="mt-1 text-[14px] text-[#1C1C1E]/70">Estimated wait</div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#F9F9F9] p-4 text-center">
              <div className="text-[22px] font-bold text-[#1C1C1E]">{position}</div>
              <div className="text-[14px] text-[#1C1C1E]/70">People ahead</div>
            </div>
            <div className="rounded-xl bg-[#F9F9F9] p-4 text-center">
              <div className="text-[22px] font-bold text-[#1C1C1E]">{Math.max(1, Math.ceil(position / 2))}</div>
              <div className="text-[14px] text-[#1C1C1E]/70">Parties ahead</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-[#1C1C1E]/60 text-[14px]">Keep this page open. We’ll assign a seat automatically.</p>
    </div>
  );
}
