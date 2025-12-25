import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Rocket, Package, Wrench } from "lucide-react";

const prices = [
  {
    icon: Rocket,
    title: "Минимальный проект",
    price: "от 15 000 ₽",
    description: "MVP или простое приложение",
  },
  {
    icon: Package,
    title: "Приложение под ключ",
    price: "от 50 000 ₽",
    description: "Полный цикл разработки",
  },
  {
    icon: Wrench,
    title: "Доработка",
    price: "от 5 000 ₽",
    description: "Улучшение существующего приложения",
  },
];

const PricingSection = () => {
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
      <div className="container max-w-5xl mx-auto">
        <h2
          className={cn(
            "text-2xl md:text-4xl font-bold mb-12 text-center opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <span className="text-foreground">Стоимость </span>
          <span className="gradient-text">разработки</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prices.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 opacity-0",
                isVisible && "animate-fade-up"
              )}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:neon-glow-sm transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                
                <p className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                  {item.price}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-red/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default PricingSection;
