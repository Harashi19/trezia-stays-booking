import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Wifi,
  UtensilsCrossed,
  ShieldCheck,
  Car,
  Sparkles,
  Coffee,
  Tv,
  BedDouble,
  Wind,
  Droplets,
} from "lucide-react";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities & Services — Trezia Apartments" },
      {
        name: "description",
        content:
          "Discover the comforts at Trezia Apartments Zvishavane — complimentary high-speed Wi-Fi, hand-prepared meals, 24/7 security, secure parking and more.",
      },
      { property: "og:title", content: "Amenities & Services — Trezia Apartments" },
      {
        property: "og:description",
        content:
          "Wi-Fi, dining, round-the-clock security and thoughtful touches that make every stay effortless.",
      },
    ],
  }),
  component: AmenitiesPage,
});

const highlights = [
  {
    icon: Wifi,
    title: "Complimentary Wi-Fi",
    blurb:
      "Fast fibre internet across every room, lounge and the garden — free for all guests, no vouchers, no time limits.",
    tag: "Always free",
  },
  {
    icon: UtensilsCrossed,
    title: "Home-Cooked Meals",
    blurb:
      "A full breakfast is included with every stay. Lunch and dinner are prepared on request from a seasonal Zimbabwean menu.",
    tag: "Breakfast included",
  },
  {
    icon: ShieldCheck,
    title: "24/7 On-Site Security",
    blurb:
      "Manned gate, perimeter lighting, CCTV and a night watchman — so you can rest easy from check-in to check-out.",
    tag: "Round the clock",
  },
];

const extras = [
  { icon: Car, title: "Secure Parking", text: "Lockable, on-property parking for every guest vehicle." },
  { icon: Coffee, title: "Tea & Coffee Bar", text: "Self-serve hot drinks station available all day." },
  { icon: Tv, title: "Smart TVs", text: "Flat-screen TVs with DStv in every room." },
  { icon: BedDouble, title: "Daily Housekeeping", text: "Fresh linen, towels and a tidy room every morning." },
  { icon: Wind, title: "Climate Control", text: "Ceiling fans and heaters tuned to Zvishavane's seasons." },
  { icon: Droplets, title: "Hot Water 24/7", text: "Backup geysers ensure a warm shower whenever you want one." },
  { icon: Sparkles, title: "Laundry Service", text: "Same-day wash, dry and press on request." },
];

const meals = [
  {
    course: "Breakfast",
    detail:
      "Farm eggs, grilled tomato, boerewors or bacon, fresh fruit, homemade bread, tea and filter coffee. Served 07:00 – 10:00.",
  },
  {
    course: "Lunch",
    detail:
      "Light plates on request — sadza & relish, grilled chicken, garden salads or a soup of the day.",
  },
  {
    course: "Dinner",
    detail:
      "Hand-prepared mains: oxtail stew, T-bone steak, butternut curry or pan-fried bream. Order before 16:00.",
  },
];

function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="eyebrow">Amenities & Services</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">
            Everything you need, <span className="italic text-brass">nothing you don't</span>.
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            Trezia Apartments is built around quiet luxury — fast Wi-Fi, warm meals and a watchful
            team — so the only thing you have to plan is your day in Zvishavane.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-brass/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="h-12 w-12 rounded-full bg-brass/10 grid place-items-center text-brass">
                  <h.icon className="h-6 w-6" />
                </span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-brass/80 border border-brass/30 rounded-full px-3 py-1">
                  {h.tag}
                </span>
              </div>
              <h2 className="mt-6 font-display text-2xl text-foreground">{h.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Meals detail */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div>
            <div className="eyebrow">The Kitchen</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Meals prepared <span className="italic text-brass">by hand</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our resident chef cooks Zimbabwean classics alongside familiar comforts. Tell us your
              preferences at check-in — vegetarian, halal or gluten-free — and we'll plate it up.
            </p>
            <Link
              to="/booking"
              className="inline-flex mt-8 px-6 py-3 rounded-full bg-brass text-primary-foreground text-sm tracking-wide hover:opacity-90 transition"
            >
              Book a stay
            </Link>
          </div>

          <ul className="divide-y divide-border border border-border rounded-2xl bg-card overflow-hidden">
            {meals.map((m) => (
              <li key={m.course} className="p-6 grid grid-cols-[120px_1fr] gap-6 items-baseline">
                <span className="font-display text-xl text-brass">{m.course}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{m.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Security band */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-brass/30 bg-gradient-to-br from-card to-background p-10 md:p-14">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <span className="h-20 w-20 rounded-full bg-brass/10 grid place-items-center text-brass shrink-0">
              <ShieldCheck className="h-10 w-10" />
            </span>
            <div>
              <div className="eyebrow">Safety First</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">
                You're in <span className="italic text-brass">safe hands</span>.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                A manned gate, full perimeter CCTV, motion-sensor lighting and a dedicated
                night-shift guard mean Trezia stays secure 24 hours a day. Reception is always
                reachable — even at 3am.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extras grid */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="eyebrow">Plus the little things</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Thoughtful <span className="italic text-brass">extras</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((e) => (
              <div
                key={e.title}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
              >
                <span className="h-10 w-10 rounded-full bg-brass/10 grid place-items-center text-brass shrink-0">
                  <e.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg text-foreground">{e.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{e.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
