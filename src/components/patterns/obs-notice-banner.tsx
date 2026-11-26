import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";
import { obsCn } from "../../lib/obs-utils";

export interface ObsNoticeBannerProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export const ObsNoticeBanner = ({ children, icon, className }: ObsNoticeBannerProps) => (
  <div
    className={obsCn(
      "flex items-center gap-3 rounded bg-accent/10 border border-accent/20 px-4 py-3 text-sm text-accent",
      className,
    )}
  >
    {icon ?? <ShieldAlert className="h-4 w-4 shrink-0" />}
    <span className="font-body">{children}</span>
  </div>
);

export const ObsNDABanner = ({ className }: { className?: string }) => (
  <ObsNoticeBanner className={className}>
    This project is under NDA. Details have been generalized to respect confidentiality agreements.
  </ObsNoticeBanner>
);

export default ObsNDABanner;
