'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var React34 = require('react');
var jsxRuntime = require('react/jsx-runtime');
var lucideReact = require('lucide-react');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var reactDayPicker = require('react-day-picker');
var useEmblaCarousel = require('embla-carousel-react');
var RechartsPrimitive = require('recharts');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var cmdk = require('cmdk');
var DialogPrimitive = require('@radix-ui/react-dialog');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var vaul = require('vaul');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var inputOtp = require('input-otp');
var MenubarPrimitive = require('@radix-ui/react-menubar');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var ProgressPrimitive = require('@radix-ui/react-progress');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var ResizablePrimitive = require('react-resizable-panels');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var SliderPrimitive = require('@radix-ui/react-slider');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ToastPrimitives = require('@radix-ui/react-toast');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var TogglePrimitive = require('@radix-ui/react-toggle');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React34__namespace = /*#__PURE__*/_interopNamespace(React34);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespace(AspectRatioPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);
var RechartsPrimitive__namespace = /*#__PURE__*/_interopNamespace(RechartsPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var ContextMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(ContextMenuPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var MenubarPrimitive__namespace = /*#__PURE__*/_interopNamespace(MenubarPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var ResizablePrimitive__namespace = /*#__PURE__*/_interopNamespace(ResizablePrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);

// src/lib/obs-utils.ts
function obsCn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React34__namespace.useState(void 0);
  React34__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast3) => {
          addToRemoveQueue(toast3.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React34__namespace.useState(memoryState);
  React34__namespace.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
var SCROLL_THRESHOLD_PX = 16;
var ObsSiteMasthead = ({
  start,
  middle,
  end,
  variant = "default",
  className
}) => {
  const inverted = variant === "inverted";
  const [isScrolled, setIsScrolled] = React34.useState(false);
  React34.useEffect(() => {
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
    inverted ? isScrolled ? "border-b border-white/10 bg-transparent text-neutral-100 shadow-sm backdrop-blur-xl backdrop-saturate-150" : "border-b border-white/10 bg-transparent text-neutral-100" : isScrolled ? "border-b border-black/5 bg-transparent text-neutral-800 shadow-sm backdrop-blur-xl backdrop-saturate-150" : "border-b border-neutral-200/80 bg-transparent text-neutral-600"
  ];
  if (middle !== void 0) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "header",
      {
        className: obsCn(
          "obs-site-masthead site-masthead sticky top-0 z-50 grid w-full grid-cols-1 items-center gap-2 px-6 py-2 md:grid-cols-3 md:gap-8 md:px-12",
          ...colorClasses,
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-w-0 items-center justify-center gap-4 md:justify-start", children: start }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-w-0 items-center justify-center gap-4", children: middle }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-w-0 items-center justify-center gap-4 md:justify-end", children: end })
        ]
      }
    );
  }
  const bothChrome = Boolean(start && end);
  const layoutClass = bothChrome ? "flex-col items-center gap-2 md:flex-row md:items-center md:justify-center md:gap-8" : start && !end ? "flex-row items-center justify-start" : !start && end ? "flex-row items-center justify-end" : "flex-row items-center justify-center";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "header",
    {
      className: obsCn(
        "obs-site-masthead site-masthead sticky top-0 z-50 flex w-full px-6 md:px-12 py-2",
        layoutClass,
        ...colorClasses,
        className
      ),
      children: [
        start ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: bothChrome ? "flex min-w-0 w-full items-center justify-center gap-4 md:w-auto md:shrink-0" : "flex min-w-0 shrink items-center gap-4",
            children: start
          }
        ) : null,
        end ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: bothChrome ? "flex w-full shrink-0 items-center justify-center gap-4 md:w-auto" : "flex shrink-0 items-center gap-4",
            children: end
          }
        ) : null
      ]
    }
  );
};
var ObsFadeIn = ({ children, className = "", stagger = false }) => {
  const ref = React34.useRef(null);
  React34.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn(stagger ? "obs-stagger-children" : "obs-fade-up", className), children });
};
var ObsMarquee = ({
  text = "MY PROCESS, I OBSESS",
  speed = "20s",
  className
}) => {
  const repeated = Array(10).fill(text).join(" \xB7 ");
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("w-full overflow-hidden border-y border-white/10 bg-neutral-950 py-4", className), children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "obs-animate-marquee whitespace-nowrap font-display text-lg md:text-2xl tracking-widest text-accent uppercase",
      style: { animationDuration: speed },
      children: [
        repeated,
        " \xB7 ",
        repeated
      ]
    }
  ) });
};
var ObsBreadcrumbs = ({
  items,
  variant = "light",
  className,
  renderLink,
  LinkComponent
}) => {
  if (items.length === 0) return null;
  const linkClasses = variant === "light" ? "text-neutral-600 hover:text-neutral-950" : "text-muted-foreground hover:text-foreground";
  const currentClasses = variant === "light" ? "text-neutral-950" : "text-foreground";
  const separatorClasses = variant === "light" ? "text-neutral-400" : "text-muted-foreground/50";
  const interactiveClasses = `rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 ${linkClasses}`;
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { "aria-label": "Breadcrumb", className, children: /* @__PURE__ */ jsxRuntime.jsx("ol", { className: "flex flex-wrap items-center gap-y-1 font-body text-xs md:text-sm", children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    const isClickable = !!item.href && !isLast;
    let content;
    if (isClickable && item.href) {
      if (renderLink) {
        content = renderLink({
          href: item.href,
          className: interactiveClasses,
          children: item.label
        });
      } else if (LinkComponent) {
        content = /* @__PURE__ */ jsxRuntime.jsx(LinkComponent, { href: item.href, to: item.href, className: interactiveClasses, children: item.label });
      } else {
        content = /* @__PURE__ */ jsxRuntime.jsx("a", { href: item.href, className: interactiveClasses, children: item.label });
      }
    } else {
      content = /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          "aria-current": isLast ? "page" : void 0,
          className: isLast ? `${currentClasses} font-medium` : linkClasses,
          children: item.label
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs("li", { className: "flex items-center", children: [
      content,
      !isLast && /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronRight,
        {
          "aria-hidden": true,
          className: `mx-1.5 h-3.5 w-3.5 shrink-0 ${separatorClasses}`
        }
      )
    ] }, `${item.label}-${i}`);
  }) }) });
};
var ObsNoticeBanner = ({ children, icon, className }) => /* @__PURE__ */ jsxRuntime.jsxs(
  "div",
  {
    className: obsCn(
      "flex items-center gap-3 rounded bg-accent/10 border border-accent/20 px-4 py-3 text-sm text-accent",
      className
    ),
    children: [
      icon ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ShieldAlert, { className: "h-4 w-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-body", children })
    ]
  }
);
var ObsNDABanner = ({ className }) => /* @__PURE__ */ jsxRuntime.jsx(ObsNoticeBanner, { className, children: "This project is under NDA. Details have been generalized to respect confidentiality agreements." });
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Item, { ref, className: obsCn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
  AccordionPrimitive__namespace.Trigger,
  {
    ref,
    className: obsCn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AccordionPrimitive__namespace.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React34__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(Comp, { className: obsCn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Overlay,
  {
    className: obsCn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogPrimitive__namespace.Content,
    {
      ref,
      className: obsCn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Title, { ref, className: obsCn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Description, { ref, className: obsCn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AlertDialogPrimitive__namespace.Action, { ref, className: obsCn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AlertDialogPrimitive__namespace.Cancel,
  {
    ref,
    className: obsCn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React34__namespace.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, role: "alert", className: obsCn(alertVariants({ variant }), className), ...props }));
Alert.displayName = "Alert";
var AlertTitle = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h5", { ref, className: obsCn("mb-1 font-medium leading-none tracking-tight", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("text-sm [&_p]:leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var AspectRatio = AspectRatioPrimitive__namespace.Root;
var Avatar = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Root,
  {
    ref,
    className: obsCn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(AvatarPrimitive__namespace.Image, { ref, className: obsCn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  AvatarPrimitive__namespace.Fallback,
  {
    ref,
    className: obsCn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn(badgeVariants({ variant }), className), ...props });
}
var Breadcrumb = React34__namespace.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    {
      ref,
      className: obsCn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: obsCn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React34__namespace.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(Comp, { ref, className: obsCn("transition-colors hover:text-foreground", className), ...props });
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: obsCn("font-normal text-foreground", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("li", { role: "presentation", "aria-hidden": "true", className: obsCn("[&>svg]:size-3.5", className), ...props, children: children ?? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {}) });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: obsCn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    {
      showOutsideDays,
      className: obsCn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: obsCn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: obsCn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ..._props }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
        IconRight: ({ ..._props }) => /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
var Card = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }));
Card.displayName = "Card";
var CardHeader = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h3", { ref, className: obsCn("text-2xl font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("p", { ref, className: obsCn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
var CarouselContext = React34__namespace.createContext(null);
function useCarousel() {
  const context = React34__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React34__namespace.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel__default.default(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React34__namespace.useState(false);
    const [canScrollNext, setCanScrollNext] = React34__namespace.useState(false);
    const onSelect = React34__namespace.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React34__namespace.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React34__namespace.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React34__namespace.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React34__namespace.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React34__namespace.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: obsCn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        className: obsCn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: obsCn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React34__namespace.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: obsCn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React34__namespace.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: obsCn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React34__namespace.createContext(null);
function useChart() {
  const context = React34__namespace.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = React34__namespace.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React34__namespace.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsxRuntime.jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: obsCn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsxRuntime.jsx(RechartsPrimitive__namespace.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([_, config2]) => config2.theme || config2.color);
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive__namespace.Tooltip;
var ChartTooltipContent = React34__namespace.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React34__namespace.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("font-medium", labelClassName), children: value });
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: obsCn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: obsCn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      className: obsCn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs(
                    "div",
                    {
                      className: obsCn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive__namespace.Legend;
var ChartLegendContent = React34__namespace.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: obsCn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
      children: payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: obsCn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsxRuntime.jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          item.value
        );
      })
    }
  );
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
var Checkbox = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CheckboxPrimitive__namespace.Root,
  {
    ref,
    className: obsCn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: obsCn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive__namespace.CollapsibleContent;
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: obsCn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    DialogPrimitive__namespace.Content,
    {
      ref,
      className: obsCn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: obsCn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref, className: obsCn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var Command = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command,
  {
    ref,
    className: obsCn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntime.jsx(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
var CommandInput = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Input,
    {
      ref,
      className: obsCn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = cmdk.Command.Input.displayName;
var CommandList = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.List,
  {
    ref,
    className: obsCn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = cmdk.Command.List.displayName;
var CommandEmpty = React34__namespace.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntime.jsx(cmdk.Command.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
var CommandGroup = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Group,
  {
    ref,
    className: obsCn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = cmdk.Command.Group.displayName;
var CommandSeparator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(cmdk.Command.Separator, { ref, className: obsCn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
var CommandItem = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  cmdk.Command.Item,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = cmdk.Command.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: obsCn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props });
};
CommandShortcut.displayName = "CommandShortcut";
var ContextMenu = ContextMenuPrimitive__namespace.Root;
var ContextMenuTrigger = ContextMenuPrimitive__namespace.Trigger;
var ContextMenuGroup = ContextMenuPrimitive__namespace.Group;
var ContextMenuPortal = ContextMenuPrimitive__namespace.Portal;
var ContextMenuSub = ContextMenuPrimitive__namespace.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive__namespace.RadioGroup;
var ContextMenuSubTrigger = React34__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ContextMenuPrimitive__namespace.SubTrigger,
  {
    ref,
    className: obsCn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive__namespace.SubTrigger.displayName;
var ContextMenuSubContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ContextMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: obsCn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuPrimitive__namespace.SubContent.displayName;
var ContextMenuContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  ContextMenuPrimitive__namespace.Content,
  {
    ref,
    className: obsCn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
ContextMenuContent.displayName = ContextMenuPrimitive__namespace.Content.displayName;
var ContextMenuItem = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ContextMenuPrimitive__namespace.Item,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuPrimitive__namespace.Item.displayName;
var ContextMenuCheckboxItem = React34__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ContextMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive__namespace.CheckboxItem.displayName;
var ContextMenuRadioItem = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  ContextMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive__namespace.RadioItem.displayName;
var ContextMenuLabel = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ContextMenuPrimitive__namespace.Label,
  {
    ref,
    className: obsCn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuPrimitive__namespace.Label.displayName;
var ContextMenuSeparator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(ContextMenuPrimitive__namespace.Separator, { ref, className: obsCn("-mx-1 my-1 h-px bg-border", className), ...props }));
ContextMenuSeparator.displayName = ContextMenuPrimitive__namespace.Separator.displayName;
var ContextMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: obsCn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props });
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
var Drawer = ({ shouldScaleBackground = true, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Root, { shouldScaleBackground, ...props });
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul.Drawer.Trigger;
var DrawerPortal = vaul.Drawer.Portal;
var DrawerClose = vaul.Drawer.Close;
var DrawerOverlay = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Overlay, { ref, className: obsCn("fixed inset-0 z-50 bg-black/80", className), ...props }));
DrawerOverlay.displayName = vaul.Drawer.Overlay.displayName;
var DrawerContent = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    vaul.Drawer.Content,
    {
      ref,
      className: obsCn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("grid gap-1.5 p-4 text-center sm:text-left", className), ...props });
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("mt-auto flex flex-col gap-2 p-4", className), ...props });
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  vaul.Drawer.Title,
  {
    ref,
    className: obsCn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DrawerTitle.displayName = vaul.Drawer.Title.displayName;
var DrawerDescription = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Description, { ref, className: obsCn("text-sm text-muted-foreground", className), ...props }));
DrawerDescription.displayName = vaul.Drawer.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React34__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
  {
    ref,
    className: obsCn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: obsCn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React34__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: obsCn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React34__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
  {
    ref,
    className: obsCn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref, className: obsCn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: obsCn("ml-auto text-xs tracking-widest opacity-60", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label3 = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(LabelPrimitive__namespace.Root, { ref, className: obsCn(labelVariants(), className), ...props }));
Label3.displayName = LabelPrimitive__namespace.Root.displayName;
var Form = reactHookForm.FormProvider;
var FormFieldContext = React34__namespace.createContext({});
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React34__namespace.useContext(FormFieldContext);
  const itemContext = React34__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = reactHookForm.useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React34__namespace.createContext({});
var FormItem = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    const id = React34__namespace.useId();
    return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("space-y-2", className), ...props }) });
  }
);
FormItem.displayName = "FormItem";
var FormLabel = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(Label3, { ref, className: obsCn(error && "text-destructive", className), htmlFor: formItemId, ...props });
});
FormLabel.displayName = "FormLabel";
var FormControl = React34__namespace.forwardRef(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsxRuntime.jsx(
      reactSlot.Slot,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescription = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsxRuntime.jsx("p", { ref, id: formDescriptionId, className: obsCn("text-sm text-muted-foreground", className), ...props });
  }
);
FormDescription.displayName = "FormDescription";
var FormMessage = React34__namespace.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx("p", { ref, id: formMessageId, className: obsCn("text-sm font-medium text-destructive", className), ...props, children: body });
  }
);
FormMessage.displayName = "FormMessage";
var HoverCard = HoverCardPrimitive__namespace.Root;
var HoverCardTrigger = HoverCardPrimitive__namespace.Trigger;
var HoverCardContent = React34__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  HoverCardPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: obsCn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive__namespace.Content.displayName;
var InputOTP = React34__namespace.forwardRef(
  ({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    inputOtp.OTPInput,
    {
      ref,
      containerClassName: obsCn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
      className: obsCn("disabled:cursor-not-allowed", className),
      ...props
    }
  )
);
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: obsCn("flex items-center", className), ...props })
);
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React34__namespace.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React34__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      className: obsCn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React34__namespace.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, role: "separator", ...props, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Dot, {}) })
);
InputOTPSeparator.displayName = "InputOTPSeparator";
var Input = React34__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        type,
        className: obsCn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var MenubarMenu = MenubarPrimitive__namespace.Menu;
var MenubarGroup = MenubarPrimitive__namespace.Group;
var MenubarPortal = MenubarPrimitive__namespace.Portal;
var MenubarSub = MenubarPrimitive__namespace.Sub;
var MenubarRadioGroup = MenubarPrimitive__namespace.RadioGroup;
var Menubar = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Root,
  {
    ref,
    className: obsCn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive__namespace.Root.displayName;
var MenubarTrigger = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Trigger,
  {
    ref,
    className: obsCn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive__namespace.Trigger.displayName;
var MenubarSubTrigger = React34__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.SubTrigger,
  {
    ref,
    className: obsCn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive__namespace.SubTrigger.displayName;
var MenubarSubContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.SubContent,
  {
    ref,
    className: obsCn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive__namespace.SubContent.displayName;
var MenubarContent = React34__namespace.forwardRef(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Content,
  {
    ref,
    align,
    alignOffset,
    sideOffset,
    className: obsCn(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
MenubarContent.displayName = MenubarPrimitive__namespace.Content.displayName;
var MenubarItem = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Item,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive__namespace.Item.displayName;
var MenubarCheckboxItem = React34__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive__namespace.CheckboxItem.displayName;
var MenubarRadioItem = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  MenubarPrimitive__namespace.RadioItem,
  {
    ref,
    className: obsCn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive__namespace.RadioItem.displayName;
var MenubarLabel = React34__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  MenubarPrimitive__namespace.Label,
  {
    ref,
    className: obsCn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive__namespace.Label.displayName;
var MenubarSeparator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(MenubarPrimitive__namespace.Separator, { ref, className: obsCn("-mx-1 my-1 h-px bg-muted", className), ...props }));
MenubarSeparator.displayName = MenubarPrimitive__namespace.Separator.displayName;
var MenubarShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: obsCn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props });
};
MenubarShortcut.displayname = "MenubarShortcut";
var NavigationMenu = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Root,
  {
    ref,
    className: obsCn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive__namespace.Root.displayName;
var NavigationMenuList = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.List,
  {
    ref,
    className: obsCn("group flex flex-1 list-none items-center justify-center space-x-1", className),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive__namespace.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive__namespace.Item;
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  NavigationMenuPrimitive__namespace.Trigger,
  {
    ref,
    className: obsCn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Content,
  {
    ref,
    className: obsCn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive__namespace.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive__namespace.Link;
var NavigationMenuViewport = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Viewport,
  {
    className: obsCn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive__namespace.Viewport.displayName;
var NavigationMenuIndicator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  NavigationMenuPrimitive__namespace.Indicator,
  {
    ref,
    className: obsCn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive__namespace.Indicator.displayName;
var Pagination = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: obsCn("mx-auto flex w-full justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("ul", { ref, className: obsCn("flex flex-row items-center gap-1", className), ...props })
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, className: obsCn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: obsCn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size
      }),
      className
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: obsCn("gap-1 pl-2.5", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Previous" })
] });
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsxs(PaginationLink, { "aria-label": "Go to next page", size: "default", className: obsCn("gap-1 pr-2.5", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Next" }),
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
] });
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsxs("span", { "aria-hidden": true, className: obsCn("flex h-9 w-9 items-center justify-center", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
] });
PaginationEllipsis.displayName = "PaginationEllipsis";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React34__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: obsCn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var Progress = React34__namespace.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ProgressPrimitive__namespace.Root,
  {
    ref,
    className: obsCn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      ProgressPrimitive__namespace.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive__namespace.Root.displayName;
var RadioGroup4 = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Root, { className: obsCn("grid gap-2", className), ...props, ref });
});
RadioGroup4.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      className: obsCn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx(
  ResizablePrimitive__namespace.PanelGroup,
  {
    className: obsCn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
    ...props
  }
);
var ResizablePanel = ResizablePrimitive__namespace.Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
  ResizablePrimitive__namespace.PanelResizeHandle,
  {
    className: obsCn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.GripVertical, { className: "h-2.5 w-2.5" }) })
  }
);
var ScrollArea = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(ScrollAreaPrimitive__namespace.Root, { ref, className: obsCn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsxRuntime.jsx(ScrollBar, {}),
  /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})
] }));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React34__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: obsCn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: obsCn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollUpButton,
  {
    ref,
    className: obsCn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollDownButton,
  {
    ref,
    className: obsCn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React34__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: obsCn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        SelectPrimitive__namespace.Viewport,
        {
          className: obsCn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Label, { ref, className: obsCn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React34__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: obsCn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Separator, { ref, className: obsCn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Separator5 = React34__namespace.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SeparatorPrimitive__namespace.Root,
  {
    ref,
    decorative,
    orientation,
    className: obsCn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
    ...props
  }
));
Separator5.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    className: obsCn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React34__namespace.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Content, { ref, className: obsCn(sheetVariants({ side }), className), ...props, children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref, className: obsCn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var SheetDescription = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref, className: obsCn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: obsCn("animate-pulse rounded-md bg-muted", className), ...props });
}
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip2 = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React34__namespace.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: obsCn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var SIDEBAR_COOKIE_NAME = "sidebar:state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React34__namespace.createContext(null);
function useSidebar() {
  const context = React34__namespace.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
var SidebarProvider = React34__namespace.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React34__namespace.useState(false);
  const [_open, _setOpen] = React34__namespace.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React34__namespace.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React34__namespace.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React34__namespace.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React34__namespace.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: obsCn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
      ref,
      ...props,
      children
    }
  ) }) });
});
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React34__namespace.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: obsCn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
        ref,
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsxRuntime.jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxRuntime.jsx(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full w-full flex-col", children })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: obsCn(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: obsCn(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children
              }
            )
          }
        )
      ]
    }
  );
});
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React34__namespace.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: obsCn("h-7 w-7", className),
        onClick: (event) => {
          onClick?.(event);
          toggleSidebar();
        },
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PanelLeft, {}),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: obsCn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "main",
    {
      ref,
      className: obsCn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Input,
      {
        ref,
        "data-sidebar": "input",
        className: obsCn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className
        ),
        ...props
      }
    );
  }
);
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, "data-sidebar": "header", className: obsCn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref, "data-sidebar": "footer", className: obsCn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Separator5,
      {
        ref,
        "data-sidebar": "separator",
        className: obsCn("mx-2 w-auto bg-sidebar-border", className),
        ...props
      }
    );
  }
);
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: obsCn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: obsCn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React34__namespace.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "div";
    return /* @__PURE__ */ jsxRuntime.jsx(
      Comp,
      {
        ref,
        "data-sidebar": "group-label",
        className: obsCn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className
        ),
        ...props
      }
    );
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React34__namespace.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
      Comp,
      {
        ref,
        "data-sidebar": "group-action",
        className: obsCn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, "data-sidebar": "group-content", className: obsCn("w-full text-sm", className), ...props })
);
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("ul", { ref, "data-sidebar": "menu", className: obsCn("flex w-full min-w-0 flex-col gap-1", className), ...props }));
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, "data-sidebar": "menu-item", className: obsCn("group/menu-item relative", className), ...props }));
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = classVarianceAuthority.cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var SidebarMenuButton = React34__namespace.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: obsCn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Tooltip2, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsxRuntime.jsx(TooltipContent, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })
  ] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React34__namespace.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: obsCn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      "data-sidebar": "menu-badge",
      className: obsCn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React34__namespace.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React34__namespace.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: obsCn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu-sub",
      className: obsCn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React34__namespace.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React34__namespace.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: obsCn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
var Slider = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SliderPrimitive__namespace.Root,
  {
    ref,
    className: obsCn("relative flex w-full touch-none select-none items-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var Toaster = ({ ...props }) => {
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
var Switch = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SwitchPrimitives__namespace.Root,
  {
    className: obsCn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntime.jsx(
      SwitchPrimitives__namespace.Thumb,
      {
        className: obsCn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Table = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx("table", { ref, className: obsCn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
var TableHeader = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("thead", { ref, className: obsCn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
var TableBody = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tbody", { ref, className: obsCn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
var TableFooter = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("tfoot", { ref, className: obsCn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
var TableRow = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      ref,
      className: obsCn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    {
      ref,
      className: obsCn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
var TableCell = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("td", { ref, className: obsCn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props })
);
TableCell.displayName = "TableCell";
var TableCaption = React34__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("caption", { ref, className: obsCn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.List,
  {
    ref,
    className: obsCn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Trigger,
  {
    ref,
    className: obsCn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TabsPrimitive__namespace.Content,
  {
    ref,
    className: obsCn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var Textarea = React34__namespace.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      className: obsCn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Viewport,
  {
    ref,
    className: obsCn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React34__namespace.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(ToastPrimitives__namespace.Root, { ref, className: obsCn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Action,
  {
    ref,
    className: obsCn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  ToastPrimitives__namespace.Close,
  {
    ref,
    className: obsCn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(ToastPrimitives__namespace.Title, { ref, className: obsCn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React34__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(ToastPrimitives__namespace.Description, { ref, className: obsCn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
function Toaster2() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxRuntime.jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntime.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntime.jsx(ToastViewport, {})
  ] });
}
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React34__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(TogglePrimitive__namespace.Root, { ref, className: obsCn(toggleVariants({ variant, size, className })), ...props }));
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;
var ToggleGroupContext = React34__namespace.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React34__namespace.forwardRef(({ className, variant, size, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupPrimitive__namespace.Root, { ref, className: obsCn("flex items-center justify-center gap-1", className), ...props, children: /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children }) }));
ToggleGroup.displayName = ToggleGroupPrimitive__namespace.Root.displayName;
var ToggleGroupItem = React34__namespace.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React34__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Item,
    {
      ref,
      className: obsCn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive__namespace.Item.displayName;

Object.defineProperty(exports, "obsSonnerToast", {
  enumerable: true,
  get: function () { return sonner.toast; }
});
exports.ObsAccordion = Accordion;
exports.ObsAccordionContent = AccordionContent;
exports.ObsAccordionItem = AccordionItem;
exports.ObsAccordionTrigger = AccordionTrigger;
exports.ObsAlert = Alert;
exports.ObsAlertDescription = AlertDescription;
exports.ObsAlertDialog = AlertDialog;
exports.ObsAlertDialogAction = AlertDialogAction;
exports.ObsAlertDialogCancel = AlertDialogCancel;
exports.ObsAlertDialogContent = AlertDialogContent;
exports.ObsAlertDialogDescription = AlertDialogDescription;
exports.ObsAlertDialogFooter = AlertDialogFooter;
exports.ObsAlertDialogHeader = AlertDialogHeader;
exports.ObsAlertDialogOverlay = AlertDialogOverlay;
exports.ObsAlertDialogPortal = AlertDialogPortal;
exports.ObsAlertDialogTitle = AlertDialogTitle;
exports.ObsAlertDialogTrigger = AlertDialogTrigger;
exports.ObsAlertTitle = AlertTitle;
exports.ObsAspectRatio = AspectRatio;
exports.ObsAvatar = Avatar;
exports.ObsAvatarFallback = AvatarFallback;
exports.ObsAvatarImage = AvatarImage;
exports.ObsBadge = Badge;
exports.ObsBreadcrumb = Breadcrumb;
exports.ObsBreadcrumbEllipsis = BreadcrumbEllipsis;
exports.ObsBreadcrumbItem = BreadcrumbItem;
exports.ObsBreadcrumbLink = BreadcrumbLink;
exports.ObsBreadcrumbList = BreadcrumbList;
exports.ObsBreadcrumbPage = BreadcrumbPage;
exports.ObsBreadcrumbSeparator = BreadcrumbSeparator;
exports.ObsBreadcrumbs = ObsBreadcrumbs;
exports.ObsButton = Button;
exports.ObsCalendar = Calendar;
exports.ObsCard = Card;
exports.ObsCardContent = CardContent;
exports.ObsCardDescription = CardDescription;
exports.ObsCardFooter = CardFooter;
exports.ObsCardHeader = CardHeader;
exports.ObsCardTitle = CardTitle;
exports.ObsCarousel = Carousel;
exports.ObsCarouselContent = CarouselContent;
exports.ObsCarouselItem = CarouselItem;
exports.ObsCarouselNext = CarouselNext;
exports.ObsCarouselPrevious = CarouselPrevious;
exports.ObsChartContainer = ChartContainer;
exports.ObsChartLegend = ChartLegend;
exports.ObsChartLegendContent = ChartLegendContent;
exports.ObsChartStyle = ChartStyle;
exports.ObsChartTooltip = ChartTooltip;
exports.ObsChartTooltipContent = ChartTooltipContent;
exports.ObsCheckbox = Checkbox;
exports.ObsCollapsible = Collapsible;
exports.ObsCollapsibleContent = CollapsibleContent2;
exports.ObsCollapsibleTrigger = CollapsibleTrigger2;
exports.ObsCommand = Command;
exports.ObsCommandDialog = CommandDialog;
exports.ObsCommandEmpty = CommandEmpty;
exports.ObsCommandGroup = CommandGroup;
exports.ObsCommandInput = CommandInput;
exports.ObsCommandItem = CommandItem;
exports.ObsCommandList = CommandList;
exports.ObsCommandSeparator = CommandSeparator;
exports.ObsCommandShortcut = CommandShortcut;
exports.ObsContextMenu = ContextMenu;
exports.ObsContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ObsContextMenuContent = ContextMenuContent;
exports.ObsContextMenuGroup = ContextMenuGroup;
exports.ObsContextMenuItem = ContextMenuItem;
exports.ObsContextMenuLabel = ContextMenuLabel;
exports.ObsContextMenuPortal = ContextMenuPortal;
exports.ObsContextMenuRadioGroup = ContextMenuRadioGroup;
exports.ObsContextMenuRadioItem = ContextMenuRadioItem;
exports.ObsContextMenuSeparator = ContextMenuSeparator;
exports.ObsContextMenuShortcut = ContextMenuShortcut;
exports.ObsContextMenuSub = ContextMenuSub;
exports.ObsContextMenuSubContent = ContextMenuSubContent;
exports.ObsContextMenuSubTrigger = ContextMenuSubTrigger;
exports.ObsContextMenuTrigger = ContextMenuTrigger;
exports.ObsDialog = Dialog;
exports.ObsDialogClose = DialogClose;
exports.ObsDialogContent = DialogContent;
exports.ObsDialogDescription = DialogDescription;
exports.ObsDialogFooter = DialogFooter;
exports.ObsDialogHeader = DialogHeader;
exports.ObsDialogOverlay = DialogOverlay;
exports.ObsDialogPortal = DialogPortal;
exports.ObsDialogTitle = DialogTitle;
exports.ObsDialogTrigger = DialogTrigger;
exports.ObsDrawer = Drawer;
exports.ObsDrawerClose = DrawerClose;
exports.ObsDrawerContent = DrawerContent;
exports.ObsDrawerDescription = DrawerDescription;
exports.ObsDrawerFooter = DrawerFooter;
exports.ObsDrawerHeader = DrawerHeader;
exports.ObsDrawerOverlay = DrawerOverlay;
exports.ObsDrawerPortal = DrawerPortal;
exports.ObsDrawerTitle = DrawerTitle;
exports.ObsDrawerTrigger = DrawerTrigger;
exports.ObsDropdownMenu = DropdownMenu;
exports.ObsDropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.ObsDropdownMenuContent = DropdownMenuContent;
exports.ObsDropdownMenuGroup = DropdownMenuGroup;
exports.ObsDropdownMenuItem = DropdownMenuItem;
exports.ObsDropdownMenuLabel = DropdownMenuLabel;
exports.ObsDropdownMenuPortal = DropdownMenuPortal;
exports.ObsDropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.ObsDropdownMenuRadioItem = DropdownMenuRadioItem;
exports.ObsDropdownMenuSeparator = DropdownMenuSeparator;
exports.ObsDropdownMenuShortcut = DropdownMenuShortcut;
exports.ObsDropdownMenuSub = DropdownMenuSub;
exports.ObsDropdownMenuSubContent = DropdownMenuSubContent;
exports.ObsDropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.ObsDropdownMenuTrigger = DropdownMenuTrigger;
exports.ObsFadeIn = ObsFadeIn;
exports.ObsForm = Form;
exports.ObsFormControl = FormControl;
exports.ObsFormDescription = FormDescription;
exports.ObsFormField = FormField;
exports.ObsFormItem = FormItem;
exports.ObsFormLabel = FormLabel;
exports.ObsFormMessage = FormMessage;
exports.ObsHoverCard = HoverCard;
exports.ObsHoverCardContent = HoverCardContent;
exports.ObsHoverCardTrigger = HoverCardTrigger;
exports.ObsInput = Input;
exports.ObsInputOTP = InputOTP;
exports.ObsInputOTPGroup = InputOTPGroup;
exports.ObsInputOTPSeparator = InputOTPSeparator;
exports.ObsInputOTPSlot = InputOTPSlot;
exports.ObsLabel = Label3;
exports.ObsMarquee = ObsMarquee;
exports.ObsMenubar = Menubar;
exports.ObsMenubarCheckboxItem = MenubarCheckboxItem;
exports.ObsMenubarContent = MenubarContent;
exports.ObsMenubarGroup = MenubarGroup;
exports.ObsMenubarItem = MenubarItem;
exports.ObsMenubarLabel = MenubarLabel;
exports.ObsMenubarMenu = MenubarMenu;
exports.ObsMenubarPortal = MenubarPortal;
exports.ObsMenubarRadioGroup = MenubarRadioGroup;
exports.ObsMenubarRadioItem = MenubarRadioItem;
exports.ObsMenubarSeparator = MenubarSeparator;
exports.ObsMenubarShortcut = MenubarShortcut;
exports.ObsMenubarSub = MenubarSub;
exports.ObsMenubarSubContent = MenubarSubContent;
exports.ObsMenubarSubTrigger = MenubarSubTrigger;
exports.ObsMenubarTrigger = MenubarTrigger;
exports.ObsNDABanner = ObsNDABanner;
exports.ObsNavigationMenu = NavigationMenu;
exports.ObsNavigationMenuContent = NavigationMenuContent;
exports.ObsNavigationMenuIndicator = NavigationMenuIndicator;
exports.ObsNavigationMenuItem = NavigationMenuItem;
exports.ObsNavigationMenuLink = NavigationMenuLink;
exports.ObsNavigationMenuList = NavigationMenuList;
exports.ObsNavigationMenuTrigger = NavigationMenuTrigger;
exports.ObsNavigationMenuViewport = NavigationMenuViewport;
exports.ObsNoticeBanner = ObsNoticeBanner;
exports.ObsPagination = Pagination;
exports.ObsPaginationContent = PaginationContent;
exports.ObsPaginationEllipsis = PaginationEllipsis;
exports.ObsPaginationItem = PaginationItem;
exports.ObsPaginationLink = PaginationLink;
exports.ObsPaginationNext = PaginationNext;
exports.ObsPaginationPrevious = PaginationPrevious;
exports.ObsPopover = Popover;
exports.ObsPopoverContent = PopoverContent;
exports.ObsPopoverTrigger = PopoverTrigger;
exports.ObsProgress = Progress;
exports.ObsRadioGroup = RadioGroup4;
exports.ObsRadioGroupItem = RadioGroupItem;
exports.ObsResizableHandle = ResizableHandle;
exports.ObsResizablePanel = ResizablePanel;
exports.ObsResizablePanelGroup = ResizablePanelGroup;
exports.ObsScrollArea = ScrollArea;
exports.ObsScrollBar = ScrollBar;
exports.ObsSelect = Select;
exports.ObsSelectContent = SelectContent;
exports.ObsSelectGroup = SelectGroup;
exports.ObsSelectItem = SelectItem;
exports.ObsSelectLabel = SelectLabel;
exports.ObsSelectScrollDownButton = SelectScrollDownButton;
exports.ObsSelectScrollUpButton = SelectScrollUpButton;
exports.ObsSelectSeparator = SelectSeparator;
exports.ObsSelectTrigger = SelectTrigger;
exports.ObsSelectValue = SelectValue;
exports.ObsSeparator = Separator5;
exports.ObsSheet = Sheet;
exports.ObsSheetClose = SheetClose;
exports.ObsSheetContent = SheetContent;
exports.ObsSheetDescription = SheetDescription;
exports.ObsSheetFooter = SheetFooter;
exports.ObsSheetHeader = SheetHeader;
exports.ObsSheetOverlay = SheetOverlay;
exports.ObsSheetPortal = SheetPortal;
exports.ObsSheetTitle = SheetTitle;
exports.ObsSheetTrigger = SheetTrigger;
exports.ObsSidebar = Sidebar;
exports.ObsSidebarContent = SidebarContent;
exports.ObsSidebarFooter = SidebarFooter;
exports.ObsSidebarGroup = SidebarGroup;
exports.ObsSidebarGroupAction = SidebarGroupAction;
exports.ObsSidebarGroupContent = SidebarGroupContent;
exports.ObsSidebarGroupLabel = SidebarGroupLabel;
exports.ObsSidebarHeader = SidebarHeader;
exports.ObsSidebarInput = SidebarInput;
exports.ObsSidebarInset = SidebarInset;
exports.ObsSidebarMenu = SidebarMenu;
exports.ObsSidebarMenuAction = SidebarMenuAction;
exports.ObsSidebarMenuBadge = SidebarMenuBadge;
exports.ObsSidebarMenuButton = SidebarMenuButton;
exports.ObsSidebarMenuItem = SidebarMenuItem;
exports.ObsSidebarMenuSkeleton = SidebarMenuSkeleton;
exports.ObsSidebarMenuSub = SidebarMenuSub;
exports.ObsSidebarMenuSubButton = SidebarMenuSubButton;
exports.ObsSidebarMenuSubItem = SidebarMenuSubItem;
exports.ObsSidebarProvider = SidebarProvider;
exports.ObsSidebarRail = SidebarRail;
exports.ObsSidebarSeparator = SidebarSeparator;
exports.ObsSidebarTrigger = SidebarTrigger;
exports.ObsSiteMasthead = ObsSiteMasthead;
exports.ObsSkeleton = Skeleton;
exports.ObsSlider = Slider;
exports.ObsSonnerToaster = Toaster;
exports.ObsSwitch = Switch;
exports.ObsTable = Table;
exports.ObsTableBody = TableBody;
exports.ObsTableCaption = TableCaption;
exports.ObsTableCell = TableCell;
exports.ObsTableFooter = TableFooter;
exports.ObsTableHead = TableHead;
exports.ObsTableHeader = TableHeader;
exports.ObsTableRow = TableRow;
exports.ObsTabs = Tabs;
exports.ObsTabsContent = TabsContent;
exports.ObsTabsList = TabsList;
exports.ObsTabsTrigger = TabsTrigger;
exports.ObsTextarea = Textarea;
exports.ObsToast = Toast;
exports.ObsToastAction = ToastAction;
exports.ObsToastClose = ToastClose;
exports.ObsToastDescription = ToastDescription;
exports.ObsToastProvider = ToastProvider;
exports.ObsToastTitle = ToastTitle;
exports.ObsToastViewport = ToastViewport;
exports.ObsToaster = Toaster2;
exports.ObsToggle = Toggle;
exports.ObsToggleGroup = ToggleGroup;
exports.ObsToggleGroupItem = ToggleGroupItem;
exports.ObsTooltip = Tooltip2;
exports.ObsTooltipContent = TooltipContent;
exports.ObsTooltipProvider = TooltipProvider;
exports.ObsTooltipTrigger = TooltipTrigger;
exports.cn = obsCn;
exports.obsBadgeVariants = badgeVariants;
exports.obsButtonVariants = buttonVariants;
exports.obsCn = obsCn;
exports.obsNavigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.obsToast = toast;
exports.obsToggleVariants = toggleVariants;
exports.useObsFormField = useFormField;
exports.useObsMobile = useIsMobile;
exports.useObsSidebar = useSidebar;
exports.useObsToast = useToast;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map