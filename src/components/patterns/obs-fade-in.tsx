import { useEffect, useRef, type ReactNode } from "react";
import { obsCn } from "../../lib/obs-utils";

export interface ObsFadeInProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export const ObsFadeIn = ({ children, className = "", stagger = false }: ObsFadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={obsCn(stagger ? "obs-stagger-children" : "obs-fade-up", className)}>
      {children}
    </div>
  );
};

export default ObsFadeIn;
