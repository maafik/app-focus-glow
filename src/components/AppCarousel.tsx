import PhoneMockup from "./PhoneMockup";
import appFitness from "@/assets/app-fitness.jpg";
import appDelivery from "@/assets/app-delivery.jpg";
import appTasks from "@/assets/app-tasks.jpg";
import appFinance from "@/assets/app-finance.jpg";

const apps = [
  {
    id: 1,
    appName: "FitTrack",
    appType: "Фитнес-приложение",
    description: "Тренировки и отслеживание прогресса\nДля активных пользователей",
    platform: "Android App",
    imageUrl: appFitness,
  },
  {
    id: 2,
    appName: "DeliverEats",
    appType: "Доставка еды",
    description: "Заказ и доставка за 30 минут\nДля ресторанов и кафе",
    platform: "Android App",
    imageUrl: appDelivery,
  },
  {
    id: 3,
    appName: "TaskFlow",
    appType: "Бизнес-приложение",
    description: "Управление задачами и командой\nДля малого бизнеса",
    platform: "Android App",
    imageUrl: appTasks,
  },
  {
    id: 4,
    appName: "EcoWallet",
    appType: "Финансы",
    description: "Учёт расходов и накоплений\nДля персональных финансов",
    platform: "Android App",
    imageUrl: appFinance,
  },
];

interface AppCarouselProps {
  activeIndex: number;
}

const AppCarousel = ({ activeIndex }: AppCarouselProps) => {
  const getPosition = (index: number): 'far-left' | 'left' | 'center' | 'right' | 'far-right' => {
    const diff = index - activeIndex;
    if (diff === 0) return 'center';
    if (diff === -1 || (activeIndex === 0 && index === apps.length - 1)) return 'left';
    if (diff === 1 || (activeIndex === apps.length - 1 && index === 0)) return 'right';
    if (diff < -1) return 'far-left';
    return 'far-right';
  };

  return (
    <div className="relative h-[500px] md:h-[600px] perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        {apps.map((app, index) => (
          <PhoneMockup
            key={app.id}
            {...app}
            isActive={index === activeIndex}
            position={getPosition(index)}
          />
        ))}
      </div>
    </div>
  );
};

export { apps };
export default AppCarousel;
