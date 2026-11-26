import { type ReactNode, useEffect, useState } from "react";
import { obsCn } from "../../lib/obs-utils";

const SCROLL_THRESHOLD_PX = 16;

export type ObsSiteMastheadProps = {
  start?: ReactNode;
  /** Optional center slot. When provided, the masthead switches to a 3-zone grid layout. */
  middle?: ReactNode;
  end?: ReactNode;
  /** Case study / inner pages: dark bar + light text (inverts default light chrome). */
  variant?: "default" | "inverted";
  className?: string;
};

export const ObsSiteMasthead = ({
  start,
  middle,
  end,
  variant = "default",
  className,
}: ObsSiteMastheadProps) => {
  const inverted = variant === "inverted";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const colorClasses = [
    "motion-reduce:transition-none",
    "transition-[background-color,box-shadow,backdrop-filter,border-color,color] duration-300 ease-out",
    isScrolled && "obs-site-masthead--scrolled site-masthead--scrolled",
    inverted
      ? isScrolled
        ? "border-b border-white/10 bg-transparent text-neutral-100 shadow-sm backdrop-blur-xl backdrop-saturate-150"
        : "border-b border-white/10 bg-transparent text-neutral-100"
      : isScrolled
        ? "border-b border-black/5 bg-transparent text-neutral-800 shadow-sm backdrop-blur-xl backdrop-saturate-150"
        : "border-b border-neutral-200/80 bg-transparent text-neutral-600",
  ];

  if (middle !== undefined) {
    return (
      <header
        className={obsCn(
          "obs-site-masthead site-masthead sticky top-0 z-50 grid w-full grid-cols-1 items-center gap-2 px-6 py-2 md:grid-cols-3 md:gap-8 md:px-12",
          ...colorClasses,
          className,
        )}
      >
        <div className="flex min-w-0 items-center justify-center gap-4 md:justify-start">
          {start}
        </div>
        <div className="flex min-w-0 items-center justify-center gap-4">{middle}</div>
        <div className="flex min-w-0 items-center justify-center gap-4 md:justify-end">
          {end}
        </div>
      </header>
    );
  }

  const bothChrome = Boolean(start && end);
  const layoutClass = bothChrome
    ? "flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-8"
    : start && !end
      ? "flex-row items-center justify-start"
      : !start && end
        ? "flex-row items-center justify-end"
        : "flex-row items-center justify-center";

  return (
    <header
      className={obsCn(
        "obs-site-masthead site-masthead sticky top-0 z-50 flex w-full px-6 md:px-12 py-2",
        layoutClass,
        ...colorClasses,
        className,
      )}
    >
      {start ? (
        <div
          className={
            bothChrome
              ? "flex min-w-0 w-full items-center justify-center gap-4 md:w-auto md:shrink-0"
              : "flex min-w-0 shrink items-center gap-4"
          }
        >
          {start}
        </div>
      ) : null}
      {end ? (
        <div
          className={
            bothChrome
              ? "flex w-full shrink-0 items-center justify-center gap-4 md:w-auto"
              : "flex shrink-0 items-center gap-4"
          }
        >
          {end}
        </div>
      ) : null}
    </header>
  );
};

export default ObsSiteMasthead;
