import {
  OBS_COLORS,
  OBS_GRID_BREAKPOINTS,
  ObsBadge,
  ObsBreadcrumbs,
  ObsButton,
  ObsCard,
  ObsCardContent,
  ObsCardDescription,
  ObsCardHeader,
  ObsCardTitle,
  ObsFadeIn,
  ObsGrid,
  ObsGridItem,
  ObsMarquee,
  ObsNDABanner,
  ObsNoticeBanner,
  useObsBreakpoint,
  useObsMobile,
  type ObsColorGroup,
} from "@sady143/obsess-ds";
import { Grid3X3, Sparkles } from "lucide-react";

const COLOR_GROUP_LABELS: Record<ObsColorGroup, string> = {
  brand: "Equal-Weight Brand & Editorial Colors",
  semantic: "Semantic UI Tokens",
  neutral: "Editorial Neutral Ramp",
  sidebar: "Dark Sidebar Palette",
  surface: "Glass & Elevation Surfaces",
};

const FONT_FAMILIES = [
  { label: "Display — Cormorant Garamond", className: "font-display text-3xl", sample: "Obsess Design System — Editorial Craft" },
  { label: "Body — DM Sans", className: "font-body text-base", sample: "Clean geometric sans for UI controls, body copy, and data tables." },
  { label: "Poppins", className: "font-poppins text-base", sample: "Balanced humanist sans-serif for structured headings and labels." },
  { label: "Laila", className: "font-laila text-lg", sample: "Warm serif display voice with editorial character." },
  { label: "Carrois Gothic", className: "font-carrois text-base", sample: "Compact gothic grotesque for metadata and tags." },
  { label: "Damion", className: "font-damion text-2xl", sample: "Signature Script Accent" },
  { label: "Handlee", className: "font-handlee text-lg", sample: "Handwritten annotation & margin note voice." },
];

interface FoundationsSectionProps {
  showGridOverlay: boolean;
  onToggleGridOverlay: () => void;
}

export function FoundationsSection({ showGridOverlay, onToggleGridOverlay }: FoundationsSectionProps) {
  const bp = useObsBreakpoint();
  const isMobile = useObsMobile();

  return (
    <div className="space-y-16">
      {/* 1. 4-Breakpoint Material-Inspired Grid System */}
      <section id="grid" className="scroll-mt-24 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Foundations · Layout</p>
            <h2 className="text-3xl font-semibold tracking-tight">4-Breakpoint Responsive Grid</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Material Design 3-inspired window size classes with responsive columns, gutters, and margins.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ObsBadge variant="outline" className="font-mono text-xs">
              Active: {bp.key} ({bp.viewportWidth}px · {bp.columns} cols · {bp.gutter}px gutter · {bp.margin}px margin)
            </ObsBadge>
            <ObsBadge variant="secondary" className="font-mono text-xs">
              useObsMobile: {isMobile ? "true" : "false"}
            </ObsBadge>
            <ObsButton size="sm" variant={showGridOverlay ? "default" : "outline"} onClick={onToggleGridOverlay}>
              <Grid3X3 className="h-4 w-4" />
              {showGridOverlay ? "Hide Grid Overlay" : "Show Grid Overlay"}
            </ObsButton>
          </div>
        </div>

        {/* Breakpoint Specification Cards */}
        <ObsGrid contained={false}>
          {Object.values(OBS_GRID_BREAKPOINTS).map((spec) => {
            const isActive = spec.key === bp.key;
            return (
              <ObsGridItem
                key={spec.key}
                span={{ compact: 4, medium: 4, expanded: 3, large: 3 }}
              >
                <ObsCard className={isActive ? "border-accent ring-1 ring-accent" : ""}>
                  <ObsCardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <ObsCardTitle className="text-lg">{spec.label}</ObsCardTitle>
                      {isActive && <ObsBadge>Active</ObsBadge>}
                    </div>
                    <ObsCardDescription className="font-mono text-xs">{spec.maxWidthLabel}</ObsCardDescription>
                  </ObsCardHeader>
                  <ObsCardContent className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded bg-muted p-2">
                      <span className="block text-muted-foreground">Columns</span>
                      <span className="font-semibold">{spec.columns}</span>
                    </div>
                    <div className="rounded bg-muted p-2">
                      <span className="block text-muted-foreground">Gutter</span>
                      <span className="font-semibold">{spec.gutter}px</span>
                    </div>
                    <div className="rounded bg-muted p-2">
                      <span className="block text-muted-foreground">Margin</span>
                      <span className="font-semibold">{spec.margin}px</span>
                    </div>
                    <div className="rounded bg-muted p-2">
                      <span className="block text-muted-foreground">Max Width</span>
                      <span className="font-semibold">
                        {spec.maxContainerWidth ? `${spec.maxContainerWidth}px` : "Fluid"}
                      </span>
                    </div>
                  </ObsCardContent>
                </ObsCard>
              </ObsGridItem>
            );
          })}
        </ObsGrid>

        {/* Live Responsive Span Demo */}
        <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Live Responsive Column Spans (Resize viewport to watch columns reflow)
          </p>
          <ObsGrid contained={false}>
            <ObsGridItem span="full">
              <div className="rounded border border-accent/30 bg-accent/10 p-3 text-center text-xs font-medium text-accent">
                span="full" (4 / 8 / 12 / 12 cols)
              </div>
            </ObsGridItem>
            <ObsGridItem span={{ compact: 4, medium: 4, expanded: 8, large: 8 }}>
              <div className="rounded border bg-card p-3 text-center text-xs font-medium">
                Main Content: compact 4 · medium 4 · expanded 8 · large 8
              </div>
            </ObsGridItem>
            <ObsGridItem span={{ compact: 4, medium: 4, expanded: 4, large: 4 }}>
              <div className="rounded border bg-card p-3 text-center text-xs font-medium">
                Aside: compact 4 · medium 4 · expanded 4 · large 4
              </div>
            </ObsGridItem>
            {[1, 2, 3, 4].map((n) => (
              <ObsGridItem key={n} span={{ compact: 2, medium: 2, expanded: 3, large: 3 }}>
                <div className="rounded border bg-secondary p-3 text-center text-xs">
                  Card {n} (2 / 2 / 3 / 3)
                </div>
              </ObsGridItem>
            ))}
          </ObsGrid>
        </div>
      </section>

      {/* 2. Equal-Weight Color Palette */}
      <section id="colors" className="scroll-mt-24 space-y-8">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Foundations · Color System</p>
          <h2 className="text-3xl font-semibold tracking-tight">Equal-Weight Color Palette ({OBS_COLORS.length} Tokens)</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            All brand, editorial, semantic, neutral, sidebar, and glass tokens extracted from{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">process-obsessed-folio</code> and defined in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">tokens.css</code> &amp;{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">OBS_COLORS</code>.
          </p>
        </div>

        {/* Live Equal-Weight Brand Color Usage Strip */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg bg-terracotta p-4 text-terracotta-foreground">
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-80">bg-terracotta</p>
            <p className="mt-1 font-display text-lg font-semibold">Signature Eyebrow</p>
          </div>
          <div className="rounded-lg bg-honeybee p-4 text-honeybee-foreground">
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-80">bg-honeybee</p>
            <p className="mt-1 font-display text-lg font-semibold">Manifesto Band</p>
          </div>
          <div className="rounded-lg bg-gold p-4 text-gold-foreground transition-colors hover:bg-gold-hover">
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-80">bg-gold / hover</p>
            <p className="mt-1 font-display text-lg font-semibold">10 Years Milestone</p>
          </div>
          <div className="rounded-lg bg-editorial-blue p-4 text-editorial-blue-foreground">
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-80">bg-editorial-blue</p>
            <p className="mt-1 font-display text-lg font-semibold">Editorial Link</p>
          </div>
          <div className="rounded-lg bg-love p-4 text-love-foreground">
            <p className="text-[11px] font-mono uppercase tracking-wider opacity-80">bg-love</p>
            <p className="mt-1 font-display text-lg font-semibold">Send Love Accent</p>
          </div>
        </div>

        {(["brand", "semantic", "neutral", "sidebar", "surface"] as ObsColorGroup[]).map((group) => {
          const items = OBS_COLORS.filter((c) => c.group === group);
          return (
            <div key={group} className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                {COLOR_GROUP_LABELS[group]} ({items.length})
              </h3>
              <ObsGrid contained={false}>
                {items.map((color) => (
                  <ObsGridItem key={color.token} span={{ compact: 2, medium: 2, expanded: 3, large: 2 }}>
                    <button
                      type="button"
                      onClick={() => navigator.clipboard?.writeText(`var(${color.token})`)}
                      className="h-full w-full overflow-hidden rounded-lg border bg-card text-left transition-colors hover:border-foreground/40"
                      title={`Click to copy var(${color.token}) — ${color.usage}`}
                    >
                      <div className="h-14 border-b" style={{ background: color.value }} />
                      <div className="space-y-0.5 p-2 text-[11px]">
                        <div className="font-medium leading-tight">{color.name}</div>
                        <div className="truncate font-mono text-muted-foreground">{color.token}</div>
                        <div className="font-mono text-muted-foreground">{color.hex ?? color.value}</div>
                      </div>
                    </button>
                  </ObsGridItem>
                ))}
              </ObsGrid>
            </div>
          );
        })}
      </section>

      {/* 3. Typography */}
      <section id="typography" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Foundations · Typography</p>
          <h2 className="text-3xl font-semibold tracking-tight">Editorial Font Families</h2>
        </div>
        <div className="divide-y rounded-lg border bg-card">
          {FONT_FAMILIES.map((font) => (
            <div key={font.label} className="flex flex-col gap-1 p-4 md:flex-row md:items-baseline md:justify-between">
              <span className="text-xs font-mono text-muted-foreground">{font.label}</span>
              <span className={font.className}>{font.sample}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Patterns */}
      <section id="patterns" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">Patterns</p>
          <h2 className="text-3xl font-semibold tracking-tight">Obsess Patterns</h2>
        </div>

        <div className="space-y-6">
          <ObsCard>
            <ObsCardHeader>
              <ObsCardTitle className="text-lg">ObsBreadcrumbs</ObsCardTitle>
              <ObsCardDescription>Router-agnostic breadcrumb trail pattern</ObsCardDescription>
            </ObsCardHeader>
            <ObsCardContent>
              <ObsBreadcrumbs
                items={[
                  { label: "Obsess DS", href: "#grid" },
                  { label: "Patterns", href: "#patterns" },
                  { label: "Playground" },
                ]}
              />
            </ObsCardContent>
          </ObsCard>

          <ObsNoticeBanner icon={<Sparkles className="h-4 w-4 shrink-0" />}>
            ObsNoticeBanner — Highlight important editorial notes, release callouts, or system alerts.
          </ObsNoticeBanner>

          <ObsNDABanner />

          <div className="overflow-hidden rounded-lg border">
            <ObsMarquee text="OBSESS DESIGN SYSTEM · 4-BREAKPOINT GRID · EDITORIAL CRAFT" />
          </div>

          <ObsFadeIn stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {["ObsFadeIn Item 1", "ObsFadeIn Item 2", "ObsFadeIn Item 3"].map((item) => (
              <div key={item} className="obs-glass-tile p-4 text-sm font-medium">
                {item} <span className="block text-xs text-muted-foreground">.obs-glass-tile surface</span>
              </div>
            ))}
          </ObsFadeIn>
        </div>
      </section>
    </div>
  );
}
