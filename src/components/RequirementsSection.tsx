import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FileText, Clock, Image } from "lucide-react";

const requirements = [
  {
    icon: FileText,
    text: "Техническое задание или описание идеи",
  },
  {
    icon: Clock,
    text: "Сроки и приоритеты",
  },
  {
    icon: Image,
    text: "Референсы, если есть",
  },
];

const RequirementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2
          className={cn(
            "text-2xl md:text-4xl font-bold mb-10 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <span className="text-foreground">Что нужно для </span>
          <span className="gradient-text">проекта</span>
        </h2>

        <div className="space-y-6">
          {requirements.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-4 opacity-0",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-base md:text-lg text-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-10 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm opacity-0",
            isVisible && "animate-fade-up"
          )}
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            <span className="text-primary font-medium">Если ТЗ нет</span> — помогу
            составить. Также могу{" "}
            <span className="text-primary font-medium">дорабатывать готовые приложения</span>.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default RequirementsSection;
