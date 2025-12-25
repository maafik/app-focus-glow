import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  appName: string;
  appType: string;
  description: string;
  platform: string;
  imageUrl: string;
  isActive: boolean;
  position: 'left' | 'center' | 'right' | 'far-left' | 'far-right';
}

const PhoneMockup = ({
  appName,
  appType,
  description,
  platform,
  imageUrl,
  isActive,
  position,
}: PhoneMockupProps) => {
  const getTransform = () => {
    switch (position) {
      case 'far-left':
        return 'translateX(-200%) scale(0.5) rotateY(35deg)';
      case 'left':
        return 'translateX(-80%) scale(0.8) rotateY(25deg)';
      case 'center':
        return 'translateX(0%) scale(1) rotateY(0deg)';
      case 'right':
        return 'translateX(80%) scale(0.8) rotateY(-25deg)';
      case 'far-right':
        return 'translateX(200%) scale(0.5) rotateY(-35deg)';
    }
  };

  const getZIndex = () => {
    switch (position) {
      case 'center': return 30;
      case 'left':
      case 'right': return 20;
      default: return 10;
    }
  };

  const getOpacity = () => {
    switch (position) {
      case 'center': return 1;
      case 'left':
      case 'right': return 0.5;
      default: return 0;
    }
  };

  return (
    <div
      className="absolute left-1/2 transition-all duration-700 ease-out preserve-3d"
      style={{
        transform: `translateX(-50%) ${getTransform()}`,
        zIndex: getZIndex(),
        opacity: getOpacity(),
        filter: position !== 'center' ? 'blur(2px)' : 'none',
      }}
    >
      {/* Phone frame */}
      <div className={cn(
        "relative w-[260px] md:w-[300px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2.5rem] p-2 transition-shadow duration-500",
        isActive && "shadow-[0_0_40px_rgba(168,85,247,0.4),0_0_80px_rgba(168,85,247,0.2)]"
      )}>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
        
        {/* Screen */}
        <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/19]">
          {/* App screenshot */}
          <img
            src={imageUrl}
            alt={appName}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          
          {/* App info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-foreground mb-1">{appName}</h3>
            <p className="text-sm font-medium text-foreground/90 mb-1">{appType}</p>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed whitespace-pre-line">{description}</p>
            <span className="inline-block text-xs font-semibold text-primary">{platform}</span>
          </div>
        </div>
      </div>

      {/* Reflection/glow effect */}
      {isActive && (
        <>
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-neon-purple/30 to-neon-red/20 blur-2xl -z-10" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-neon-purple/30 blur-xl rounded-full" />
        </>
      )}
    </div>
  );
};

export default PhoneMockup;
