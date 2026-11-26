// Obsess Design System (@sady143/obsess-ds)
// Utilities & Tokens
export { obsCn, cn } from "./lib/obs-utils";
export { OBS_COLORS, type ObsColorToken, type ObsColorGroup } from "./lib/obs-colors";

// Hooks
export { useIsMobile as useObsMobile } from "./hooks/obs-use-mobile";
export { useToast as useObsToast, toast as obsToast } from "./hooks/obs-use-toast";

// Patterns
export { ObsSiteMasthead, type ObsSiteMastheadProps } from "./components/patterns/obs-site-masthead";
export { ObsFadeIn, type ObsFadeInProps } from "./components/patterns/obs-fade-in";
export { ObsMarquee, type ObsMarqueeProps } from "./components/patterns/obs-marquee";
export {
  ObsBreadcrumbs,
  type ObsBreadcrumbsItem,
  type ObsBreadcrumbLinkProps,
  type ObsBreadcrumbsProps,
} from "./components/patterns/obs-breadcrumbs";
export {
  ObsNoticeBanner,
  ObsNDABanner,
  type ObsNoticeBannerProps,
} from "./components/patterns/obs-notice-banner";
export {
  OBS_GRID_BREAKPOINTS,
  resolveObsBreakpoint,
  useObsBreakpoint,
  ObsGridContainer,
  ObsGrid,
  ObsGridItem,
  ObsGridOverlay,
  type ObsBreakpoint,
  type ObsBreakpointSpec,
  type ObsBreakpointState,
  type ObsGridContainerProps,
  type ObsGridProps,
  type ObsGridSpanValue,
  type ObsResponsiveSpan,
  type ObsResponsiveStart,
  type ObsGridItemProps,
  type ObsGridOverlayProps,
} from "./components/patterns/obs-grid";
export {
  ObsModal,
  type ObsModalProps,
  type ObsModalSize,
} from "./components/patterns/obs-modal";

// UI Primitives (obs-* prefixed)
export {
  Accordion as ObsAccordion,
  AccordionItem as ObsAccordionItem,
  AccordionTrigger as ObsAccordionTrigger,
  AccordionContent as ObsAccordionContent,
} from "./components/ui/obs-accordion";

export {
  AlertDialog as ObsAlertDialog,
  AlertDialogPortal as ObsAlertDialogPortal,
  AlertDialogOverlay as ObsAlertDialogOverlay,
  AlertDialogTrigger as ObsAlertDialogTrigger,
  AlertDialogContent as ObsAlertDialogContent,
  AlertDialogHeader as ObsAlertDialogHeader,
  AlertDialogFooter as ObsAlertDialogFooter,
  AlertDialogTitle as ObsAlertDialogTitle,
  AlertDialogDescription as ObsAlertDialogDescription,
  AlertDialogAction as ObsAlertDialogAction,
  AlertDialogCancel as ObsAlertDialogCancel,
} from "./components/ui/obs-alert-dialog";

export {
  Alert as ObsAlert,
  AlertTitle as ObsAlertTitle,
  AlertDescription as ObsAlertDescription,
} from "./components/ui/obs-alert";

export {
  AspectRatio as ObsAspectRatio,
} from "./components/ui/obs-aspect-ratio";

export {
  Avatar as ObsAvatar,
  AvatarImage as ObsAvatarImage,
  AvatarFallback as ObsAvatarFallback,
} from "./components/ui/obs-avatar";

export {
  Badge as ObsBadge,
  badgeVariants as obsBadgeVariants,
  type BadgeProps as ObsBadgeProps,
} from "./components/ui/obs-badge";

export {
  Breadcrumb as ObsBreadcrumb,
  BreadcrumbList as ObsBreadcrumbList,
  BreadcrumbItem as ObsBreadcrumbItem,
  BreadcrumbLink as ObsBreadcrumbLink,
  BreadcrumbPage as ObsBreadcrumbPage,
  BreadcrumbSeparator as ObsBreadcrumbSeparator,
  BreadcrumbEllipsis as ObsBreadcrumbEllipsis,
} from "./components/ui/obs-breadcrumb";

export {
  Button as ObsButton,
  buttonVariants as obsButtonVariants,
  type ButtonProps as ObsButtonProps,
} from "./components/ui/obs-button";

export {
  Calendar as ObsCalendar,
  type CalendarProps as ObsCalendarProps,
} from "./components/ui/obs-calendar";

export {
  Card as ObsCard,
  CardHeader as ObsCardHeader,
  CardFooter as ObsCardFooter,
  CardTitle as ObsCardTitle,
  CardDescription as ObsCardDescription,
  CardContent as ObsCardContent,
} from "./components/ui/obs-card";

export {
  type CarouselApi as ObsCarouselApi,
  Carousel as ObsCarousel,
  CarouselContent as ObsCarouselContent,
  CarouselItem as ObsCarouselItem,
  CarouselPrevious as ObsCarouselPrevious,
  CarouselNext as ObsCarouselNext,
} from "./components/ui/obs-carousel";

export {
  ChartContainer as ObsChartContainer,
  ChartTooltip as ObsChartTooltip,
  ChartTooltipContent as ObsChartTooltipContent,
  ChartLegend as ObsChartLegend,
  ChartLegendContent as ObsChartLegendContent,
  ChartStyle as ObsChartStyle,
  type ChartConfig as ObsChartConfig,
} from "./components/ui/obs-chart";

export {
  Checkbox as ObsCheckbox,
} from "./components/ui/obs-checkbox";

export {
  Collapsible as ObsCollapsible,
  CollapsibleTrigger as ObsCollapsibleTrigger,
  CollapsibleContent as ObsCollapsibleContent,
} from "./components/ui/obs-collapsible";

export {
  Command as ObsCommand,
  CommandDialog as ObsCommandDialog,
  CommandInput as ObsCommandInput,
  CommandList as ObsCommandList,
  CommandEmpty as ObsCommandEmpty,
  CommandGroup as ObsCommandGroup,
  CommandItem as ObsCommandItem,
  CommandShortcut as ObsCommandShortcut,
  CommandSeparator as ObsCommandSeparator,
} from "./components/ui/obs-command";

export {
  ContextMenu as ObsContextMenu,
  ContextMenuTrigger as ObsContextMenuTrigger,
  ContextMenuContent as ObsContextMenuContent,
  ContextMenuItem as ObsContextMenuItem,
  ContextMenuCheckboxItem as ObsContextMenuCheckboxItem,
  ContextMenuRadioItem as ObsContextMenuRadioItem,
  ContextMenuLabel as ObsContextMenuLabel,
  ContextMenuSeparator as ObsContextMenuSeparator,
  ContextMenuShortcut as ObsContextMenuShortcut,
  ContextMenuGroup as ObsContextMenuGroup,
  ContextMenuPortal as ObsContextMenuPortal,
  ContextMenuSub as ObsContextMenuSub,
  ContextMenuSubContent as ObsContextMenuSubContent,
  ContextMenuSubTrigger as ObsContextMenuSubTrigger,
  ContextMenuRadioGroup as ObsContextMenuRadioGroup,
} from "./components/ui/obs-context-menu";

export {
  Dialog as ObsDialog,
  DialogPortal as ObsDialogPortal,
  DialogOverlay as ObsDialogOverlay,
  DialogClose as ObsDialogClose,
  DialogTrigger as ObsDialogTrigger,
  DialogContent as ObsDialogContent,
  DialogHeader as ObsDialogHeader,
  DialogFooter as ObsDialogFooter,
  DialogTitle as ObsDialogTitle,
  DialogDescription as ObsDialogDescription,
} from "./components/ui/obs-dialog";

export {
  Drawer as ObsDrawer,
  DrawerPortal as ObsDrawerPortal,
  DrawerOverlay as ObsDrawerOverlay,
  DrawerTrigger as ObsDrawerTrigger,
  DrawerClose as ObsDrawerClose,
  DrawerContent as ObsDrawerContent,
  DrawerHeader as ObsDrawerHeader,
  DrawerFooter as ObsDrawerFooter,
  DrawerTitle as ObsDrawerTitle,
  DrawerDescription as ObsDrawerDescription,
} from "./components/ui/obs-drawer";

export {
  DropdownMenu as ObsDropdownMenu,
  DropdownMenuTrigger as ObsDropdownMenuTrigger,
  DropdownMenuContent as ObsDropdownMenuContent,
  DropdownMenuItem as ObsDropdownMenuItem,
  DropdownMenuCheckboxItem as ObsDropdownMenuCheckboxItem,
  DropdownMenuRadioItem as ObsDropdownMenuRadioItem,
  DropdownMenuLabel as ObsDropdownMenuLabel,
  DropdownMenuSeparator as ObsDropdownMenuSeparator,
  DropdownMenuShortcut as ObsDropdownMenuShortcut,
  DropdownMenuGroup as ObsDropdownMenuGroup,
  DropdownMenuPortal as ObsDropdownMenuPortal,
  DropdownMenuSub as ObsDropdownMenuSub,
  DropdownMenuSubContent as ObsDropdownMenuSubContent,
  DropdownMenuSubTrigger as ObsDropdownMenuSubTrigger,
  DropdownMenuRadioGroup as ObsDropdownMenuRadioGroup,
} from "./components/ui/obs-dropdown-menu";

export {
  useFormField as useObsFormField,
  Form as ObsForm,
  FormItem as ObsFormItem,
  FormLabel as ObsFormLabel,
  FormControl as ObsFormControl,
  FormDescription as ObsFormDescription,
  FormMessage as ObsFormMessage,
  FormField as ObsFormField,
} from "./components/ui/obs-form";

export {
  HoverCard as ObsHoverCard,
  HoverCardTrigger as ObsHoverCardTrigger,
  HoverCardContent as ObsHoverCardContent,
} from "./components/ui/obs-hover-card";

export {
  InputOTP as ObsInputOTP,
  InputOTPGroup as ObsInputOTPGroup,
  InputOTPSlot as ObsInputOTPSlot,
  InputOTPSeparator as ObsInputOTPSeparator,
} from "./components/ui/obs-input-otp";

export {
  Input as ObsInput,
} from "./components/ui/obs-input";

export {
  Label as ObsLabel,
} from "./components/ui/obs-label";

export {
  Menubar as ObsMenubar,
  MenubarMenu as ObsMenubarMenu,
  MenubarTrigger as ObsMenubarTrigger,
  MenubarContent as ObsMenubarContent,
  MenubarItem as ObsMenubarItem,
  MenubarSeparator as ObsMenubarSeparator,
  MenubarLabel as ObsMenubarLabel,
  MenubarCheckboxItem as ObsMenubarCheckboxItem,
  MenubarRadioGroup as ObsMenubarRadioGroup,
  MenubarRadioItem as ObsMenubarRadioItem,
  MenubarPortal as ObsMenubarPortal,
  MenubarSubContent as ObsMenubarSubContent,
  MenubarSubTrigger as ObsMenubarSubTrigger,
  MenubarGroup as ObsMenubarGroup,
  MenubarSub as ObsMenubarSub,
  MenubarShortcut as ObsMenubarShortcut,
} from "./components/ui/obs-menubar";

export {
  navigationMenuTriggerStyle as obsNavigationMenuTriggerStyle,
  NavigationMenu as ObsNavigationMenu,
  NavigationMenuList as ObsNavigationMenuList,
  NavigationMenuItem as ObsNavigationMenuItem,
  NavigationMenuContent as ObsNavigationMenuContent,
  NavigationMenuTrigger as ObsNavigationMenuTrigger,
  NavigationMenuLink as ObsNavigationMenuLink,
  NavigationMenuIndicator as ObsNavigationMenuIndicator,
  NavigationMenuViewport as ObsNavigationMenuViewport,
} from "./components/ui/obs-navigation-menu";

export {
  Pagination as ObsPagination,
  PaginationContent as ObsPaginationContent,
  PaginationEllipsis as ObsPaginationEllipsis,
  PaginationItem as ObsPaginationItem,
  PaginationLink as ObsPaginationLink,
  PaginationNext as ObsPaginationNext,
  PaginationPrevious as ObsPaginationPrevious,
} from "./components/ui/obs-pagination";

export {
  Popover as ObsPopover,
  PopoverTrigger as ObsPopoverTrigger,
  PopoverContent as ObsPopoverContent,
} from "./components/ui/obs-popover";

export {
  Progress as ObsProgress,
} from "./components/ui/obs-progress";

export {
  RadioGroup as ObsRadioGroup,
  RadioGroupItem as ObsRadioGroupItem,
} from "./components/ui/obs-radio-group";

export {
  ResizablePanelGroup as ObsResizablePanelGroup,
  ResizablePanel as ObsResizablePanel,
  ResizableHandle as ObsResizableHandle,
} from "./components/ui/obs-resizable";

export {
  ScrollArea as ObsScrollArea,
  ScrollBar as ObsScrollBar,
} from "./components/ui/obs-scroll-area";

export {
  Select as ObsSelect,
  SelectGroup as ObsSelectGroup,
  SelectValue as ObsSelectValue,
  SelectTrigger as ObsSelectTrigger,
  SelectContent as ObsSelectContent,
  SelectLabel as ObsSelectLabel,
  SelectItem as ObsSelectItem,
  SelectSeparator as ObsSelectSeparator,
  SelectScrollUpButton as ObsSelectScrollUpButton,
  SelectScrollDownButton as ObsSelectScrollDownButton,
} from "./components/ui/obs-select";

export {
  Separator as ObsSeparator,
} from "./components/ui/obs-separator";

export {
  Sheet as ObsSheet,
  SheetClose as ObsSheetClose,
  SheetContent as ObsSheetContent,
  SheetDescription as ObsSheetDescription,
  SheetFooter as ObsSheetFooter,
  SheetHeader as ObsSheetHeader,
  SheetOverlay as ObsSheetOverlay,
  SheetPortal as ObsSheetPortal,
  SheetTitle as ObsSheetTitle,
  SheetTrigger as ObsSheetTrigger,
} from "./components/ui/obs-sheet";

export {
  Sidebar as ObsSidebar,
  SidebarContent as ObsSidebarContent,
  SidebarFooter as ObsSidebarFooter,
  SidebarGroup as ObsSidebarGroup,
  SidebarGroupAction as ObsSidebarGroupAction,
  SidebarGroupContent as ObsSidebarGroupContent,
  SidebarGroupLabel as ObsSidebarGroupLabel,
  SidebarHeader as ObsSidebarHeader,
  SidebarInput as ObsSidebarInput,
  SidebarInset as ObsSidebarInset,
  SidebarMenu as ObsSidebarMenu,
  SidebarMenuAction as ObsSidebarMenuAction,
  SidebarMenuBadge as ObsSidebarMenuBadge,
  SidebarMenuButton as ObsSidebarMenuButton,
  SidebarMenuItem as ObsSidebarMenuItem,
  SidebarMenuSkeleton as ObsSidebarMenuSkeleton,
  SidebarMenuSub as ObsSidebarMenuSub,
  SidebarMenuSubButton as ObsSidebarMenuSubButton,
  SidebarMenuSubItem as ObsSidebarMenuSubItem,
  SidebarProvider as ObsSidebarProvider,
  SidebarRail as ObsSidebarRail,
  SidebarSeparator as ObsSidebarSeparator,
  SidebarTrigger as ObsSidebarTrigger,
  useSidebar as useObsSidebar,
} from "./components/ui/obs-sidebar";

export {
  Skeleton as ObsSkeleton,
} from "./components/ui/obs-skeleton";

export {
  Slider as ObsSlider,
} from "./components/ui/obs-slider";

export {
  SonnerToaster as ObsSonnerToaster,
  sonnerToast as obsSonnerToast,
} from "./components/ui/obs-sonner";

export {
  Switch as ObsSwitch,
} from "./components/ui/obs-switch";

export {
  Table as ObsTable,
  TableHeader as ObsTableHeader,
  TableBody as ObsTableBody,
  TableFooter as ObsTableFooter,
  TableHead as ObsTableHead,
  TableRow as ObsTableRow,
  TableCell as ObsTableCell,
  TableCaption as ObsTableCaption,
} from "./components/ui/obs-table";

export {
  Tabs as ObsTabs,
  TabsList as ObsTabsList,
  TabsTrigger as ObsTabsTrigger,
  TabsContent as ObsTabsContent,
} from "./components/ui/obs-tabs";

export {
  Textarea as ObsTextarea,
  type TextareaProps as ObsTextareaProps,
} from "./components/ui/obs-textarea";

export {
  type ToastProps as ObsToastProps,
  type ToastActionElement as ObsToastActionElement,
  ToastProvider as ObsToastProvider,
  ToastViewport as ObsToastViewport,
  Toast as ObsToast,
  ToastTitle as ObsToastTitle,
  ToastDescription as ObsToastDescription,
  ToastClose as ObsToastClose,
  ToastAction as ObsToastAction,
} from "./components/ui/obs-toast";

export {
  Toaster as ObsToaster,
} from "./components/ui/obs-toaster";

export {
  ToggleGroup as ObsToggleGroup,
  ToggleGroupItem as ObsToggleGroupItem,
} from "./components/ui/obs-toggle-group";

export {
  Toggle as ObsToggle,
  toggleVariants as obsToggleVariants,
} from "./components/ui/obs-toggle";

export {
  Tooltip as ObsTooltip,
  TooltipTrigger as ObsTooltipTrigger,
  TooltipContent as ObsTooltipContent,
  TooltipProvider as ObsTooltipProvider,
} from "./components/ui/obs-tooltip";
