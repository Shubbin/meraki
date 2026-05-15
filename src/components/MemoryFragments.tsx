import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";

type Frag = {
  src: string;
  caption: string;
  className: string;
  parallax?: number;
  w: number;
  h: number;
};

const fragments: Frag[] = [
  {
    src: m1,
    caption: "the way you hold a cup like it's thinking with you",
    className: "md:col-span-5 md:col-start-1 md:row-start-1 aspect-[4/5]",
    parallax: -40,
    w: 896,
    h: 1120,
  },
  {
    src: m4,
    caption: "you actually talk more than people think",
    className: "md:col-span-4 md:col-start-8 md:row-start-1 md:mt-32 aspect-[4/5]",
    parallax: 60,
    w: 1024,
    h: 1280,
  },
  {
    src: m2,
    caption: "the quiet ones see the most light",
    className: "md:col-span-7 md:col-start-3 md:row-start-2 md:mt-12 aspect-[4/5]",
    parallax: -30,
    w: 1120,
    h: 1400,
  },
  {
    src: m3,
    caption: "still convinced you're secretly a fairy",
    className: "md:col-span-4 md:col-start-1 md:row-start-3 aspect-[4/5]",
    parallax: 30,
    w: 896,
    h: 1120,
  },
  {
    src: m5,
    caption: "ambient — the soundtrack of being around you",
    className: "md:col-span-5 md:col-start-7 md:row-start-3 md:mt-24 aspect-[4/5]",
    parallax: -50,
    w: 1280,
    h: 1600,
  },
];

function Fragment({ frag }: { frag: Frag }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, frag.parallax ?? 0]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${frag.className}`}
    >
      <motion.div style={{ y }} className="relative h-full w-full overflow-hidden">
        <img
          src={frag.src}
          alt={frag.caption}
          width={frag.w}
          height={frag.h}
          loading="lazy"
          className="img-cinematic h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-background/10 transition-opacity duration-700 group-hover:opacity-0" />
      </motion.div>
      <figcaption className="font-serif mt-4 max-w-xs text-sm text-muted-foreground italic">
        — {frag.caption}
      </figcaption>
    </motion.figure>
  );
}

export function MemoryFragments() {
  return (
    <section className="relative py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p
            className="tracking-cinematic mb-6 text-xs uppercase"
            style={{ color: "var(--beige)" }}
          >
            chapter three
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif max-w-3xl text-4xl leading-[1.08] text-balance md:text-6xl lg:text-7xl">
            Memory
            <span className="block text-foreground/60 italic">fragments.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
            Small frames. Out of order. Each one a thing only the people closest to you would
            recognize.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {fragments.map((f, i) => (
            <Fragment key={i} frag={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
