import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ObsAlert,
  ObsAlertDescription,
  ObsAlertDialog,
  ObsAlertDialogAction,
  ObsAlertDialogCancel,
  ObsAlertDialogContent,
  ObsAlertDialogDescription,
  ObsAlertDialogFooter,
  ObsAlertDialogHeader,
  ObsAlertDialogTitle,
  ObsAlertDialogTrigger,
  ObsAlertTitle,
  ObsAvatar,
  ObsAvatarFallback,
  ObsAvatarImage,
  ObsBadge,
  ObsButton,
  ObsCard,
  ObsCardContent,
  ObsCardDescription,
  ObsCardHeader,
  ObsCardTitle,
  ObsCarousel,
  ObsCarouselContent,
  ObsCarouselItem,
  ObsCarouselNext,
  ObsCarouselPrevious,
  ObsChartContainer,
  ObsChartLegend,
  ObsChartLegendContent,
  ObsChartTooltip,
  ObsChartTooltipContent,
  ObsDialog,
  ObsDialogContent,
  ObsDialogDescription,
  ObsDialogFooter,
  ObsDialogHeader,
  ObsDialogTitle,
  ObsDialogTrigger,
  ObsDrawer,
  ObsDrawerClose,
  ObsDrawerContent,
  ObsDrawerDescription,
  ObsDrawerFooter,
  ObsDrawerHeader,
  ObsDrawerTitle,
  ObsDrawerTrigger,
  ObsGrid,
  ObsGridItem,
  ObsHoverCard,
  ObsHoverCardContent,
  ObsHoverCardTrigger,
  ObsInput,
  ObsLabel,
  ObsModal,
  ObsPopover,
  ObsPopoverContent,
  ObsPopoverTrigger,
  ObsProgress,
  ObsSheet,
  ObsSheetContent,
  ObsSheetDescription,
  ObsSheetHeader,
  ObsSheetTitle,
  ObsSheetTrigger,
  ObsSidebar,
  ObsSidebarContent,
  ObsSidebarGroup,
  ObsSidebarGroupContent,
  ObsSidebarGroupLabel,
  ObsSidebarHeader,
  ObsSidebarInset,
  ObsSidebarMenu,
  ObsSidebarMenuButton,
  ObsSidebarMenuItem,
  ObsSidebarProvider,
  ObsSidebarTrigger,
  ObsSkeleton,
  ObsTable,
  ObsTableBody,
  ObsTableCaption,
  ObsTableCell,
  ObsTableHead,
  ObsTableHeader,
  ObsTableRow,
  ObsTextarea,
  ObsTooltip,
  ObsTooltipContent,
  ObsTooltipTrigger,
  obsSonnerToast,
  useObsToast,
  type ObsChartConfig,
} from "@sady143/obsess-ds";
import { AlertCircle, Bell, Home, Layers, Palette, Settings } from "lucide-react";

const CHART_DATA = [
  { bp: "Compact", cols: 4, gutter: 16 },
  { bp: "Medium", cols: 8, gutter: 24 },
  { bp: "Expanded", cols: 12, gutter: 24 },
  { bp: "Large", cols: 12, gutter: 32 },
];

const CHART_CONFIG: ObsChartConfig = {
  cols: { label: "Columns", color: "hsl(var(--primary))" },
  gutter: { label: "Gutter (px)", color: "hsl(var(--accent))" },
};

export function OverlaysAndDataSection() {
  const { toast } = useObsToast();
  const [progress, setProgress] = useState(68);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [modalName, setModalName] = useState("Sudhanshu");
  const [modalMessage, setModalMessage] = useState("Loving the 4-breakpoint grid and equal-weight color palette!");

  return (
    <div className="space-y-16">
      {/* 9. Overlays, Dialogs & Popovers */}
      <section id="overlays" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives &amp; Patterns · Overlays</p>
          <h2 className="text-3xl font-semibold tracking-tight">ObsModal (Form &amp; Slot Body), Dialogs, Sheets &amp; Drawers</h2>
        </div>

        <ObsCard>
          <ObsCardContent className="flex flex-wrap items-center gap-3 pt-6">
            {/* ObsModal — Form Mode */}
            <ObsModal
              open={formModalOpen}
              onOpenChange={setFormModalOpen}
              trigger={<ObsButton>ObsModal (Form)</ObsButton>}
              eyebrow="Form Modal"
              title="Send a Note"
              description="Built-in <form> wrapper with native Enter-key submit and pinned header/footer."
              submitLabel="Send Note"
              onSubmit={(e) => {
                e.preventDefault();
                setFormModalOpen(false);
                toast({
                  title: `Note sent by ${modalName}`,
                  description: modalMessage,
                });
              }}
            >
              <div className="space-y-4 py-1">
                <div className="space-y-1.5">
                  <ObsLabel htmlFor="modal-name">Your Name</ObsLabel>
                  <ObsInput
                    id="modal-name"
                    required
                    value={modalName}
                    onChange={(e) => setModalName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <ObsLabel htmlFor="modal-msg">Message</ObsLabel>
                  <ObsTextarea
                    id="modal-msg"
                    rows={4}
                    required
                    value={modalMessage}
                    onChange={(e) => setModalMessage(e.target.value)}
                  />
                </div>
              </div>
            </ObsModal>

            {/* ObsModal — Custom Slot Body Mode */}
            <ObsModal
              open={slotModalOpen}
              onOpenChange={setSlotModalOpen}
              size="lg"
              trigger={<ObsButton variant="secondary">ObsModal (Slot Body)</ObsButton>}
              eyebrow="Slot Body Modal"
              title="Case Study Snapshot"
              description="Pass any custom layout, grid, media, or cards directly into children + an optional footer slot."
              footer={
                <div className="flex w-full items-center justify-between">
                  <ObsBadge variant="outline">size="lg"</ObsBadge>
                  <ObsButton onClick={() => setSlotModalOpen(false)}>Done</ObsButton>
                </div>
              }
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-honeybee p-4 text-honeybee-foreground">
                  <p className="text-xs font-mono uppercase opacity-75">Slot A · Brand Surface</p>
                  <p className="mt-1 font-display text-xl font-semibold">Honeybee Manifesto</p>
                  <p className="mt-1 text-xs opacity-85">Custom editorial slot inside ObsModal body.</p>
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="text-xs font-mono uppercase text-muted-foreground">Slot B · Metadata</p>
                  <ul className="mt-2 space-y-1 text-xs">
                    <li>• Scrollable body with pinned chrome</li>
                    <li>• Size presets: sm, md, lg, xl, full</li>
                    <li>• Supports controlled or uncontrolled state</li>
                  </ul>
                </div>
              </div>
            </ObsModal>

            <ObsDialog>
              <ObsDialogTrigger asChild>
                <ObsButton variant="outline">ObsDialog</ObsButton>
              </ObsDialogTrigger>
              <ObsDialogContent>
                <ObsDialogHeader>
                  <ObsDialogTitle>Obsess Dialog</ObsDialogTitle>
                  <ObsDialogDescription>
                    Accessible modal dialog built on Radix UI primitives.
                  </ObsDialogDescription>
                </ObsDialogHeader>
                <ObsDialogFooter>
                  <ObsButton>Confirm</ObsButton>
                </ObsDialogFooter>
              </ObsDialogContent>
            </ObsDialog>

            <ObsAlertDialog>
              <ObsAlertDialogTrigger asChild>
                <ObsButton variant="destructive">ObsAlertDialog</ObsButton>
              </ObsAlertDialogTrigger>
              <ObsAlertDialogContent>
                <ObsAlertDialogHeader>
                  <ObsAlertDialogTitle>Confirm Destructive Action</ObsAlertDialogTitle>
                  <ObsAlertDialogDescription>
                    This demonstrates ObsAlertDialog confirmation semantics.
                  </ObsAlertDialogDescription>
                </ObsAlertDialogHeader>
                <ObsAlertDialogFooter>
                  <ObsAlertDialogCancel>Cancel</ObsAlertDialogCancel>
                  <ObsAlertDialogAction>Continue</ObsAlertDialogAction>
                </ObsAlertDialogFooter>
              </ObsAlertDialogContent>
            </ObsAlertDialog>

            <ObsSheet>
              <ObsSheetTrigger asChild>
                <ObsButton variant="outline">ObsSheet</ObsButton>
              </ObsSheetTrigger>
              <ObsSheetContent>
                <ObsSheetHeader>
                  <ObsSheetTitle>ObsSheet Slide-Over</ObsSheetTitle>
                  <ObsSheetDescription>
                    Side panel useful for filters, inspectors, and mobile navigation.
                  </ObsSheetDescription>
                </ObsSheetHeader>
              </ObsSheetContent>
            </ObsSheet>

            <ObsDrawer>
              <ObsDrawerTrigger asChild>
                <ObsButton variant="outline">ObsDrawer</ObsButton>
              </ObsDrawerTrigger>
              <ObsDrawerContent>
                <ObsDrawerHeader>
                  <ObsDrawerTitle>ObsDrawer (Vaul)</ObsDrawerTitle>
                  <ObsDrawerDescription>Bottom sheet drawer with touch gesture support.</ObsDrawerDescription>
                </ObsDrawerHeader>
                <ObsDrawerFooter>
                  <ObsDrawerClose asChild>
                    <ObsButton variant="outline">Close Drawer</ObsButton>
                  </ObsDrawerClose>
                </ObsDrawerFooter>
              </ObsDrawerContent>
            </ObsDrawer>

            <ObsPopover>
              <ObsPopoverTrigger asChild>
                <ObsButton variant="secondary">ObsPopover</ObsButton>
              </ObsPopoverTrigger>
              <ObsPopoverContent className="w-64 text-xs">
                Contextual floating content anchored to a trigger via ObsPopover.
              </ObsPopoverContent>
            </ObsPopover>

            <ObsHoverCard>
              <ObsHoverCardTrigger asChild>
                <ObsButton variant="link">@sady143/obsess-ds</ObsButton>
              </ObsHoverCardTrigger>
              <ObsHoverCardContent className="w-64 text-xs">
                <p className="font-semibold">Obsess Design System</p>
                <p className="mt-1 text-muted-foreground">
                  48 UI primitives, 6 patterns, semantic HSL tokens, and a 4-breakpoint grid.
                </p>
              </ObsHoverCardContent>
            </ObsHoverCard>

            <ObsTooltip>
              <ObsTooltipTrigger asChild>
                <ObsButton variant="ghost">Hover for ObsTooltip</ObsButton>
              </ObsTooltipTrigger>
              <ObsTooltipContent>
                <p>ObsTooltip powered by Radix UI</p>
              </ObsTooltipContent>
            </ObsTooltip>
          </ObsCardContent>
        </ObsCard>
      </section>

      {/* 10. Feedback & Notifications */}
      <section id="feedback" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Feedback</p>
          <h2 className="text-3xl font-semibold tracking-tight">Alerts, Toasts, Progress & Skeleton</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsAlert & Toasts</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <ObsAlert>
                  <AlertCircle className="h-4 w-4" />
                  <ObsAlertTitle>Default ObsAlert</ObsAlertTitle>
                  <ObsAlertDescription>
                    Informational banner for inline feedback inside cards and forms.
                  </ObsAlertDescription>
                </ObsAlert>

                <ObsAlert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <ObsAlertTitle>Destructive ObsAlert</ObsAlertTitle>
                  <ObsAlertDescription>
                    Error or warning state using the semantic destructive token.
                  </ObsAlertDescription>
                </ObsAlert>

                <div className="flex flex-wrap gap-2">
                  <ObsButton
                    size="sm"
                    onClick={() =>
                      toast({
                        title: "ObsToast Triggered",
                        description: "Rendered via useObsToast() + ObsToaster.",
                      })
                    }
                  >
                    <Bell className="h-4 w-4" />
                    Trigger ObsToast
                  </ObsButton>
                  <ObsButton
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      obsSonnerToast("ObsSonnerToast Triggered", {
                        description: "Rendered via obsSonnerToast + ObsSonnerToaster.",
                      })
                    }
                  >
                    Trigger ObsSonnerToast
                  </ObsButton>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsProgress & ObsSkeleton</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Build Progress</span>
                    <span className="font-mono">{progress}%</span>
                  </div>
                  <ObsProgress value={progress} />
                  <div className="flex gap-2">
                    <ObsButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 15))}>
                      -15%
                    </ObsButton>
                    <ObsButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 15))}>
                      +15%
                    </ObsButton>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <ObsSkeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <ObsSkeleton className="h-4 w-48" />
                    <ObsSkeleton className="h-3 w-32" />
                  </div>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>

      {/* 11. Data Display, Charts, Carousel & Sidebar */}
      <section id="data" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Data & Media</p>
          <h2 className="text-3xl font-semibold tracking-tight">Avatar, Table, Chart, Carousel & Sidebar</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsTable & ObsAvatar</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <ObsAvatar>
                    <ObsAvatarImage src="" alt="Obsess" />
                    <ObsAvatarFallback>OB</ObsAvatarFallback>
                  </ObsAvatar>
                  <div className="text-xs">
                    <p className="font-medium">ObsAvatar Fallback</p>
                    <p className="text-muted-foreground">Editorial System Lead</p>
                  </div>
                </div>

                <ObsTable>
                  <ObsTableCaption>4-Breakpoint Grid Token Summary</ObsTableCaption>
                  <ObsTableHeader>
                    <ObsTableRow>
                      <ObsTableHead>Class</ObsTableHead>
                      <ObsTableHead>Cols</ObsTableHead>
                      <ObsTableHead>Gutter</ObsTableHead>
                      <ObsTableHead className="text-right">Margin</ObsTableHead>
                    </ObsTableRow>
                  </ObsTableHeader>
                  <ObsTableBody>
                    <ObsTableRow>
                      <ObsTableCell className="font-medium">Compact</ObsTableCell>
                      <ObsTableCell>4</ObsTableCell>
                      <ObsTableCell>16px</ObsTableCell>
                      <ObsTableCell className="text-right">16px</ObsTableCell>
                    </ObsTableRow>
                    <ObsTableRow>
                      <ObsTableCell className="font-medium">Medium</ObsTableCell>
                      <ObsTableCell>8</ObsTableCell>
                      <ObsTableCell>24px</ObsTableCell>
                      <ObsTableCell className="text-right">32px</ObsTableCell>
                    </ObsTableRow>
                    <ObsTableRow>
                      <ObsTableCell className="font-medium">Expanded</ObsTableCell>
                      <ObsTableCell>12</ObsTableCell>
                      <ObsTableCell>24px</ObsTableCell>
                      <ObsTableCell className="text-right">48px</ObsTableCell>
                    </ObsTableRow>
                    <ObsTableRow>
                      <ObsTableCell className="font-medium">Large</ObsTableCell>
                      <ObsTableCell>12</ObsTableCell>
                      <ObsTableCell>32px</ObsTableCell>
                      <ObsTableCell className="text-right">64px</ObsTableCell>
                    </ObsTableRow>
                  </ObsTableBody>
                </ObsTable>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsChartContainer (Recharts)</ObsCardTitle>
                <ObsCardDescription>Columns & gutters across the 4 breakpoints</ObsCardDescription>
              </ObsCardHeader>
              <ObsCardContent>
                <ObsChartContainer config={CHART_CONFIG} className="h-64 w-full">
                  <BarChart data={CHART_DATA}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="bp" tickLine={false} axisLine={false} />
                    <ObsChartTooltip content={<ObsChartTooltipContent />} />
                    <ObsChartLegend content={<ObsChartLegendContent />} />
                    <Bar dataKey="cols" fill="var(--color-cols)" radius={4} />
                    <Bar dataKey="gutter" fill="var(--color-gutter)" radius={4} />
                  </BarChart>
                </ObsChartContainer>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 5, large: 5 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsCarousel (Embla)</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="px-12">
                <ObsCarousel>
                  <ObsCarouselContent>
                    {["Slide 1 — Compact", "Slide 2 — Medium", "Slide 3 — Expanded", "Slide 4 — Large"].map(
                      (label) => (
                        <ObsCarouselItem key={label}>
                          <div className="flex aspect-video items-center justify-center rounded-md border bg-muted text-sm font-medium">
                            {label}
                          </div>
                        </ObsCarouselItem>
                      ),
                    )}
                  </ObsCarouselContent>
                  <ObsCarouselPrevious />
                  <ObsCarouselNext />
                </ObsCarousel>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 7, large: 7 }}>
            <ObsCard className="overflow-hidden">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsSidebar (Dark Sidebar Tokens)</ObsCardTitle>
                <ObsCardDescription>Embedded sidebar preview using --sidebar-* tokens</ObsCardDescription>
              </ObsCardHeader>
              <ObsCardContent className="p-0">
                <div className="relative h-64 overflow-hidden border-t">
                  <ObsSidebarProvider className="min-h-0 h-full">
                    <ObsSidebar collapsible="none" className="w-48 border-r">
                      <ObsSidebarHeader className="px-3 py-2 text-xs font-semibold">
                        Obsess DS
                      </ObsSidebarHeader>
                      <ObsSidebarContent>
                        <ObsSidebarGroup>
                          <ObsSidebarGroupLabel>Sections</ObsSidebarGroupLabel>
                          <ObsSidebarGroupContent>
                            <ObsSidebarMenu>
                              <ObsSidebarMenuItem>
                                <ObsSidebarMenuButton isActive>
                                  <Home className="h-4 w-4" />
                                  <span>Overview</span>
                                </ObsSidebarMenuButton>
                              </ObsSidebarMenuItem>
                              <ObsSidebarMenuItem>
                                <ObsSidebarMenuButton>
                                  <Palette className="h-4 w-4" />
                                  <span>Tokens</span>
                                </ObsSidebarMenuButton>
                              </ObsSidebarMenuItem>
                              <ObsSidebarMenuItem>
                                <ObsSidebarMenuButton>
                                  <Layers className="h-4 w-4" />
                                  <span>Primitives</span>
                                </ObsSidebarMenuButton>
                              </ObsSidebarMenuItem>
                              <ObsSidebarMenuItem>
                                <ObsSidebarMenuButton>
                                  <Settings className="h-4 w-4" />
                                  <span>Settings</span>
                                </ObsSidebarMenuButton>
                              </ObsSidebarMenuItem>
                            </ObsSidebarMenu>
                          </ObsSidebarGroupContent>
                        </ObsSidebarGroup>
                      </ObsSidebarContent>
                    </ObsSidebar>
                    <ObsSidebarInset className="p-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ObsSidebarTrigger />
                        <span>ObsSidebarInset content area</span>
                      </div>
                    </ObsSidebarInset>
                  </ObsSidebarProvider>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>
    </div>
  );
}
