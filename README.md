# Obsess Design System (`@sady143/obsess-ds`)

Editorial typography, semantic HSL color tokens, Tailwind CSS v3 preset, and `obs-*` prefixed React UI primitives and patterns extracted from `process-obsessed-folio`.

## Installation

Install directly from GitHub in any React + Tailwind CSS v3 project:

```bash
npm install github:sady143/obsess-ds#v0.2.0
```

## Setup

### 1. Tailwind Preset (`tailwind.config.ts`)

Add `obsessTailwindPreset` and include the package's `dist` folder in `content` so Tailwind generates all utility classes used by `obs-*` components:

```ts
import type { Config } from "tailwindcss";
import { obsessTailwindPreset } from "@sady143/obsess-ds/tailwind-preset";

export default {
  presets: [obsessTailwindPreset],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@sady143/obsess-ds/dist/**/*.{js,mjs}",
  ],
} satisfies Config;
```

### 2. Stylesheet (`src/main.tsx` or `src/index.css`)

Import the compiled styles (includes Google Fonts, `:root` semantic tokens, base typography, `.obs-glass-tile`, motion classes, and `.obs-typewriter-*`):

```tsx
import "@sady143/obsess-ds/styles.css";
```

Or import only tokens / fonts separately:

```tsx
import "@sady143/obsess-ds/tokens.css";
import "@sady143/obsess-ds/fonts.css";
```

## Usage

All components, hooks, and utilities follow the `Obs*` / `obs*` naming convention:

```tsx
import {
  ObsButton,
  ObsDialog,
  ObsDialogContent,
  ObsDialogHeader,
  ObsDialogTitle,
  ObsInput,
  ObsLabel,
  ObsSiteMasthead,
  ObsFadeIn,
  ObsMarquee,
  ObsBreadcrumbs,
  ObsNDABanner,
  ObsNoticeBanner,
  ObsToaster,
  ObsSonnerToaster,
  ObsTooltipProvider,
  useObsToast,
  obsCn,
} from "@sady143/obsess-ds";
```

### Router-agnostic `ObsBreadcrumbs`

`ObsBreadcrumbs` renders standard `<a>` elements by default, or integrates with any router via `renderLink` or `LinkComponent`:

```tsx
import { Link } from "react-router-dom";
import { ObsBreadcrumbs } from "@sady143/obsess-ds";

<ObsBreadcrumbs
  items={[{ label: "Home", href: "/" }, { label: "Case Study" }]}
  renderLink={({ href, className, children }) => (
    <Link to={href} className={className}>
      {children}
    </Link>
  )}
/>
```

## Included Exports

- **Foundations**: `obsessTailwindPreset`, `styles.css`, `tokens.css`, `fonts.css`, `grid.css`, `OBS_COLORS` (36 equal-weight brand, editorial, semantic, neutral, sidebar, and glass tokens)
- **4-Breakpoint Grid**: `ObsGrid`, `ObsGridContainer`, `ObsGridItem`, `ObsGridOverlay`, `OBS_GRID_BREAKPOINTS`, `useObsBreakpoint`, `resolveObsBreakpoint`
  - `compact` (`< 600px`): 4 cols, 16px gutter, 16px margin, fluid
  - `medium` (`600px – 839px`): 8 cols, 24px gutter, 32px margin, fluid
  - `expanded` (`840px – 1199px`): 12 cols, 24px gutter, 48px margin, 1200px max-width
  - `large` (`>= 1200px`): 12 cols, 32px gutter, 64px margin, 1440px max-width
- **Utilities & Hooks**: `obsCn` (`cn`), `useObsToast`, `obsToast`, `useObsMobile`, `useObsBreakpoint`
- **Patterns**: `ObsSiteMasthead`, `ObsFadeIn`, `ObsMarquee`, `ObsBreadcrumbs`, `ObsNoticeBanner`, `ObsNDABanner`, `ObsGrid*`, `ObsModal` (form & slot body modal)
- **UI Primitives (48 modules)**: `ObsAccordion`, `ObsAlert`, `ObsAlertDialog`, `ObsAspectRatio`, `ObsAvatar`, `ObsBadge`, `ObsBreadcrumb`, `ObsButton`, `ObsCalendar`, `ObsCard`, `ObsCarousel`, `ObsChart*`, `ObsCheckbox`, `ObsCollapsible`, `ObsCommand`, `ObsContextMenu`, `ObsDialog`, `ObsDrawer`, `ObsDropdownMenu`, `ObsForm`, `ObsHoverCard`, `ObsInput`, `ObsInputOTP`, `ObsLabel`, `ObsMenubar`, `ObsNavigationMenu`, `ObsPagination`, `ObsPopover`, `ObsProgress`, `ObsRadioGroup`, `ObsResizable*`, `ObsScrollArea`, `ObsSelect`, `ObsSeparator`, `ObsSheet`, `ObsSidebar*`, `ObsSkeleton`, `ObsSlider`, `ObsSonnerToaster`, `ObsSwitch`, `ObsTable`, `ObsTabs`, `ObsTextarea`, `ObsToast*`, `ObsToaster`, `ObsToggle`, `ObsToggleGroup`, `ObsTooltip*`

## Development, Playground & Releasing

```bash
npm install
npm run dev        # Launch local component & grid playground (Vite)
npm run typecheck
npm run build
```

Commit `dist/` on release tags (e.g. `v0.1.0`) so consumers installing directly from GitHub receive pre-built ESM + `.d.ts` + CSS bundles with zero extra build steps.
