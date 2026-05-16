import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/portrait-hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={portrait}
          alt="Portrait"
          className="img-cinematic h-full w-full object-cover object-top"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
      </motion.div>

      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(13,13,13,0.85)_100%)]" />

      <motion.div
        style={{ opacity }}
        className="absolute right-0 bottom-0 left-0 px-8 pb-20 md:px-16 md:pb-28"
      >
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-cinematic mb-8 text-xs text-muted-foreground uppercase"
            style={{ color: "var(--beige)" }}
          >
            chapter one, a quiet portrait
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif max-w-3xl text-5xl leading-[1.05] text-balance text-foreground text-shadow-glow md:text-7xl lg:text-8xl"
          >
            You don't enter a room.
            <span className="mt-2 block text-foreground/70 italic">
              You let it slowly notice you.
            </span>
          </motion.h2>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="tracking-cinematic text-[10px] text-muted-foreground uppercase">
          scroll
        </span>
        <motion.span
          animate={{ height: [16, 32, 16], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px bg-foreground/40"
        />
      </div>
    </section>
  );
}
