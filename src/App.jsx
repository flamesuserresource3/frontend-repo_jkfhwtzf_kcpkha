import { useMemo, useState } from 'react';
import JoinQueueForm from './components/JoinQueueForm';
import WaitingScreen from './components/WaitingScreen';
import SeatDecision from './components/SeatDecision';
import Confirmation from './components/Confirmation';

function Container({ children }) {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1C1C1E]">
      <header className="px-6 py-5 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-[#0057FF]">BlueQueue</h1>
          <span className="text-[14px] text-[#1C1C1E]/60">Hotel Seating</span>
        </div>
      </header>
      <main className="px-6 py-8">
        <div className="max-w-xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="px-6 py-6 border-t border-[#E5E7EB] bg-white">
        <div className="max-w-xl mx-auto text-[12px] text-[#1C1C1E]/50">Fast, clear, and trustworthy queueing experience.</div>
      </footer>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState('form'); // form -> waiting -> decision -> done
  const [position, setPosition] = useState(3);
  const [seatNumber, setSeatNumber] = useState(null);
  const brandStyles = useMemo(() => ({
    // reserved for potential theming
  }), []);

  const handleJoin = ({ partySize, willingToSplit }) => {
    // Simulate queue position based on party size
    setPosition(Math.max(1, 6 - partySize));
    setStage('waiting');
  };

  const handleSeatAssigned = (seatNo) => {
    setSeatNumber(seatNo);
    setStage('decision');
  };

  const handleConfirm = () => {
    setStage('done');
  };

  const handleMoreTime = () => {
    // Give user more time and go back to waiting with shorter timer via key change
    setPosition((p) => Math.max(1, p - 1));
    setStage('waiting');
  };

  const handleRebook = () => {
    setStage('form');
    setSeatNumber(null);
    setPosition(3);
  };

  return (
    <Container styles={brandStyles}>
      {stage === 'form' && (
        <JoinQueueForm onJoin={handleJoin} />
      )}

      {stage === 'waiting' && (
        <WaitingScreen position={position} onSeatAssigned={handleSeatAssigned} />
      )}

      {stage === 'decision' && (
        <SeatDecision seatNumber={seatNumber} onConfirm={handleConfirm} onMoreTime={handleMoreTime} />
      )}

      {stage === 'done' && (
        <Confirmation seatNumber={seatNumber} onRebook={handleRebook} />
      )}
    </Container>
  );
}
