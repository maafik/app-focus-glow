import { useEffect, useRef, useState } from "react";
import AppCarousel, { apps } from "./AppCarousel";
import SkillsList from "./SkillsList";

const AppsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much we've scrolled into the section
      const scrolledIntoSection = viewportHeight - sectionTop;
      const totalScrollableDistance = sectionHeight;
      
      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / totalScrollableDistance));
      
      // Map progress to app index
      const newIndex = Math.min(
        apps.length - 1,
        Math.floor(progress * apps.length * 0.8)
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] py-20"
    >
      {/* Sticky container */}
      <div className="sticky top-0 min-h-screen flex items-center py-12">
        <div className="container px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Skills list - Left side */}
            <div className="order-2 lg:order-1 lg:pl-8">
              <SkillsList activeIndex={activeIndex} />
            </div>

            {/* Carousel - Right side */}
            <div className="order-1 lg:order-2">
              <AppCarousel activeIndex={activeIndex} />
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {apps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to app ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-red/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default AppsSection;
