import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container max-w-3xl mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center gap-8 md:gap-12 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          {/* Avatar */}
          <div className="shrink-0">
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px]">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar with initials */}
                  <span className="text-3xl md:text-4xl font-bold gradient-text">
                    АВ
                  </span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-50" />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <h2
              className={cn(
                "text-xl md:text-2xl font-bold mb-4 opacity-0",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: "150ms" }}
            >
              <span className="gradient-text">Android-разработчик</span>
            </h2>

            <p
              className={cn(
                "text-base md:text-lg text-muted-foreground leading-relaxed opacity-0",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: "300ms" }}
            >
              Я разработчик мобильных{" "}
              <span className="text-foreground font-medium">Android-приложений</span>. 
              Делаю удобные и понятные продукты. Работаю напрямую{" "}
              <span className="text-primary">по предоплате</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-neon-purple/3 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default AboutSection;
