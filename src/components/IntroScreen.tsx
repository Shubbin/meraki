import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";

export function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 3200);
    const t2 = setTimeout(() => setStage(2), 6400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background"
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ambient-glow animate-ambient absolute inset-0" />
      <Particles count={30} />

      <div className="relative z-10 max-w-3xl px-8 text-center">
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.p
              key="quote"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-2xl leading-relaxed text-foreground/90 italic md:text-3xl lg:text-4xl"
            >
              <span className="block">Some people are loud enough to be noticed.</span>
              <span className="mt-3 block text-foreground/70">
                Others are quiet enough to be understood.
              </span>
            </motion.p>
          )}

          {stage >= 1 && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <p className="tracking-cinematic text-xs text-muted-foreground uppercase">
                for you
              </p>
              <h1 className="font-serif text-4xl leading-tight text-balance text-foreground text-shadow-glow md:text-6xl lg:text-7xl">
                Happy Birthday,
                <span className="mt-2 block italic" style={{ color: "var(--beige)" }}>
                  Meraki.
                </span>
              </h1>
              <p className="tracking-cinematic text-[10px] text-muted-foreground/60 uppercase">
                Bakare Mujisat
              </p>

              {stage >= 2 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={onEnter}
                  className="group relative mt-10 inline-flex items-center gap-4"
                >
                  <span className="tracking-cinematic text-xs text-muted-foreground uppercase transition-colors duration-700 group-hover:text-foreground">
                    Enter
                  </span>
                  <span className="block h-px w-16 bg-foreground/30 transition-all duration-700 group-hover:w-28 group-hover:bg-foreground" />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />
    </motion.div>
  );
}
