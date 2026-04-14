import { useReveal } from "@/hooks/use-reveal"

const HERO_IMG = "https://cdn.poehali.dev/projects/c6927ff6-2aa3-4593-aebe-593640cfebd3/files/3bd27922-e752-43a4-8544-de8bba48c350.jpg"
const CONTROLLERS_IMG = "https://cdn.poehali.dev/projects/c6927ff6-2aa3-4593-aebe-593640cfebd3/files/180945f0-eeb7-4b0b-bdb8-60770869e757.jpg"
const BOX_IMG = "https://cdn.poehali.dev/projects/c6927ff6-2aa3-4593-aebe-593640cfebd3/files/97710c14-8842-4b93-8bb3-986622fbfe75.jpg"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Галерея
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Устройство и комплект поставки</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              img: HERO_IMG,
              title: "HTC Vive Focus 3",
              label: "Основной шлем",
              desc: "Автономный VR-шлем с дисплеем 2448×2448 на каждый глаз и углом обзора 120°",
              direction: "top",
            },
            {
              img: CONTROLLERS_IMG,
              title: "Vive Focus 3 Controllers",
              label: "Контроллеры",
              desc: "Эргономичные контроллеры с защитным запястным ремнём и временем работы 15+ часов",
              direction: "bottom",
            },
            {
              img: BOX_IMG,
              title: "Комплект поставки",
              label: "В коробке",
              desc: "Шлем, 2 контроллера, зарядное устройство, кабели, ремни и документация",
              direction: "top",
            },
          ].map((item, i) => (
            <GalleryCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  item,
  index,
  isVisible,
}: {
  item: { img: string; title: string; label: string; desc: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "top" ? "-translate-y-16 opacity-0" : "translate-y-16 opacity-0"
    }
    return "translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/10 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="mb-1 font-mono text-xs text-foreground/50">{item.label}</p>
        <h3 className="mb-2 font-sans text-lg font-light text-foreground md:text-xl">{item.title}</h3>
        <p className="text-sm leading-relaxed text-foreground/70">{item.desc}</p>
      </div>
    </div>
  )
}
