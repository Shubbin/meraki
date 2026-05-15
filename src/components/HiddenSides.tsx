import { Reveal } from "./Reveal";

const sides = [
  {
    no: "01",
    title: "Quiet humor",
    body: "It arrives late and uninvited, in the middle of an unrelated sentence. A dry comment, a perfectly timed look, and suddenly the room has tilted half a degree warmer.",
  },
  {
    no: "02",
    title: "Calm energy",
    body: "Not the calm of someone who has nothing to say. The calm of someone who has chosen what's worth saying, and let the rest go gently.",
  },
  {
    no: "03",
    title: "The thoughtful pause",
    body: "Three seconds before you answer. Most people fill silence; you furnish it. By the time you speak, the question has already been understood.",
  },
  {
    no: "04",
    title: "Unexpectedly fun",
    body: "Around the right people, the polite version of you steps aside. What's left is funnier, sharper, more willing to be ridiculous than anyone would guess.",
  },
  {
    no: "05",
    title: "Observant by default",
    body: "You notice the small things: a changed tone, a lighter mood, a chair pulled slightly closer. You catalogue them quietly, without ever making it a performance.",
  },
  {
    no: "06",
    title: "Comfort, by presence",
    body: "Not advice. Not solutions. Just the rare gift of someone who can sit beside a bad day without trying to fix it into a good one.",
  },
];

export function HiddenSides() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <Reveal>
          <p
            className="tracking-cinematic mb-6 text-xs uppercase"
            style={{ color: "var(--beige)" }}
          >
            chapter two
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif max-w-4xl text-4xl leading-[1.08] text-balance md:text-6xl lg:text-7xl">
            The sides
            <span className="block text-foreground/60 italic">people don't see.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl leading-relaxed text-muted-foreground">
            Six small observations, gathered slowly. Not a description, more like the soft outline
            of someone seen carefully, over time.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-px bg-divider md:grid-cols-2">
          {sides.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.05}
              className="group relative bg-background p-8 transition-colors duration-700 hover:bg-surface md:p-12"
            >
              <div className="flex items-baseline gap-6">
                <span
                  className="font-serif text-sm italic"
                  style={{ color: "var(--beige)" }}
                >
                  {s.no}
                </span>
                <div className="h-px flex-1 bg-divider transition-all duration-700 group-hover:bg-foreground/30" />
              </div>
              <h3 className="font-serif mt-8 text-3xl leading-tight md:text-4xl">{s.title}</h3>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{s.body}</p>

              {/* Soft glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--beige) 6%, transparent), transparent 60%)",
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
