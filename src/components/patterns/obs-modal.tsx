import { type FormEvent, type ReactNode } from "react";
import { obsCn } from "../../lib/obs-utils";
import { Button, type ButtonProps } from "../ui/obs-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/obs-dialog";

export type ObsModalSize = "sm" | "md" | "lg" | "xl" | "full";

const SIZE_CLASSES: Record<ObsModalSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-2xl",
  xl: "sm:max-w-4xl",
  full: "sm:max-w-[calc(100vw-2rem)]",
};

export interface ObsModalProps {
  /** Controlled open state. */
  open?: boolean;
  /** Controlled open state change handler. */
  onOpenChange?: (open: boolean) => void;
  /** Initial open state when uncontrolled. */
  defaultOpen?: boolean;
  /** Optional trigger element rendered via `DialogTrigger asChild`. */
  trigger?: ReactNode;
  /** Optional editorial eyebrow displayed above the modal title. */
  eyebrow?: ReactNode;
  /** Modal heading (rendered in `ObsDialogTitle`). */
  title?: ReactNode;
  /** Optional supporting copy below the title. */
  description?: ReactNode;
  /** Flexible slot body — supports arbitrary layouts, cards, media, or form fields. */
  children: ReactNode;
  /** Optional custom footer slot. Overrides default form Cancel/Submit buttons when provided. */
  footer?: ReactNode;
  /**
   * When provided, wraps the modal body and footer in a `<form>` element so native
   * form submission (Enter key + submit button) works out of the box.
   */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  /** Label for the default submit button when `onSubmit` is used without a custom `footer`. */
  submitLabel?: string;
  /** Label for the default cancel button when `onSubmit` is used without a custom `footer`. */
  cancelLabel?: string;
  /** Disables submit button and shows busy state when `onSubmit` is used. */
  submitting?: boolean;
  /** Button variant for the default submit button. */
  submitVariant?: ButtonProps["variant"];
  /** Width preset for the modal surface. Defaults to `"md"`. */
  size?: ObsModalSize;
  /** Keeps header & footer pinned while the slot body scrolls on tall content. Defaults to `true`. */
  scrollable?: boolean;
  /** Additional classes applied to the modal content panel. */
  className?: string;
  /** Additional classes applied to the body slot container. */
  bodyClassName?: string;
}

export const ObsModal = ({
  open,
  onOpenChange,
  defaultOpen,
  trigger,
  eyebrow,
  title,
  description,
  children,
  footer,
  onSubmit,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  submitting = false,
  submitVariant = "default",
  size = "md",
  scrollable = true,
  className,
  bodyClassName,
}: ObsModalProps) => {
  const hasHeader = Boolean(eyebrow || title || description);

  const resolvedFooter =
    footer !== undefined ? (
      <DialogFooter className="shrink-0 pt-2">{footer}</DialogFooter>
    ) : onSubmit ? (
      <DialogFooter className="shrink-0 pt-2">
        <DialogClose asChild>
          <Button type="button" variant="outline" disabled={submitting}>
            {cancelLabel}
          </Button>
        </DialogClose>
        <Button type="submit" variant={submitVariant} disabled={submitting}>
          {submitting ? "Saving..." : submitLabel}
        </Button>
      </DialogFooter>
    ) : null;

  const body = (
    <div
      className={obsCn(
        "min-w-0 flex-1",
        scrollable && "overflow-y-auto pr-1",
        bodyClassName,
      )}
    >
      {children}
    </div>
  );

  const innerContent = (
    <>
      {hasHeader && (
        <DialogHeader className="shrink-0">
          {eyebrow && (
            <p className="font-body text-xs font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          {title && <DialogTitle className="font-display text-2xl">{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
      )}
      {body}
      {resolvedFooter}
    </>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={obsCn(
          "flex max-h-[90vh] flex-col gap-4",
          SIZE_CLASSES[size],
          className,
        )}
      >
        {onSubmit ? (
          <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col gap-4">
            {innerContent}
          </form>
        ) : (
          innerContent
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ObsModal;
