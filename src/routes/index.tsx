import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "../assets/hero.jpg";
import coffeeImg from "../assets/coffee.jpg";
import atmosphereImg from "../assets/atmosphere.jpg";
import menuImg from "../assets/menu.jpg";
import logoImg from "../assets/logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { href: "#za-nas", label: "За нас" },
  { href: "#meni", label: "Мени" },
  { href: "#atmosfera", label: "Атмосфера" },
  { href: "#nastani", label: "Настани" },
  { href: "#kontakt", label: "Контакт" },
];

const menuSections = [
  {
    title: "Кафе",
    items: [
      { name: "Еспресо", desc: "Класичен, кратко печен, со густа крема", price: "70" },
      { name: "Макијато", desc: "Еспресо со капка топло млеко", price: "80" },
      { name: "Капучино", desc: "Свилкаста млечна пена, какао на врвот", price: "110" },
      { name: "Лате со книга", desc: "Двојно еспресо, ванила, додаток мала книга за позајмување", price: "140" },
      { name: "Турско кафе", desc: "Сварено бавно, послужено со локум", price: "90" },
    ],
  },
  {
    title: "Вино и коктели",
    items: [
      { name: "Вранец, чаша", desc: "Тиквеш, селекција на куќата", price: "180" },
      { name: "Темјаника, чаша", desc: "Свежо, ароматично, бело", price: "180" },
      { name: "Негрони", desc: "Џин, кампари, црвен вермут", price: "260" },
      { name: "Стариот фашион", desc: "Бурбон, шеќер, ангостура, портокал", price: "280" },
    ],
  },
  {
    title: "Послужување",
    items: [
      { name: "Кроасан со бадем", desc: "Печен секое утро", price: "120" },
      { name: "Чизкејк на куќата", desc: "Со сос од шумски плодови", price: "180" },
      { name: "Маслинки и сирење", desc: "Локални сирења, маслинки, мед", price: "320" },
    ],
  },
];

const events = [
  { date: "12 Јуни", title: "Книжевна вечер: Лидија Димковска", desc: "Читање, разговор и потпишување книги." },
  { date: "19 Јуни", title: "Џез трио ‘Вардар’", desc: "Акустично вечерно сетување, два сета." },
  { date: "26 Јуни", title: "Отворен микрофон — поезија", desc: "Донеси текст, прочитај, остани на вино." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b hairline"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={logoImg} alt="Читална" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl md:text-2xl tracking-tight">Читална</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/70 hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center text-sm border hairline px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Резервирај маса
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Читална — внатрешност со книги и кафе"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-32 pt-32 w-full">
          <p className="text-[oklch(0.85_0.05_75)] text-xs md:text-sm uppercase tracking-[0.3em] mb-6">
            Од 2008 · Скопје
          </p>
          <h1 className="font-serif text-[oklch(0.97_0.012_85)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl">
            Каде кафето <em className="font-light italic text-[oklch(0.85_0.1_75)]">го прелистува</em> денот.
          </h1>
          <p className="mt-8 max-w-xl text-[oklch(0.92_0.02_80)]/90 text-base md:text-lg leading-relaxed font-light">
            Читална е културен кафе бар во срцето на градот — место за кафе наутро, разговор попладне и чаша вино меѓу страниците навечер.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#meni"
              className="inline-flex items-center gap-2 bg-[oklch(0.97_0.012_85)] text-[oklch(0.18_0.018_40)] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[oklch(0.85_0.1_75)] transition-colors"
            >
              Погледни го менито
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="za-nas" className="py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">За нас</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              Мала соба, <em className="italic text-[oklch(0.55_0.12_50)]">долги</em> приказни.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80 font-light">
            <p>
              Читална почна како тивок агол со полица книги, шанк и неколку столчиња. Низ годините стана едно од омилените места во Скопје — место каде писатели го пишуваат следниот пасус, пријатели се среќаваат по работа, а странци стануваат познаници меѓу две кафиња.
            </p>
            <p>
              Кафето го печеме самите. Виното го избираме од мали македонски визби. Книгите се ваши — позајмете, читајте, вратете, оставете нова.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t hairline">
              <div>
                <div className="font-serif text-3xl md:text-4xl">16</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">години</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">1,200+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">книги</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">∞</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">разговори</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-7 aspect-[4/5] overflow-hidden rounded-sm">
            <img src={coffeeImg} alt="Кафе и книга" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.2s]" />
          </div>
          <div className="col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="aspect-square overflow-hidden rounded-sm">
              <img src={menuImg} alt="Послужување" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.2s]" />
            </div>
            <div className="flex-1 bg-primary text-primary-foreground p-8 md:p-10 rounded-sm flex flex-col justify-between min-h-[220px]">
              <p className="font-serif text-2xl md:text-3xl italic leading-snug">
                „Дојди по кафе. Остани заради тишината.“
              </p>
              <p className="text-xs uppercase tracking-[0.25em] opacity-70 mt-6">
                — гостин, мај 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="meni" className="py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Мени</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">Што се служи денес.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Цените се во денари. Менито се менува сезонски — следната верзија пристигнува со есента.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-serif text-2xl mb-8 pb-4 border-b hairline">{section.title}</h3>
                <ul className="space-y-7">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-lg">{item.name}</span>
                        <span className="flex-1 border-b border-dotted border-foreground/20 translate-y-[-4px]" />
                        <span className="font-sans text-sm tabular-nums text-foreground/80">{item.price} ден</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1.5 font-light leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE FULL BLEED */}
      <section id="atmosfera" className="relative h-[80vh] md:h-screen overflow-hidden">
        <img src={atmosphereImg} alt="Вечерна атмосфера во Читална" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-6 md:px-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl text-[oklch(0.97_0.012_85)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.1_75)] mb-6">Атмосфера</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Светлина од ќандил, шум од прелистани страници.
              </h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-[oklch(0.95_0.02_80)]/90">
                Низ денот — мирно место за работа и читање. По зајдисонце — топла дневна соба со музика на ниско, вино во рака и луѓе кои знаат како да молчат заедно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="nastani" className="py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Што следува</p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-2xl">
              Настани во Читална.
            </h2>
          </div>
          <ul className="divide-y hairline border-t border-b hairline">
            {events.map((e) => (
              <li key={e.title} className="py-8 md:py-10 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline group">
                <div className="md:col-span-2 font-serif text-xl md:text-2xl text-[oklch(0.55_0.12_50)]">{e.date}</div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-2xl md:text-3xl">{e.title}</h3>
                  <p className="text-muted-foreground mt-2 font-light">{e.desc}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a href="#kontakt" className="text-sm border-b hairline pb-0.5 hover:text-[oklch(0.55_0.12_50)] transition-colors">
                    Резервирај место →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="bg-primary text-primary-foreground py-24 md:py-40 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">Посета</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95]">
              Најди не. <em className="italic opacity-80">Остани</em> подолго.
            </h2>
            <p className="mt-8 font-light text-lg opacity-80 max-w-md leading-relaxed">
              Резервации правиме по телефон или преку порака на Facebook. За поголеми групи и приватни настани — јавете се претходно.
            </p>
          </div>
          <div className="md:col-span-6 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-60 mb-2">Адреса</p>
              <p className="font-serif text-2xl">ул. Македонија бр. 00, Скопје</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-60 mb-2">Работно време</p>
                <p className="font-light leading-relaxed">
                  Пон – Чет · 08—24<br />
                  Пет – Саб · 08—02<br />
                  Недела · 10—24
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] opacity-60 mb-2">Контакт</p>
                <p className="font-light leading-relaxed">
                  <a href="tel:+38900000000" className="hover:opacity-100 opacity-90 block">+389 00 000 000</a>
                  <a href="https://www.facebook.com/KafeBarCitalna/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-90 block">Facebook</a>
                </p>
              </div>
            </div>
            <a
              href="https://www.facebook.com/KafeBarCitalna/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[oklch(0.97_0.012_85)] text-[oklch(0.18_0.018_40)] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[oklch(0.85_0.1_75)] transition-colors mt-4"
            >
              Резервирај маса
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-10 border-t hairline">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Читална" className="h-8 w-8 object-contain" />
            <span className="font-serif text-base text-foreground">Читална</span>
          </div>
          <p>© {new Date().getFullYear()} Кафе Бар Читална · Скопје</p>
        </div>
      </footer>
    </div>
  );
}
