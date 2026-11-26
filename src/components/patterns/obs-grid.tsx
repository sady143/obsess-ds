import { type CSSProperties, type ElementType, type ReactNode, useEffect, useState } from "react";
import { obsCn } from "../../lib/obs-utils";

export type ObsBreakpoint = "compact" | "medium" | "expanded" | "large";

export interface ObsBreakpointSpec {
  key: ObsBreakpoint;
  label: string;
  minWidth: number;
  maxWidthLabel: string;
  columns: number;
  gutter: number;
  margin: number;
  maxContainerWidth: number | null;
}

/**
 * 4-breakpoint responsive grid specification inspired by Material Design 3 window size classes.
 */
export const OBS_GRID_BREAKPOINTS: Record<ObsBreakpoint, ObsBreakpointSpec> = {
  compact: {
    key: "compact",
    label: "Compact (Mobile)",
    minWidth: 0,
    maxWidthLabel: "< 600px",
    columns: 4,
    gutter: 16,
    margin: 16,
    maxContainerWidth: null,
  },
  medium: {
    key: "medium",
    label: "Medium (Tablet)",
    minWidth: 600,
    maxWidthLabel: "600px – 839px",
    columns: 8,
    gutter: 24,
    margin: 32,
    maxContainerWidth: null,
  },
  expanded: {
    key: "expanded",
    label: "Expanded (Desktop)",
    minWidth: 840,
    maxWidthLabel: "840px – 1199px",
    columns: 12,
    gutter: 24,
    margin: 48,
    maxContainerWidth: 1200,
  },
  large: {
    key: "large",
    label: "Large (Wide Desktop)",
    minWidth: 1200,
    maxWidthLabel: ">= 1200px",
    columns: 12,
    gutter: 32,
    margin: 64,
    maxContainerWidth: 1440,
  },
};

export function resolveObsBreakpoint(width: number): ObsBreakpoint {
  if (width >= OBS_GRID_BREAKPOINTS.large.minWidth) return "large";
  if (width >= OBS_GRID_BREAKPOINTS.expanded.minWidth) return "expanded";
  if (width >= OBS_GRID_BREAKPOINTS.medium.minWidth) return "medium";
  return "compact";
}

export interface ObsBreakpointState extends ObsBreakpointSpec {
  viewportWidth: number;
}

export function useObsBreakpoint(): ObsBreakpointState {
  const getState = (): ObsBreakpointState => {
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const key = resolveObsBreakpoint(viewportWidth);
    return { ...OBS_GRID_BREAKPOINTS[key], viewportWidth };
  };

  const [state, setState] = useState<ObsBreakpointState>(getState);

  useEffect(() => {
    const onResize = () => setState(getState());
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return state;
}

export interface ObsGridContainerProps {
  children: ReactNode;
  fluid?: boolean;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export const ObsGridContainer = ({
  children,
  fluid = false,
  as: Component = "div",
  className,
  style,
}: ObsGridContainerProps) => (
  <Component
    className={obsCn("obs-grid-container", fluid && "obs-grid-container--fluid", className)}
    style={style}
  >
    {children}
  </Component>
);

export interface ObsGridProps {
  children: ReactNode;
  /** Wrap the grid in an `ObsGridContainer` with responsive margins and max-width. Defaults to `true`. */
  contained?: boolean;
  /** Disable max-width clamping when `contained` is true. */
  fluid?: boolean;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
}

export const ObsGrid = ({
  children,
  contained = true,
  fluid = false,
  as: Component = "div",
  className,
  containerClassName,
  style,
}: ObsGridProps) => {
  const grid = (
    <Component className={obsCn("obs-grid", className)} style={style}>
      {children}
    </Component>
  );

  if (!contained) return grid;

  return (
    <ObsGridContainer fluid={fluid} className={containerClassName}>
      {grid}
    </ObsGridContainer>
  );
};

export type ObsGridSpanValue = number | "full";
export type ObsResponsiveSpan =
  | ObsGridSpanValue
  | Partial<Record<ObsBreakpoint, ObsGridSpanValue>>;

export type ObsResponsiveStart = number | Partial<Record<ObsBreakpoint, number>>;

export interface ObsGridItemProps {
  children: ReactNode;
  /** Number of columns to span, `"full"`, or a per-breakpoint map (`compact`, `medium`, `expanded`, `large`). */
  span?: ObsResponsiveSpan;
  /** Starting column line (1-indexed), or a per-breakpoint map. */
  start?: ObsResponsiveStart;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export const ObsGridItem = ({
  children,
  span = "full",
  start,
  as: Component = "div",
  className,
  style,
}: ObsGridItemProps) => {
  const spanMap: Partial<Record<ObsBreakpoint, ObsGridSpanValue>> =
    typeof span === "object" ? span : { compact: span };

  const startMap: Partial<Record<ObsBreakpoint, number>> =
    typeof start === "object" ? start : start !== undefined ? { compact: start } : {};

  const cssVars: Record<string, string | number> = {};
  const dataAttrs: Record<string, string> = {};

  const breakpoints: ObsBreakpoint[] = ["compact", "medium", "expanded", "large"];
  for (const bp of breakpoints) {
    const bpSpan = spanMap[bp];
    if (bpSpan === "full") {
      dataAttrs[`data-full-${bp}`] = "true";
    } else if (typeof bpSpan === "number") {
      cssVars[`--obs-span-${bp}`] = bpSpan;
      dataAttrs[`data-full-${bp}`] = "false";
    }

    const bpStart = startMap[bp];
    if (typeof bpStart === "number") {
      cssVars[`--obs-start-${bp}`] = bpStart;
    }
  }

  return (
    <Component
      {...dataAttrs}
      className={obsCn("obs-grid-item", className)}
      style={{ ...cssVars, ...style }}
    >
      {children}
    </Component>
  );
};

export interface ObsGridOverlayProps {
  visible?: boolean;
  fluid?: boolean;
  className?: string;
}

/**
 * Visual column/margin/gutter guide overlay for inspecting layout alignment across all 4 breakpoints.
 */
export const ObsGridOverlay = ({ visible = false, fluid = false, className }: ObsGridOverlayProps) => {
  const { columns } = useObsBreakpoint();

  if (!visible) return null;

  return (
    <div aria-hidden className={obsCn("obs-grid-overlay", className)}>
      <ObsGridContainer fluid={fluid} className="h-full">
        <div className="obs-grid h-full">
          {Array.from({ length: columns }, (_, index) => (
            <div key={index} className="obs-grid-overlay__column" />
          ))}
        </div>
      </ObsGridContainer>
    </div>
  );
};
