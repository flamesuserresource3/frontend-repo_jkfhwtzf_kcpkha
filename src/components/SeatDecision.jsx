export default function SeatDecision({ seatNumber, onConfirm, onMoreTime }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div>
        <h2 className="text-[24px] md:text-[26px] font-bold text-[#1C1C1E]">Seat assigned</h2>
        <p className="mt-2 text-[16px] text-[#1C1C1E]/70">We’ve reserved a seat for your party.</p>

        <div className="mt-6 rounded-2xl bg-white border border-[#E5E7EB] p-6 text-center">
          <div className="text-[14px] text-[#1C1C1E]/60">Your seat number</div>
          <div className="mt-1 text-[32px] font-extrabold text-[#0057FF]">{seatNumber}</div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={onConfirm}
            className="w-full rounded-xl bg-[#28C76F] py-4 text-white font-semibold hover:brightness-95"
          >
            Confirm Seat
          </button>
          <button
            onClick={onMoreTime}
            className="w-full rounded-xl bg-[#FF9F0A] py-4 text-white font-semibold hover:brightness-95"
          >
            I need more time
          </button>
        </div>
      </div>

      <p className="text-center text-[#1C1C1E]/60 text-[14px]">If you need extra time, we’ll hold your seat briefly.</p>
    </div>
  );
}
