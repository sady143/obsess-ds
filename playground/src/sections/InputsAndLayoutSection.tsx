import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ObsAccordion,
  ObsAccordionContent,
  ObsAccordionItem,
  ObsAccordionTrigger,
  ObsAspectRatio,
  ObsBadge,
  ObsBreadcrumb,
  ObsBreadcrumbEllipsis,
  ObsBreadcrumbItem,
  ObsBreadcrumbLink,
  ObsBreadcrumbList,
  ObsBreadcrumbPage,
  ObsBreadcrumbSeparator,
  ObsButton,
  ObsCalendar,
  ObsCard,
  ObsCardContent,
  ObsCardDescription,
  ObsCardFooter,
  ObsCardHeader,
  ObsCardTitle,
  ObsCheckbox,
  ObsCollapsible,
  ObsCollapsibleContent,
  ObsCollapsibleTrigger,
  ObsCommand,
  ObsCommandEmpty,
  ObsCommandGroup,
  ObsCommandInput,
  ObsCommandItem,
  ObsCommandList,
  ObsCommandSeparator,
  ObsCommandShortcut,
  ObsContextMenu,
  ObsContextMenuContent,
  ObsContextMenuItem,
  ObsContextMenuSeparator,
  ObsContextMenuTrigger,
  ObsDropdownMenu,
  ObsDropdownMenuContent,
  ObsDropdownMenuItem,
  ObsDropdownMenuLabel,
  ObsDropdownMenuSeparator,
  ObsDropdownMenuTrigger,
  ObsForm,
  ObsFormControl,
  ObsFormDescription,
  ObsFormField,
  ObsFormItem,
  ObsFormLabel,
  ObsFormMessage,
  ObsGrid,
  ObsGridItem,
  ObsInput,
  ObsInputOTP,
  ObsInputOTPGroup,
  ObsInputOTPSeparator,
  ObsInputOTPSlot,
  ObsLabel,
  ObsMenubar,
  ObsMenubarContent,
  ObsMenubarItem,
  ObsMenubarMenu,
  ObsMenubarSeparator,
  ObsMenubarTrigger,
  ObsNavigationMenu,
  ObsNavigationMenuContent,
  ObsNavigationMenuItem,
  ObsNavigationMenuLink,
  ObsNavigationMenuList,
  ObsNavigationMenuTrigger,
  ObsPagination,
  ObsPaginationContent,
  ObsPaginationEllipsis,
  ObsPaginationItem,
  ObsPaginationLink,
  ObsPaginationNext,
  ObsPaginationPrevious,
  ObsRadioGroup,
  ObsRadioGroupItem,
  ObsResizableHandle,
  ObsResizablePanel,
  ObsResizablePanelGroup,
  ObsScrollArea,
  ObsSelect,
  ObsSelectContent,
  ObsSelectItem,
  ObsSelectTrigger,
  ObsSelectValue,
  ObsSeparator,
  ObsSlider,
  ObsSwitch,
  ObsTabs,
  ObsTabsContent,
  ObsTabsList,
  ObsTabsTrigger,
  ObsTextarea,
  ObsToggle,
  ObsToggleGroup,
  ObsToggleGroupItem,
  obsNavigationMenuTriggerStyle,
} from "@sady143/obsess-ds";
import { Bold, ChevronsUpDown, Italic, Underline } from "lucide-react";

export function InputsAndLayoutSection() {
  const [sliderVal, setSliderVal] = useState<number[]>([42]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [switched, setSwitched] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState<string | null>(null);

  const form = useForm({
    defaultValues: { username: "obsess-designer" },
  });

  return (
    <div className="space-y-16">
      {/* 5. Buttons, Badges & Toggles */}
      <section id="actions" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Actions</p>
          <h2 className="text-3xl font-semibold tracking-tight">Buttons, Badges & Toggles</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard>
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsButton</ObsCardTitle>
                <ObsCardDescription>Variants and sizes</ObsCardDescription>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <ObsButton>Default</ObsButton>
                  <ObsButton variant="secondary">Secondary</ObsButton>
                  <ObsButton variant="outline">Outline</ObsButton>
                  <ObsButton variant="ghost">Ghost</ObsButton>
                  <ObsButton variant="destructive">Destructive</ObsButton>
                  <ObsButton variant="link">Link</ObsButton>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <ObsButton size="sm">Small</ObsButton>
                  <ObsButton size="default">Default</ObsButton>
                  <ObsButton size="lg">Large</ObsButton>
                  <ObsButton size="icon" aria-label="Icon button">
                    <Bold className="h-4 w-4" />
                  </ObsButton>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard>
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsBadge, ObsToggle & ObsToggleGroup</ObsCardTitle>
                <ObsCardDescription>Status pills and formatting toggles</ObsCardDescription>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <ObsBadge>Default</ObsBadge>
                  <ObsBadge variant="secondary">Secondary</ObsBadge>
                  <ObsBadge variant="outline">Outline</ObsBadge>
                  <ObsBadge variant="destructive">Destructive</ObsBadge>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <ObsToggle aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ObsToggle>
                  <ObsToggleGroup type="multiple" defaultValue={["bold"]}>
                    <ObsToggleGroupItem value="bold" aria-label="Bold">
                      <Bold className="h-4 w-4" />
                    </ObsToggleGroupItem>
                    <ObsToggleGroupItem value="italic" aria-label="Italic">
                      <Italic className="h-4 w-4" />
                    </ObsToggleGroupItem>
                    <ObsToggleGroupItem value="underline" aria-label="Underline">
                      <Underline className="h-4 w-4" />
                    </ObsToggleGroupItem>
                  </ObsToggleGroup>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>

      {/* 6. Form Inputs & Controls */}
      <section id="inputs" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Forms</p>
          <h2 className="text-3xl font-semibold tracking-tight">Inputs, Selection & Calendar</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 4 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsInput, ObsTextarea & ObsLabel</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <div className="space-y-1.5">
                  <ObsLabel htmlFor="demo-email">Email</ObsLabel>
                  <ObsInput id="demo-email" type="email" placeholder="hello@obsess.design" />
                </div>
                <div className="space-y-1.5">
                  <ObsLabel htmlFor="demo-notes">Editorial Notes</ObsLabel>
                  <ObsTextarea id="demo-notes" placeholder="Write case study notes..." rows={3} />
                </div>
                <div className="space-y-1.5">
                  <ObsLabel>ObsInputOTP</ObsLabel>
                  <ObsInputOTP maxLength={6}>
                    <ObsInputOTPGroup>
                      <ObsInputOTPSlot index={0} />
                      <ObsInputOTPSlot index={1} />
                      <ObsInputOTPSlot index={2} />
                    </ObsInputOTPGroup>
                    <ObsInputOTPSeparator />
                    <ObsInputOTPGroup>
                      <ObsInputOTPSlot index={3} />
                      <ObsInputOTPSlot index={4} />
                      <ObsInputOTPSlot index={5} />
                    </ObsInputOTPGroup>
                  </ObsInputOTP>
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 4 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">Select, Checkbox, Switch, Radio & Slider</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-5">
                <div className="space-y-1.5">
                  <ObsLabel>ObsSelect</ObsLabel>
                  <ObsSelect defaultValue="expanded">
                    <ObsSelectTrigger>
                      <ObsSelectValue placeholder="Choose breakpoint" />
                    </ObsSelectTrigger>
                    <ObsSelectContent>
                      <ObsSelectItem value="compact">Compact (4 cols)</ObsSelectItem>
                      <ObsSelectItem value="medium">Medium (8 cols)</ObsSelectItem>
                      <ObsSelectItem value="expanded">Expanded (12 cols)</ObsSelectItem>
                      <ObsSelectItem value="large">Large (12 cols)</ObsSelectItem>
                    </ObsSelectContent>
                  </ObsSelect>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ObsCheckbox
                      id="demo-check"
                      checked={checked}
                      onCheckedChange={(v) => setChecked(Boolean(v))}
                    />
                    <ObsLabel htmlFor="demo-check">ObsCheckbox</ObsLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ObsSwitch id="demo-switch" checked={switched} onCheckedChange={setSwitched} />
                    <ObsLabel htmlFor="demo-switch">ObsSwitch</ObsLabel>
                  </div>
                </div>

                <ObsRadioGroup defaultValue="editorial" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <ObsRadioGroupItem value="editorial" id="r-editorial" />
                    <ObsLabel htmlFor="r-editorial">Editorial</ObsLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ObsRadioGroupItem value="minimal" id="r-minimal" />
                    <ObsLabel htmlFor="r-minimal">Minimal</ObsLabel>
                  </div>
                </ObsRadioGroup>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>ObsSlider</span>
                    <span>{sliderVal[0]}%</span>
                  </div>
                  <ObsSlider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
                </div>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 12, large: 4 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsCalendar & ObsForm</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <div className="flex justify-center rounded-md border p-2">
                  <ObsCalendar mode="single" selected={date} onSelect={setDate} />
                </div>
                <ObsForm {...form}>
                  <form
                    onSubmit={form.handleSubmit((data) => setFormSubmitted(data.username))}
                    className="space-y-2"
                  >
                    <ObsFormField
                      control={form.control}
                      name="username"
                      rules={{ required: "Username is required" }}
                      render={({ field }) => (
                        <ObsFormItem>
                          <ObsFormLabel>ObsForm Field</ObsFormLabel>
                          <ObsFormControl>
                            <ObsInput {...field} />
                          </ObsFormControl>
                          <ObsFormDescription>Powered by react-hook-form.</ObsFormDescription>
                          <ObsFormMessage />
                        </ObsFormItem>
                      )}
                    />
                    <div className="flex items-center gap-2">
                      <ObsButton type="submit" size="sm">Submit Form</ObsButton>
                      {formSubmitted && (
                        <span className="text-xs text-accent">Submitted: {formSubmitted}</span>
                      )}
                    </div>
                  </form>
                </ObsForm>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>

      {/* 7. Layout, Surfaces & Containers */}
      <section id="layout" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Surfaces</p>
          <h2 className="text-3xl font-semibold tracking-tight">Accordion, Tabs, Resizable & Containers</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsAccordion & ObsCollapsible</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <ObsAccordion type="single" collapsible defaultValue="item-1">
                  <ObsAccordionItem value="item-1">
                    <ObsAccordionTrigger>What is Obsess Design System?</ObsAccordionTrigger>
                    <ObsAccordionContent>
                      A React + Tailwind CSS v3 component library with editorial typography and a 4-breakpoint grid.
                    </ObsAccordionContent>
                  </ObsAccordionItem>
                  <ObsAccordionItem value="item-2">
                    <ObsAccordionTrigger>How are breakpoints structured?</ObsAccordionTrigger>
                    <ObsAccordionContent>
                      Compact (4 cols), Medium (8 cols), Expanded (12 cols), and Large (12 cols) with adaptive gutters and margins.
                    </ObsAccordionContent>
                  </ObsAccordionItem>
                </ObsAccordion>

                <ObsSeparator />

                <ObsCollapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ObsCollapsible Panel</span>
                    <ObsCollapsibleTrigger asChild>
                      <ObsButton variant="ghost" size="sm">
                        <ChevronsUpDown className="h-4 w-4" />
                        Toggle
                      </ObsButton>
                    </ObsCollapsibleTrigger>
                  </div>
                  <ObsCollapsibleContent className="rounded-md border bg-muted/50 p-3 text-xs">
                    Hidden details revealed via ObsCollapsibleContent.
                  </ObsCollapsibleContent>
                </ObsCollapsible>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 4, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsTabs, ObsScrollArea & ObsAspectRatio</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-4">
                <ObsTabs defaultValue="scroll">
                  <ObsTabsList className="grid w-full grid-cols-2">
                    <ObsTabsTrigger value="scroll">ObsScrollArea</ObsTabsTrigger>
                    <ObsTabsTrigger value="aspect">ObsAspectRatio</ObsTabsTrigger>
                  </ObsTabsList>
                  <ObsTabsContent value="scroll" className="pt-2">
                    <ObsScrollArea className="h-36 rounded-md border p-3">
                      <div className="space-y-2 text-xs">
                        {Array.from({ length: 10 }, (_, i) => (
                          <div key={i} className="rounded bg-muted px-2 py-1.5">
                            Scrollable token item #{i + 1}
                          </div>
                        ))}
                      </div>
                    </ObsScrollArea>
                  </ObsTabsContent>
                  <ObsTabsContent value="aspect" className="pt-2">
                    <div className="w-64">
                      <ObsAspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-md bg-muted text-xs font-medium text-muted-foreground">
                        16 : 9 ObsAspectRatio
                      </ObsAspectRatio>
                    </div>
                  </ObsTabsContent>
                </ObsTabs>

                <ObsResizablePanelGroup direction="horizontal" className="min-h-[96px] rounded-lg border">
                  <ObsResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-4 text-xs font-medium">
                      ObsResizablePanel A
                    </div>
                  </ObsResizablePanel>
                  <ObsResizableHandle withHandle />
                  <ObsResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center bg-muted/40 p-4 text-xs font-medium">
                      ObsResizablePanel B
                    </div>
                  </ObsResizablePanel>
                </ObsResizablePanelGroup>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>

      {/* 8. Navigation & Menus */}
      <section id="navigation" className="scroll-mt-24 space-y-6">
        <div className="border-b pb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">UI Primitives · Navigation</p>
          <h2 className="text-3xl font-semibold tracking-tight">Menus, Command, Breadcrumb & Pagination</h2>
        </div>

        <ObsGrid contained={false}>
          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">NavigationMenu, Menubar, Dropdown & ContextMenu</ObsCardTitle>
              </ObsCardHeader>
              <ObsCardContent className="space-y-5">
                <ObsNavigationMenu>
                  <ObsNavigationMenuList>
                    <ObsNavigationMenuItem>
                      <ObsNavigationMenuTrigger>Foundations</ObsNavigationMenuTrigger>
                      <ObsNavigationMenuContent>
                        <div className="grid w-64 gap-2 p-4 text-xs">
                          <a href="#grid" className="rounded p-2 hover:bg-muted">4-Breakpoint Grid</a>
                          <a href="#colors" className="rounded p-2 hover:bg-muted">Semantic Colors</a>
                          <a href="#typography" className="rounded p-2 hover:bg-muted">Editorial Typography</a>
                        </div>
                      </ObsNavigationMenuContent>
                    </ObsNavigationMenuItem>
                    <ObsNavigationMenuItem>
                      <ObsNavigationMenuLink href="#data" className={obsNavigationMenuTriggerStyle()}>
                        Data Display
                      </ObsNavigationMenuLink>
                    </ObsNavigationMenuItem>
                  </ObsNavigationMenuList>
                </ObsNavigationMenu>

                <div className="flex flex-wrap items-center gap-3">
                  <ObsMenubar>
                    <ObsMenubarMenu>
                      <ObsMenubarTrigger>File</ObsMenubarTrigger>
                      <ObsMenubarContent>
                        <ObsMenubarItem>New Token</ObsMenubarItem>
                        <ObsMenubarSeparator />
                        <ObsMenubarItem>Export CSS</ObsMenubarItem>
                      </ObsMenubarContent>
                    </ObsMenubarMenu>
                    <ObsMenubarMenu>
                      <ObsMenubarTrigger>View</ObsMenubarTrigger>
                      <ObsMenubarContent>
                        <ObsMenubarItem>Compact (4 cols)</ObsMenubarItem>
                        <ObsMenubarItem>Expanded (12 cols)</ObsMenubarItem>
                      </ObsMenubarContent>
                    </ObsMenubarMenu>
                  </ObsMenubar>

                  <ObsDropdownMenu>
                    <ObsDropdownMenuTrigger asChild>
                      <ObsButton variant="outline" size="sm">ObsDropdownMenu</ObsButton>
                    </ObsDropdownMenuTrigger>
                    <ObsDropdownMenuContent>
                      <ObsDropdownMenuLabel>Actions</ObsDropdownMenuLabel>
                      <ObsDropdownMenuSeparator />
                      <ObsDropdownMenuItem>Inspect Grid</ObsDropdownMenuItem>
                      <ObsDropdownMenuItem>Copy Tokens</ObsDropdownMenuItem>
                    </ObsDropdownMenuContent>
                  </ObsDropdownMenu>
                </div>

                <ObsContextMenu>
                  <ObsContextMenuTrigger className="flex h-20 items-center justify-center rounded-md border border-dashed text-xs text-muted-foreground">
                    Right-click here for ObsContextMenu
                  </ObsContextMenuTrigger>
                  <ObsContextMenuContent>
                    <ObsContextMenuItem>Inspect Component</ObsContextMenuItem>
                    <ObsContextMenuSeparator />
                    <ObsContextMenuItem>Copy Import</ObsContextMenuItem>
                  </ObsContextMenuContent>
                </ObsContextMenu>
              </ObsCardContent>
              <ObsCardFooter className="flex-col items-start gap-3 border-t pt-4">
                <ObsBreadcrumb>
                  <ObsBreadcrumbList>
                    <ObsBreadcrumbItem>
                      <ObsBreadcrumbLink href="#grid">Home</ObsBreadcrumbLink>
                    </ObsBreadcrumbItem>
                    <ObsBreadcrumbSeparator />
                    <ObsBreadcrumbItem>
                      <ObsBreadcrumbEllipsis />
                    </ObsBreadcrumbItem>
                    <ObsBreadcrumbSeparator />
                    <ObsBreadcrumbItem>
                      <ObsBreadcrumbPage>ObsBreadcrumb Primitive</ObsBreadcrumbPage>
                    </ObsBreadcrumbItem>
                  </ObsBreadcrumbList>
                </ObsBreadcrumb>

                <ObsPagination className="justify-start">
                  <ObsPaginationContent>
                    <ObsPaginationItem>
                      <ObsPaginationPrevious href="#navigation" />
                    </ObsPaginationItem>
                    <ObsPaginationItem>
                      <ObsPaginationLink href="#navigation" isActive>1</ObsPaginationLink>
                    </ObsPaginationItem>
                    <ObsPaginationItem>
                      <ObsPaginationLink href="#navigation">2</ObsPaginationLink>
                    </ObsPaginationItem>
                    <ObsPaginationItem>
                      <ObsPaginationEllipsis />
                    </ObsPaginationItem>
                    <ObsPaginationItem>
                      <ObsPaginationNext href="#navigation" />
                    </ObsPaginationItem>
                  </ObsPaginationContent>
                </ObsPagination>
              </ObsCardFooter>
            </ObsCard>
          </ObsGridItem>

          <ObsGridItem span={{ compact: 4, medium: 8, expanded: 6, large: 6 }}>
            <ObsCard className="h-full">
              <ObsCardHeader>
                <ObsCardTitle className="text-lg">ObsCommand</ObsCardTitle>
                <ObsCardDescription>Searchable command palette powered by cmdk</ObsCardDescription>
              </ObsCardHeader>
              <ObsCardContent>
                <ObsCommand className="rounded-lg border shadow-sm">
                  <ObsCommandInput placeholder="Search components or tokens..." />
                  <ObsCommandList>
                    <ObsCommandEmpty>No results found.</ObsCommandEmpty>
                    <ObsCommandGroup heading="Foundations">
                      <ObsCommandItem>
                        <span>4-Breakpoint Grid</span>
                        <ObsCommandShortcut>⌘G</ObsCommandShortcut>
                      </ObsCommandItem>
                      <ObsCommandItem>
                        <span>Semantic Color Tokens</span>
                        <ObsCommandShortcut>⌘C</ObsCommandShortcut>
                      </ObsCommandItem>
                    </ObsCommandGroup>
                    <ObsCommandSeparator />
                    <ObsCommandGroup heading="Primitives">
                      <ObsCommandItem>ObsButton</ObsCommandItem>
                      <ObsCommandItem>ObsDialog</ObsCommandItem>
                      <ObsCommandItem>ObsChartContainer</ObsCommandItem>
                    </ObsCommandGroup>
                  </ObsCommandList>
                </ObsCommand>
              </ObsCardContent>
            </ObsCard>
          </ObsGridItem>
        </ObsGrid>
      </section>
    </div>
  );
}
