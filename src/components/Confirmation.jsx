import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Confirmation({ seatNumber, onRebook }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div>
        <h2 className="text-[24px] md:text-[26px] font-bold text-[#1C1C1E]">Seat confirmed</h2>
        <p className="mt-2 text-[16px] text-[#1C1C1E]/70">Thanks for confirming. Enjoy your meal!</p>

        <div className="mt-6 rounded-2xl bg-white border border-[#E5E7EB] p-6 text-center">
          <div className="text-[14px] text-[#1C1C1E]/60">Your seat number</div>
          <div className="mt-1 text-[32px] font-extrabold text-[#0057FF]">{seatNumber}</div>
          <p className="mt-3 text-[16px] text-[#1C1C1E]">Thank you for choosing us!</p>
        </div>

        <div className="mt-8">
          <p className="text-[16px] font-medium text-[#1C1C1E] mb-3">Rate your experience</p>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const idx = i + 1;
              const active = (hover || rating) >= idx;
              return (
                <button
                  key={idx}
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(idx)}
                  aria-label={`Rate ${idx} star`}
                  className="p-2"
                >
                  <Star size={28} className={active ? 'fill-[#FFD54F] text-[#FFD54F]' : 'text-[#BDBDBD]'} />
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[14px] text-[#1C1C1E]/60">Tap a star to rate. {rating > 0 ? `You rated ${rating}/5` : ''}</p>
        </div>
      </div>

      <button
        onClick={onRebook}
        className="mt-10 w-full rounded-xl py-4 text-[16px] font-semibold text-white bg-[#0057FF] hover:brightness-95"
      >
        Re-book a seat
      </button>
    </div>
  );
}
