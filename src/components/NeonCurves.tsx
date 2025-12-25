const NeonCurves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top curve - purple */}
      <svg
        className="absolute top-0 left-0 w-full h-[400px] animate-curve-move"
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(270, 91%, 65%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-100,200 Q300,100 600,180 T1200,120 T1600,200"
          stroke="url(#purpleGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glowPurple)"
        />
      </svg>

      {/* Bottom curve - red/pink */}
      <svg
        className="absolute top-[200px] left-0 w-full h-[400px] animate-curve-move"
        style={{ animationDelay: '-10s' }}
        viewBox="0 0 1440 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 84%, 60%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(330, 80%, 55%)" stopOpacity="0.5" />
            <stop offset="60%" stopColor="hsl(0, 84%, 60%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(0, 84%, 60%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glowRed" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-100,250 Q400,180 700,220 T1100,160 T1600,240"
          stroke="url(#redGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glowRed)"
        />
      </svg>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[120px]" />
    </div>
  );
};

export default NeonCurves;
