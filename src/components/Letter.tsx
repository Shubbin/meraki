import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const paragraphs = [
  "There's a particular kind of quietness that people often mistake for absence. Yours isn't that. Yours is the kind that arrives early, sets the room at ease, and notices things long before anyone else thinks to look.",
  "I've watched people meet you and form a first impression in seconds — careful, polite, a little reserved. And I've quietly enjoyed knowing how wrong they are. How much they're missing. How much there is to find, slowly, in the right kind of light.",
  "The humor that only shows up after midnight. The opinions that arrive softly, then refuse to leave. The way you design things — and conversations, and rooms, and silences — like every detail is a decision you've already made twice.",
  "If anyone deserves a year that is gentler than the last, slower where it should be slow, and warmer where it should be warm — it's you. May the people in this year see you the way the people closest to you already do.",
  "Happy birthday, Tinker Bell. The quiet one with the loud heart.",
];

function TypewriterParagraph({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setShown((n) => {
          if (n >= text.length) {
            clearInterval(interval);
            return n;
          }
          return n + 2;
        });
      }, 18);
    }, delay * 1000);
    return () => clearTimeout(start);
  }, [inView, text.length, delay]);

  return (
    <p ref={ref} className="font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
      {text.slice(0, shown)}
      {shown < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="ml-0.5 inline-block"
          style={{ color: "var(--beige)" }}
        >
          |
        </motion.span>
      )}
    </p>
  );
}

export function Letter() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="ambient-glow animate-ambient pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <p
            className="tracking-cinematic mb-6 text-center text-xs uppercase"
            style={{ color: "var(--beige)" }}
          >
            chapter four — a letter
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-center text-4xl leading-[1.05] text-balance italic md:text-5xl lg:text-6xl">
            For the quiet one,
            <span className="block not-italic text-foreground/70">written slowly.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="divider-soft mx-auto mt-16 mb-16 w-32" />
        </Reveal>

        <div className="space-y-10">
          {paragraphs.map((p, i) => (
            <TypewriterParagraph key={i} text={p} delay={i * 0.4} />
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-right">
            <p className="font-serif text-lg italic" style={{ color: "var(--beige)" }}>
              — with quiet admiration
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
