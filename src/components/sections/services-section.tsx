import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Характеристики
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Полные технические данные</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              title: "Дисплей",
              description: "LCD 2448×2448 пикс. на каждый глаз · 90 Гц · угол обзора 120° · IPD 57–72 мм",
              direction: "top",
            },
            {
              title: "Производительность",
              description: "Snapdragon XR2 · RAM 8 ГБ · Хранилище 128 ГБ · Wi-Fi 6 · Bluetooth 5.0",
              direction: "right",
            },
            {
              title: "Отслеживание",
              description: "Inside-out 6DoF · 4 камеры · Eye-tracking встроенный · Обнаружение рук без контроллеров",
              direction: "left",
            },
            {
              title: "Питание и вес",
              description: "Аккумулятор 26,6 Вт·ч · до 2 часов (снимаемый, быстрая замена) · вес 785 г",
              direction: "bottom",
            },
            {
              title: "Контроллеры",
              description: "6DoF · время работы 15+ часов · зарядка USB-C · защита от ударов · ремень на запястье",
              direction: "top",
            },
            {
              title: "Подключение",
              description: "USB-C 3.2 · Wi-Fi 6 (802.11ax) · Bluetooth 5.0 · Vive Streaming PC (DisplayPort через кабель)",
              direction: "right",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
