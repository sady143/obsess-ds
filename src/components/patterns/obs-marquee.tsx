import { obsCn } from "../../lib/obs-utils";

export interface ObsMarqueeProps {
  text?: string;
  speed?: string;
  className?: string;
}

export const ObsMarquee = ({
  text = "MY PROCESS, I OBSESS",
  speed = "20s",
  className,
}: ObsMarqueeProps) => {
  const repeated = Array(10).fill(text).join(" · ");

  return (
    <div className={obsCn("w-full overflow-hidden border-y border-white/10 bg-neutral-950 py-4", className)}>
      <div
        className="obs-animate-marquee whitespace-nowrap font-display text-lg md:text-2xl tracking-widest text-accent uppercase"
        style={{ animationDuration: speed }}
      >
        {repeated} · {repeated}
      </div>
    </div>
  );
};

export default ObsMarquee;
