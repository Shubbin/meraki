import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { Reveal } from "./Reveal";
import videoSrc from "@/assets/finale-video.mp4";

export function Finale() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
      <div className="ambient-glow animate-ambient absolute inset-0" />
      
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <Particles count={28} />

      {/* Slow rotating soft halo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--beige) 8%, transparent), transparent, color-mix(in oklab, var(--lavender) 6%, transparent), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p
            className="tracking-cinematic mb-10 text-xs uppercase"
            style={{ color: "var(--beige)" }}
          >
            fin
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif text-2xl leading-relaxed text-balance text-foreground/85 italic md:text-4xl lg:text-5xl">
            The more I got to know you, the more I realized how much depth exists beneath your
            quietness.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="divider-soft mx-auto mt-20 mb-20 w-48" />
        </Reveal>

        <Reveal delay={0.7}>
          <h2 className="font-serif text-5xl leading-tight text-foreground text-shadow-glow md:text-7xl lg:text-8xl">
            Happy Birthday,
          </h2>
        </Reveal>
        <Reveal delay={0.9}>
          <p
            className="font-serif mt-4 text-5xl italic md:text-7xl lg:text-8xl"
            style={{ color: "var(--beige)" }}
          >
            Meraki.
          </p>
        </Reveal>
        <Reveal delay={1.1}>
          <p className="tracking-cinematic mt-6 text-xs text-muted-foreground/60 uppercase">
            Bakare Mujisat
          </p>
        </Reveal>

        <Reveal delay={1.2}>
          <p className="tracking-cinematic mt-24 text-[10px] text-muted-foreground uppercase">
            crafted slowly · with quiet care
          </p>
        </Reveal>
      </div>
    </section>
  );
}
