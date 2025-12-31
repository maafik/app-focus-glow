import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Shield, Lock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    text: "Работа по предоплате",
    highlight: "предоплате",
  },
  {
    icon: Lock,
    text: "Прозрачные условия и фиксированная цена",
    highlight: "фиксированная цена",
  },
  {
    icon: CheckCircle,
    text: "Гарантия результата и поддержка",
    highlight: "Гарантия результата",
  },
];

const SafeDealSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate through features on scroll visibility
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= features.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isVisible]);

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary neon-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Shield graphic */}
          <div
            className={cn(
              "flex justify-center opacity-0",
              isVisible && "animate-fade-up"
            )}
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center animate-pulse-glow">
                <Shield className="w-20 h-20 md:w-28 md:h-28 text-primary" />
              </div>
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full neon-glow-sm" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-secondary rounded-full" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2
              className={cn(
                "text-2xl md:text-4xl font-bold mb-8 opacity-0",
                isVisible && "animate-fade-up"
              )}
            >
              <span className="text-foreground">Как я </span>
              <span className="gradient-text">работаю</span>
            </h2>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500",
                    activeIndex >= index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                      activeIndex >= index
                        ? "bg-primary/20 border border-primary/40"
                        : "bg-card border border-border"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5 transition-colors duration-500",
                        activeIndex >= index ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <p className="text-base md:text-lg text-foreground">
                    {activeIndex >= index
                      ? highlightText(item.text, item.highlight)
                      : item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[130px] -z-10" />
    </section>
  );
};

export default SafeDealSection;
