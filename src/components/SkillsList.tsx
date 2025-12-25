import { cn } from "@/lib/utils";

const skills = [
  "Разработка Android-приложений",
  "UI/UX дизайн мобильных интерфейсов",
  "Интеграция платежей и сервисов",
  "Публикация в RuStore / Google Play",
  "Поддержка и развитие приложений",
];

interface SkillsListProps {
  activeIndex: number;
}

const SkillsList = ({ activeIndex }: SkillsListProps) => {
  // Map carousel index to skill index (cycle through skills)
  const activeSkillIndex = activeIndex % skills.length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-foreground">Что я умею в </span>
        <span className="gradient-text">мобильной разработке:</span>
      </h2>
      
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-3 text-base md:text-lg transition-all duration-500",
              index === activeSkillIndex
                ? "text-foreground translate-x-2"
                : "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-500",
                index === activeSkillIndex
                  ? "bg-primary neon-glow-sm scale-125"
                  : "bg-muted-foreground/50"
              )}
            />
            <span className={cn(
              "transition-all duration-500",
              index === activeSkillIndex && "neon-text"
            )}>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
