import type { ComponentType, ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export interface ObsBreadcrumbsItem {
  label: string;
  /** Omit `href` to mark the item as the current page (rendered non-clickable). */
  href?: string;
}

export interface ObsBreadcrumbLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export interface ObsBreadcrumbsProps {
  items: ObsBreadcrumbsItem[];
  /**
   * Color scheme:
   *  - "light": dark text on the cream/neutral hero background.
   *  - "dark":  default app palette (muted-foreground on background).
   * Defaults to "light".
   */
  variant?: "light" | "dark";
  className?: string;
  /**
   * Optional router link renderer (e.g. React Router `Link` or Next.js `Link`).
   * Defaults to a standard `<a>` tag.
   */
  renderLink?: (props: ObsBreadcrumbLinkProps) => ReactNode;
  /** Alternative to `renderLink`: pass a component accepting `href` or `to`. */
  LinkComponent?: ComponentType<{ href?: string; to?: string; className?: string; children: ReactNode }>;
}

export const ObsBreadcrumbs = ({
  items,
  variant = "light",
  className,
  renderLink,
  LinkComponent,
}: ObsBreadcrumbsProps) => {
  if (items.length === 0) return null;

  const linkClasses =
    variant === "light"
      ? "text-neutral-600 hover:text-neutral-950"
      : "text-muted-foreground hover:text-foreground";
  const currentClasses = variant === "light" ? "text-neutral-950" : "text-foreground";
  const separatorClasses = variant === "light" ? "text-neutral-400" : "text-muted-foreground/50";
  const interactiveClasses = `rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 ${linkClasses}`;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-y-1 font-body text-xs md:text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const isClickable = !!item.href && !isLast;

          let content: ReactNode;
          if (isClickable && item.href) {
            if (renderLink) {
              content = renderLink({
                href: item.href,
                className: interactiveClasses,
                children: item.label,
              });
            } else if (LinkComponent) {
              content = (
                <LinkComponent href={item.href} to={item.href} className={interactiveClasses}>
                  {item.label}
                </LinkComponent>
              );
            } else {
              content = (
                <a href={item.href} className={interactiveClasses}>
                  {item.label}
                </a>
              );
            }
          } else {
            content = (
              <span
                aria-current={isLast ? "page" : undefined}
                className={isLast ? `${currentClasses} font-medium` : linkClasses}
              >
                {item.label}
              </span>
            );
          }

          return (
            <li key={`${item.label}-${i}`} className="flex items-center">
              {content}
              {!isLast && (
                <ChevronRight
                  aria-hidden
                  className={`mx-1.5 h-3.5 w-3.5 shrink-0 ${separatorClasses}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default ObsBreadcrumbs;
