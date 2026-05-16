import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { Hero } from "./components/Hero";
import { HiddenSides } from "./components/HiddenSides";
import { MemoryFragments } from "./components/MemoryFragments";
import { Letter } from "./components/Letter";
import { Finale } from "./components/Finale";

export default function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
  }, [entered]);

  return (
    <main className="grain relative min-h-screen bg-background">
      <AnimatePresence>
        {!entered && <IntroScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <Hero />
      <HiddenSides />
      <MemoryFragments />
      <Letter />
      <Finale />
    </main>
  );
}
