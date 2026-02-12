import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import invitationImage from "@/assets/invitation-image.jpg";

interface LandingStateProps {
  onYes: () => void;
}

export const LandingState = ({ onYes }: LandingStateProps) => {
  const [noBtnStyle, setNoBtnStyle] = useState<React.CSSProperties>({});

  const handleNoHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Only on desktop/hover capable devices
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoBtnStyle({
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      transition: "all 0.3s ease"
    });
  };

  const handleNoClick = () => {
    toast("Nice try! Choose a different option 😉", {
      position: "top-center",
      duration: 3000
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 space-y-8 animate-fade-in relative z-10">
      <h1 className="font-serif text-4xl md:text-6xl font-bold text-lover-red drop-shadow-sm animate-float">
        Would you be my Valentine?
      </h1>

      <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
        <img

          alt="Valentine Invitation"
          className="w-full h-full object-cover" src="/lovable-uploads/73c223d8-05cb-444a-a566-26c3910e01e0.jpg" />

      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full max-w-md">
        <Button
          onClick={onYes}
          className="bg-lover-red hover:bg-red-600 text-white px-8 py-6 text-xl rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 w-full md:w-auto animate-pulse">

          Yes, I will! ❤️
        </Button>
        <Button
          variant="outline"
          onMouseEnter={handleNoHover}
          onClick={handleNoClick}
          style={noBtnStyle}
          className="border-2 border-lover-red text-lover-red hover:bg-lover-pink hover:text-lover-red px-8 py-6 text-xl rounded-full w-full md:w-auto transition-all duration-300">

          No
        </Button>
      </div>
    </div>);

};