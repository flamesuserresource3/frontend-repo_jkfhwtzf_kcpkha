import { useState, useEffect } from 'react';

export default function JoinQueueForm({ onJoin }) {
  const [partySize, setPartySize] = useState('');
  const [willingToSplit, setWillingToSplit] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const valid = Number(partySize) > 0 && Number.isInteger(Number(partySize));
    setCanSubmit(valid);
  }, [partySize]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    onJoin({ partySize: Number(partySize), willingToSplit });
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div>
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#1C1C1E] leading-tight">
          Join the queue
        </h1>
        <p className="mt-2 text-[16px] text-[#1C1C1E]/70">
          Tell us your party size. We’ll find the best seating for you.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-[16px] font-medium text-[#1C1C1E] mb-2">
              Number of people
            </label>
            <input
              type="number"
              min={1}
              inputMode="numeric"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              placeholder="e.g., 3"
              className="w-full rounded-xl border border-[#BDBDBD] bg-white px-4 py-3 text-[16px] text-[#1C1C1E] placeholder:text-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#0057FF]"
            />
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#1C1C1E] mb-3">
              Willing to split the party?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white cursor-pointer select-none">
                <input
                  type="radio"
                  name="split"
                  checked={!willingToSplit}
                  onChange={() => setWillingToSplit(false)}
                  className="h-4 w-4 text-[#0057FF]"
                />
                <span className="text-[16px] text-[#1C1C1E]">No, keep us together</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white cursor-pointer select-none">
                <input
                  type="radio"
                  name="split"
                  checked={willingToSplit}
                  onChange={() => setWillingToSplit(true)}
                  className="h-4 w-4 text-[#0057FF]"
                />
                <span className="text-[16px] text-[#1C1C1E]">Yes, we’re okay to split</span>
              </label>
            </div>
          </div>
        </form>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`mt-10 w-full rounded-xl py-4 text-[16px] font-semibold text-white transition-colors ${
          canSubmit ? 'bg-[#28C76F] hover:brightness-95' : 'bg-[#BDBDBD] cursor-not-allowed'
        }`}
      >
        Join Queue
      </button>
    </div>
  );
}
