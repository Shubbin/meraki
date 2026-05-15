import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { IntroScreen } from "@/components/IntroScreen";
import { Hero } from "@/components/Hero";
import { HiddenSides } from "@/components/HiddenSides";
import { MemoryFragments } from "@/components/MemoryFragments";
import { Letter } from "@/components/Letter";
import { Finale } from "@/components/Finale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Tinker Bell — A Quiet Birthday" },
      {
        name: "description",
        content:
          "A cinematic, intimate birthday letter for someone whose depth is felt long before it's seen.",
      },
      { property: "og:title", content: "For Tinker Bell — A Quiet Birthday" },
      {
        property: "og:description",
        content: "Some people are loud enough to be noticed. Others are quiet enough to be understood.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
