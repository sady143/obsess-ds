import { useState } from "react";
import {
  ObsBadge,
  ObsButton,
  ObsGridContainer,
  ObsGridOverlay,
  ObsSiteMasthead,
  ObsSonnerToaster,
  ObsToaster,
  ObsTooltipProvider,
  useObsBreakpoint,
} from "@sady143/obsess-ds";
import { Grid3X3 } from "lucide-react";
import { FoundationsSection } from "./sections/FoundationsSection";
import { InputsAndLayoutSection } from "./sections/InputsAndLayoutSection";
import { OverlaysAndDataSection } from "./sections/OverlaysAndDataSection";

const NAV_LINKS = [
  { href: "#grid", label: "Grid" },
  { href: "#colors", label: "Colors" },
  { href: "#typography", label: "Type" },
  { href: "#patterns", label: "Patterns" },
  { href: "#actions", label: "Actions" },
  { href: "#inputs", label: "Inputs" },
  { href: "#layout", label: "Surfaces" },
  { href: "#navigation", label: "Menus" },
  { href: "#overlays", label: "Overlays" },
  { href: "#feedback", label: "Feedback" },
  { href: "#data", label: "Data" },
];

export function App() {
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const bp = useObsBreakpoint();

  return (
    <ObsTooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ObsGridOverlay visible={showGridOverlay} />

        <ObsSiteMasthead
          start={
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                Obsess DS
              </span>
              <ObsBadge variant="outline" className="font-mono text-[10px]">
                v0.2.0
              </ObsBadge>
            </div>
          }
          middle={
            <nav className="hidden flex-wrap items-center gap-3 text-xs font-medium lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          }
          end={
            <div className="flex items-center gap-2">
              <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                {bp.key} · {bp.columns} cols · {bp.viewportWidth}px
              </span>
              <ObsButton
                size="sm"
                variant={showGridOverlay ? "default" : "outline"}
                onClick={() => setShowGridOverlay((v) => !v)}
              >
                <Grid3X3 className="h-3.5 w-3.5" />
                Grid
              </ObsButton>
            </div>
          }
        />

        <main className="py-12">
          <ObsGridContainer className="space-y-16">
            <header className="space-y-3 border-b pb-8">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Local Component & Layout Test Harness
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Obsess Design System Playground
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                Interactive catalog of the 4-breakpoint Material-inspired grid system, semantic HSL color tokens,
                editorial typography, all 6 patterns, and all 48 UI primitives.
              </p>
            </header>

            <FoundationsSection
              showGridOverlay={showGridOverlay}
              onToggleGridOverlay={() => setShowGridOverlay((v) => !v)}
            />
            <InputsAndLayoutSection />
            <OverlaysAndDataSection />
          </ObsGridContainer>
        </main>

        <ObsToaster />
        <ObsSonnerToaster />
      </div>
    </ObsTooltipProvider>
  );
}

export default App;
