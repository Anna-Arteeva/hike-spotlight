import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Toaster as SonnerToaster, toast as sonnerToast } from "@/components/ui/sonner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

const meta: Meta = {
  title: "UI",
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleChartData = [
  { month: "Jan", visits: 320, signups: 210 },
  { month: "Feb", visits: 280, signups: 180 },
  { month: "Mar", visits: 390, signups: 260 },
  { month: "Apr", visits: 460, signups: 310 },
];

const chartConfig = {
  visits: { label: "Visits", color: "hsl(var(--primary))" },
  signups: { label: "Signups", color: "hsl(var(--secondary))" },
};

export const AccordionPrimary: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[360px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Route overview</AccordionTrigger>
        <AccordionContent>Short, readable content for a first item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Meeting details</AccordionTrigger>
        <AccordionContent>Notes about where and when to meet.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionSecondary: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[360px]">
      <AccordionItem value="one">
        <AccordionTrigger>Flexible packing list</AccordionTrigger>
        <AccordionContent>Boots, water, and a lightweight jacket.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Weather changes</AccordionTrigger>
        <AccordionContent>Plan for a cooler descent in the afternoon.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionLoading: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[360px]">
      <AccordionItem value="loading">
        <AccordionTrigger>Loading section</AccordionTrigger>
        <AccordionContent>
          <Skeleton className="h-4 w-full" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionEdgeCase: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[420px]">
      <AccordionItem value="edge">
        <AccordionTrigger>Very long accordion trigger text that wraps to a second line</AccordionTrigger>
        <AccordionContent>
          Dense content with enough text to force multiple lines and show wrapping behavior in the
          accordion content area.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AlertPrimary: Story = {
  render: () => (
    <Alert className="w-[360px]">
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Routes close at sunset. Bring a headlamp.</AlertDescription>
    </Alert>
  ),
};

export const AlertSecondary: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[360px]">
      <AlertTitle>Weather warning</AlertTitle>
      <AlertDescription>High winds expected above 1500m.</AlertDescription>
    </Alert>
  ),
};

export const AlertLoading: Story = {
  render: () => (
    <Alert className="w-[360px]">
      <AlertTitle>Loading alert</AlertTitle>
      <AlertDescription>
        <Skeleton className="h-4 w-full" />
      </AlertDescription>
    </Alert>
  ),
};

export const AlertEdgeCase: Story = {
  render: () => (
    <Alert className="w-[420px]">
      <AlertTitle>Long message title with a lot of context</AlertTitle>
      <AlertDescription>
        This alert description is intentionally verbose to confirm text wrapping and spacing when the
        content spans more than one line.
      </AlertDescription>
    </Alert>
  ),
};

export const AlertDialogPrimary: Story = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button>Delete route</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this route?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const AlertDialogSecondary: Story = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Archive event</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Archive this event?</AlertDialogTitle>
          <AlertDialogDescription>It will be hidden from the upcoming list.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep</AlertDialogCancel>
          <AlertDialogAction>Archive</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const AlertDialogLoading: Story = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button>Processing</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Saving changes</AlertDialogTitle>
          <AlertDialogDescription>
            <Skeleton className="h-4 w-full" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled>Working</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const AlertDialogEdgeCase: Story = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Edge case dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm a very long action label that needs wrapping</AlertDialogTitle>
          <AlertDialogDescription>
            This description is intentionally long to validate scrolling and text wrapping behavior
            inside the dialog content area.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction>Proceed anyway</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const AspectRatioPrimary: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-[360px] overflow-hidden rounded-md bg-muted">
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        16:9 media
      </div>
    </AspectRatio>
  ),
};

export const AspectRatioSecondary: Story = {
  render: () => (
    <AspectRatio ratio={4 / 3} className="w-[320px] overflow-hidden rounded-md bg-muted">
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        4:3 media
      </div>
    </AspectRatio>
  ),
};

export const AspectRatioLoading: Story = {
  render: () => (
    <AspectRatio ratio={16 / 9} className="w-[360px] overflow-hidden rounded-md">
      <Skeleton className="h-full w-full" />
    </AspectRatio>
  ),
};

export const AspectRatioEdgeCase: Story = {
  render: () => (
    <AspectRatio ratio={3 / 5} className="w-[240px] overflow-hidden rounded-md bg-muted">
      <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
        Tall ratio
      </div>
    </AspectRatio>
  ),
};

export const AvatarPrimary: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSecondary: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>HR</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarLoading: Story = {
  render: () => (
    <Avatar className="animate-pulse">
      <AvatarFallback>...</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarEdgeCase: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" />
      <AvatarFallback>LONG</AvatarFallback>
    </Avatar>
  ),
};

export const BadgePrimary: Story = {
  render: () => <Badge>Primary</Badge>,
};

export const BadgeSecondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
};

export const BadgeLoading: Story = {
  render: () => (
    <Badge className="animate-pulse" variant="outline">
      Loading
    </Badge>
  ),
};

export const BadgeEdgeCase: Story = {
  render: () => <Badge>Extra long badge label for edge case wrapping</Badge>,
};

export const BreadcrumbPrimary: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Routes</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Alps</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Summit trail</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const BreadcrumbSecondary: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Routes</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Long trip plan</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const BreadcrumbLoading: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-24" />
    </div>
  ),
};

export const BreadcrumbEdgeCase: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Very long section name</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Another long page title to wrap</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const ButtonPrimary: Story = {
  render: () => <Button>Primary</Button>,
};

export const ButtonSecondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>,
};

export const ButtonLoading: Story = {
  render: () => (
    <Button disabled>
      <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
      Loading
    </Button>
  ),
};

export const ButtonEdgeCase: Story = {
  render: () => (
    <Button className="max-w-[240px]" variant="outline">
      Button label that wraps on smaller widths
    </Button>
  ),
};

export const CalendarPrimary: Story = {
  render: () => <Calendar mode="single" selected={new Date()} className="rounded-md border" />,
};

export const CalendarSecondary: Story = {
  render: () => (
    <Calendar
      mode="range"
      selected={{ from: new Date(2026, 1, 10), to: new Date(2026, 1, 18) }}
      className="rounded-md border"
    />
  ),
};

export const CalendarLoading: Story = {
  render: () => (
    <div className="pointer-events-none opacity-60">
      <Calendar mode="single" selected={new Date()} className="rounded-md border" />
    </div>
  ),
};

export const CalendarEdgeCase: Story = {
  render: () => <Calendar showOutsideDays={false} className="rounded-md border" />,
};

export const CardPrimary: Story = {
  render: () => (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>Route summary</CardTitle>
        <CardDescription>Short overview of the itinerary.</CardDescription>
      </CardHeader>
      <CardContent>Content goes here.</CardContent>
    </Card>
  ),
};

export const CardSecondary: Story = {
  render: () => (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>Secondary card</CardTitle>
      </CardHeader>
      <CardContent>Supporting content.</CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const CardLoading: Story = {
  render: () => (
    <Card className="w-[320px]">
      <CardHeader>
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  ),
};

export const CardEdgeCase: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card with longer title to test wrapping behavior</CardTitle>
        <CardDescription>
          Description text that is long enough to wrap and show spacing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Additional content that spans multiple lines to test edge-case layout.
      </CardContent>
    </Card>
  ),
};

export const CarouselPrimary: Story = {
  render: () => (
    <Carousel className="w-[360px]">
      <CarouselContent>
        {["One", "Two", "Three"].map((label) => (
          <CarouselItem key={label}>
            <div className="flex h-40 items-center justify-center rounded-md bg-muted text-lg font-semibold">
              {label}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const CarouselSecondary: Story = {
  render: () => (
    <Carousel className="w-[360px]" opts={{ align: "start" }}>
      <CarouselContent>
        {["A", "B", "C", "D"].map((label) => (
          <CarouselItem key={label} className="basis-1/2">
            <div className="flex h-32 items-center justify-center rounded-md bg-muted text-base font-semibold">
              {label}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const CarouselLoading: Story = {
  render: () => (
    <Carousel className="w-[360px] opacity-60">
      <CarouselContent>
        {[1, 2, 3].map((item) => (
          <CarouselItem key={item}>
            <Skeleton className="h-40 w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};

export const CarouselEdgeCase: Story = {
  render: () => (
    <Carousel className="w-[360px]">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <div className="flex h-24 items-center justify-center rounded-md bg-muted text-xs">
              Item {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};

export const ChartPrimary: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[240px] w-[360px]">
      <LineChart data={sampleChartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line type="monotone" dataKey="visits" stroke="var(--color-visits)" strokeWidth={2} />
        <Line type="monotone" dataKey="signups" stroke="var(--color-signups)" strokeWidth={2} />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartContainer>
  ),
};

export const ChartSecondary: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[240px] w-[360px]">
      <BarChart data={sampleChartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

export const ChartLoading: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[240px] w-[360px] opacity-60">
      <AreaChart data={sampleChartData}>
        <Area dataKey="visits" stroke="var(--color-visits)" fill="var(--color-visits)" fillOpacity={0.2} />
      </AreaChart>
    </ChartContainer>
  ),
};

export const ChartEdgeCase: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="h-[240px] w-[360px]">
      <LineChart data={[]}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
      </LineChart>
    </ChartContainer>
  ),
};

export const CheckboxPrimary: Story = {
  render: () => <Checkbox checked />,
};

export const CheckboxSecondary: Story = {
  render: () => <Checkbox />,
};

export const CheckboxLoading: Story = {
  render: () => <Checkbox disabled checked />,
};

export const CheckboxEdgeCase: Story = {
  render: () => <Checkbox checked="indeterminate" />,
};

export const CollapsiblePrimary: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[360px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">Show details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border border-border p-3 text-sm">
        Collapsible content is visible by default.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const CollapsibleSecondary: Story = {
  render: () => (
    <Collapsible className="w-[360px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="secondary">Toggle details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border border-border p-3 text-sm">
        Hidden by default until expanded.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const CollapsibleLoading: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[360px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" disabled>
          Loading
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border border-border p-3">
        <Skeleton className="h-4 w-full" />
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const CollapsibleEdgeCase: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[420px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline">Long trigger label that wraps on smaller widths</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border border-border p-3 text-sm">
        A longer block of content that wraps to multiple lines for layout testing.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const CommandPrimary: Story = {
  render: () => (
    <Command className="w-[360px] rounded-lg border">
      <CommandInput placeholder="Search routes..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Alpine loop</CommandItem>
          <CommandItem>Coastal trail</CommandItem>
          <CommandItem>Forest walk</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const CommandSecondary: Story = {
  render: () => (
    <CommandDialog open>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandGroup heading="Quick actions">
          <CommandItem>
            Create new route <CommandShortcut>CMD+N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Open saved filters <CommandShortcut>CMD+F</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent">
          <CommandItem>Swiss ridge</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
};

export const CommandLoading: Story = {
  render: () => (
    <Command className="w-[360px] rounded-lg border opacity-60">
      <CommandInput placeholder="Loading..." disabled />
      <CommandList>
        <CommandGroup heading="Loading">
          <CommandItem>
            <Skeleton className="h-4 w-full" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const CommandEdgeCase: Story = {
  render: () => (
    <Command className="w-[360px] rounded-lg border">
      <CommandInput placeholder="Search long labels..." />
      <CommandList>
        <CommandGroup heading="Long labels">
          <CommandItem>Extremely long command item label to test wrapping behavior</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const ContextMenuPrimary: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          New route <ContextMenuShortcut>CMD+N</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const ContextMenuSecondary: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed">
        Right click for settings
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>Show distance</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show elevation</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="metric">
          <ContextMenuRadioItem value="metric">Metric</ContextMenuRadioItem>
          <ContextMenuRadioItem value="imperial">Imperial</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const ContextMenuLoading: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed">
        Right click disabled
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem disabled>Loading...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const ContextMenuEdgeCase: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-md border border-dashed">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-72">
        <ContextMenuItem>
          Very long context menu item label for edge case wrapping
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const DialogPrimary: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people</DialogTitle>
          <DialogDescription>Send a link to invite participants.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Send invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DialogSecondary: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit event details</DialogTitle>
          <DialogDescription>Update the title and notes.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DialogLoading: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Loading</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fetching data</DialogTitle>
          <DialogDescription>
            <Skeleton className="h-4 w-full" />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled>Working</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DialogEdgeCase: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button variant="outline">Edge case dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Long dialog title that wraps on multiple lines</DialogTitle>
          <DialogDescription>
            Long description text that tests the dialog layout under extended content conditions.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DrawerPrimary: Story = {
  render: () => (
    <Drawer open>
      <DrawerTrigger asChild>
        <Button>Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>New event</DrawerTitle>
          <DrawerDescription>Fill in the details below.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <Input placeholder="Event title" />
        </div>
        <DrawerFooter>
          <Button>Create</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DrawerSecondary: Story = {
  render: () => (
    <Drawer open>
      <DrawerTrigger asChild>
        <Button variant="secondary">Filter</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Refine your search.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 space-y-2">
          <Checkbox checked />
          <Checkbox />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const DrawerLoading: Story = {
  render: () => (
    <Drawer open>
      <DrawerTrigger asChild>
        <Button>Loading</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Loading content</DrawerTitle>
          <DrawerDescription>
            <Skeleton className="h-4 w-full" />
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <Skeleton className="h-8 w-full" />
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const DrawerEdgeCase: Story = {
  render: () => (
    <Drawer open>
      <DrawerTrigger asChild>
        <Button variant="outline">Edge case drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Long drawer title to test wrapping behavior</DrawerTitle>
          <DrawerDescription>Dense content here to stretch the layout.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 text-sm">
          A larger body of text to test padding and scroll behavior inside the drawer content.
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const DropdownMenuPrimary: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Edit <DropdownMenuShortcut>CMD+E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Archive</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DropdownMenuSecondary: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem checked>Show distance</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Show time</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Units</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="metric">
          <DropdownMenuRadioItem value="metric">Metric</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="imperial">Imperial</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DropdownMenuLoading: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Loading</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem disabled>Fetching options...</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DropdownMenuEdgeCase: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Edge case</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Very long dropdown menu item label for edge case wrapping
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const FormPrimary: Story = {
  render: () => {
    const form = useForm({ defaultValues: { title: "" } });
    return (
      <Form {...form}>
        <form className="space-y-4 w-[320px]">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event title</FormLabel>
                <FormControl>
                  <Input placeholder="Sunrise hike" {...field} />
                </FormControl>
                <FormDescription>Visible to everyone who can join.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    );
  },
};

export const FormSecondary: Story = {
  render: () => {
    const form = useForm({ defaultValues: { title: "" } });
    useEffect(() => {
      form.setError("title", { message: "Title is required" });
    }, [form]);
    return (
      <Form {...form}>
        <form className="space-y-4 w-[320px]">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event title</FormLabel>
                <FormControl>
                  <Input placeholder="Add a title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit">
            Save
          </Button>
        </form>
      </Form>
    );
  },
};

export const FormLoading: Story = {
  render: () => {
    const form = useForm({ defaultValues: { title: "" } });
    return (
      <Form {...form}>
        <form className="space-y-4 w-[320px] opacity-60">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loading</FormLabel>
                <FormControl>
                  <Input placeholder="Loading..." disabled {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled>Saving</Button>
        </form>
      </Form>
    );
  },
};

export const FormEdgeCase: Story = {
  render: () => {
    const form = useForm({ defaultValues: { title: "" } });
    return (
      <Form {...form}>
        <form className="space-y-4 w-[380px]">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Very long label for an edge case form field</FormLabel>
                <FormControl>
                  <Input placeholder="This is a long placeholder value" {...field} />
                </FormControl>
                <FormDescription>
                  A longer description to check spacing and line height for the field.
                </FormDescription>
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  },
};

export const HoverCardPrimary: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        Quick details about the organizer.
      </HoverCardContent>
    </HoverCard>
  ),
};

export const HoverCardSecondary: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="secondary">Hover for info</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        Extended content for the hover card to show line wrapping and layout.
      </HoverCardContent>
    </HoverCard>
  ),
};

export const HoverCardLoading: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" disabled>
          Loading
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        <Skeleton className="h-4 w-full" />
      </HoverCardContent>
    </HoverCard>
  ),
};

export const HoverCardEdgeCase: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for long content</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        This hover card content is intentionally verbose to test edge case widths.
      </HoverCardContent>
    </HoverCard>
  ),
};

export const InputPrimary: Story = {
  render: () => <Input placeholder="Search routes" className="w-[280px]" />,
};

export const InputSecondary: Story = {
  render: () => <Input type="email" placeholder="name@example.com" className="w-[280px]" />,
};

export const InputLoading: Story = {
  render: () => <Input placeholder="Loading..." disabled className="w-[280px]" />,
};

export const InputEdgeCase: Story = {
  render: () => (
    <Input
      defaultValue="Very long input value that should overflow gracefully"
      className="w-[280px]"
    />
  ),
};

export const InputOtpPrimary: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );
  },
};

export const InputOtpSecondary: Story = {
  render: () => (
    <InputOTP maxLength={6} value="123456" onChange={() => undefined}>
      <InputOTPGroup>
        {Array.from({ length: 6 }).map((_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const InputOtpLoading: Story = {
  render: () => (
    <InputOTP maxLength={6} value="" onChange={() => undefined} disabled>
      <InputOTPGroup>
        {Array.from({ length: 6 }).map((_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const InputOtpEdgeCase: Story = {
  render: () => (
    <InputOTP maxLength={4} value="9999" onChange={() => undefined}>
      <InputOTPGroup>
        {Array.from({ length: 4 }).map((_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const LabelPrimary: Story = {
  render: () => <Label htmlFor="title">Event title</Label>,
};

export const LabelSecondary: Story = {
  render: () => (
    <Label htmlFor="title" className="text-muted-foreground">
      Optional note
    </Label>
  ),
};

export const LabelLoading: Story = {
  render: () => <Skeleton className="h-4 w-20" />,
};

export const LabelEdgeCase: Story = {
  render: () => <Label>Very long label text to show wrapping</Label>,
};

export const MenubarPrimary: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New <MenubarShortcut>CMD+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Quit</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const MenubarSecondary: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel inset>Preferences</MenubarLabel>
          <MenubarSeparator />
          <MenubarCheckboxItem checked>Show grid</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="compact">
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const MenubarLoading: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger disabled>Loading</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  ),
};

export const MenubarEdgeCase: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Very long menu title</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Menu item with a very long label for edge cases</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const NavigationMenuPrimary: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Routes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-56 text-sm">Explore nearby routes.</div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-4 py-2 inline-block">
            Events
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const NavigationMenuSecondary: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-72 text-sm">
              Longer content example that wraps and expands the menu width.
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const NavigationMenuLoading: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <NavigationMenu className="opacity-60">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>Loading</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const NavigationMenuEdgeCase: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Long navigation item label</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-80 text-sm">
              Content that demonstrates layout with long strings and multi-line layout.
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const PaginationPrimary: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const PaginationSecondary: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const PaginationLoading: Story = {
  render: () => (
    <Pagination className="opacity-60">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">...</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const PaginationEdgeCase: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink href="#">{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  ),
};

export const PopoverPrimary: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">Popover content goes here.</PopoverContent>
    </Popover>
  ),
};

export const PopoverSecondary: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Details</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        Secondary content with a bit more descriptive text to wrap.
      </PopoverContent>
    </Popover>
  ),
};

export const PopoverLoading: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" disabled>
          Loading
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <Skeleton className="h-4 w-full" />
      </PopoverContent>
    </Popover>
  ),
};

export const PopoverEdgeCase: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Long popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        Popover content with longer text to verify padding and line heights.
      </PopoverContent>
    </Popover>
  ),
};

export const ProgressPrimary: Story = {
  render: () => <Progress value={40} className="w-[320px]" />,
};

export const ProgressSecondary: Story = {
  render: () => <Progress value={80} className="w-[320px]" />,
};

export const ProgressLoading: Story = {
  render: () => <Progress value={10} className="w-[320px] animate-pulse" />,
};

export const ProgressEdgeCase: Story = {
  render: () => <Progress value={100} className="w-[320px]" />,
};

export const RadioGroupPrimary: Story = {
  render: () => (
    <RadioGroup defaultValue="loop" className="space-y-2">
      <label className="flex items-center gap-2">
        <RadioGroupItem value="loop" />
        Loop
      </label>
      <label className="flex items-center gap-2">
        <RadioGroupItem value="out" />
        Out and back
      </label>
    </RadioGroup>
  ),
};

export const RadioGroupSecondary: Story = {
  render: () => (
    <RadioGroup defaultValue="long" className="space-y-2">
      <label className="flex items-center gap-2">
        <RadioGroupItem value="short" />
        Short label
      </label>
      <label className="flex items-center gap-2">
        <RadioGroupItem value="long" />
        Longer label text that wraps to another line if needed
      </label>
    </RadioGroup>
  ),
};

export const RadioGroupLoading: Story = {
  render: () => (
    <RadioGroup disabled className="space-y-2 opacity-60">
      <label className="flex items-center gap-2">
        <RadioGroupItem value="one" />
        Loading
      </label>
    </RadioGroup>
  ),
};

export const RadioGroupEdgeCase: Story = {
  render: () => (
    <RadioGroup className="space-y-2">
      <label className="flex items-center gap-2">
        <RadioGroupItem value="none" />
        Unselected by default
      </label>
    </RadioGroup>
  ),
};

export const ResizablePrimary: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-40 w-[420px] rounded-md border">
      <ResizablePanel defaultSize={50} className="flex items-center justify-center">
        Left
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="flex items-center justify-center">
        Right
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ResizableSecondary: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="h-52 w-[320px] rounded-md border">
      <ResizablePanel defaultSize={60} className="flex items-center justify-center">
        Top
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40} className="flex items-center justify-center">
        Bottom
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ResizableLoading: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-40 w-[420px] rounded-md border opacity-60">
      <ResizablePanel defaultSize={50} className="flex items-center justify-center">
        <Skeleton className="h-6 w-20" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="flex items-center justify-center">
        <Skeleton className="h-6 w-20" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ResizableEdgeCase: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="h-40 w-[420px] rounded-md border">
      <ResizablePanel defaultSize={20} className="flex items-center justify-center">
        Narrow
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className="flex items-center justify-center">
        Wide panel with more content
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ScrollAreaPrimary: Story = {
  render: () => (
    <ScrollArea className="h-32 w-[280px] rounded-md border p-3">
      <div className="space-y-2 text-sm">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>Scrollable item {i + 1}</div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ScrollAreaSecondary: Story = {
  render: () => (
    <ScrollArea className="h-32 w-[280px] rounded-md border p-3">
      <div className="space-y-2 text-sm">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>Short list item {i + 1}</div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const ScrollAreaLoading: Story = {
  render: () => (
    <ScrollArea className="h-32 w-[280px] rounded-md border p-3">
      <Skeleton className="h-4 w-full" />
    </ScrollArea>
  ),
};

export const ScrollAreaEdgeCase: Story = {
  render: () => (
    <ScrollArea className="h-32 w-[280px] rounded-md border p-3">
      <div className="text-sm">
        Very long line of text without spaces to test overflow behavior in the scroll area
        component.
      </div>
    </ScrollArea>
  ),
};

export const SelectPrimary: Story = {
  render: () => (
    <Select defaultValue="relevance">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Relevance</SelectItem>
        <SelectItem value="distance">Distance</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SelectSecondary: Story = {
  render: () => (
    <Select defaultValue="loop">
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Route type" />
      </SelectTrigger>
      <SelectContent>
        <SelectLabel>Route types</SelectLabel>
        <SelectItem value="loop">Loop</SelectItem>
        <SelectItem value="out">Out and back</SelectItem>
        <SelectItem value="point">Point to point</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SelectLoading: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Loading..." />
      </SelectTrigger>
    </Select>
  ),
};

export const SelectEdgeCase: Story = {
  render: () => (
    <Select defaultValue="long">
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="long">Very long select item label that should wrap</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const SeparatorPrimary: Story = {
  render: () => <Separator className="w-[320px]" />,
};

export const SeparatorSecondary: Story = {
  render: () => (
    <div className="flex h-20 items-center">
      <Separator orientation="vertical" />
    </div>
  ),
};

export const SeparatorLoading: Story = {
  render: () => <Separator className="w-[320px] opacity-50" />,
};

export const SeparatorEdgeCase: Story = {
  render: () => <Separator className="w-[420px]" />,
};

export const SheetPrimary: Story = {
  render: () => (
    <Sheet open>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter routes</SheetTitle>
          <SheetDescription>Adjust your preferences.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <Input placeholder="Search" />
        </div>
        <SheetFooter>
          <Button>Apply</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const SheetSecondary: Story = {
  render: () => (
    <Sheet open>
      <SheetTrigger asChild>
        <Button variant="secondary">Sheet left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Quick links</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-2 text-sm">
          <div>Events</div>
          <div>Routes</div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const SheetLoading: Story = {
  render: () => (
    <Sheet open>
      <SheetTrigger asChild>
        <Button>Loading</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Loading sheet</SheetTitle>
          <SheetDescription>
            <Skeleton className="h-4 w-full" />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const SheetEdgeCase: Story = {
  render: () => (
    <Sheet open>
      <SheetTrigger asChild>
        <Button variant="outline">Edge case sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Very long sheet title to test wrapping</SheetTitle>
          <SheetDescription>
            Longer description content to check line height and spacing.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const SidebarPrimary: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarInput placeholder="Search" />
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Routes</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-2">
            <Button size="sm">Upgrade</Button>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6">
          <SidebarTrigger />
          <div className="mt-4 text-sm text-muted-foreground">Main content area</div>
        </main>
      </div>
    </SidebarProvider>
  ),
};

export const SidebarSecondary: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Home</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <main className="flex-1 p-6">
          <SidebarTrigger />
          <div className="mt-4 text-sm text-muted-foreground">Collapsed sidebar view</div>
        </main>
      </div>
    </SidebarProvider>
  ),
};

export const SidebarLoading: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent className="p-2">
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
            <SidebarMenuSkeleton showIcon />
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6 text-sm text-muted-foreground">Loading sidebar</main>
      </div>
    </SidebarProvider>
  ),
};

export const SidebarEdgeCase: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Very long sidebar item label that should truncate nicely
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6 text-sm text-muted-foreground">Edge case labels</main>
      </div>
    </SidebarProvider>
  ),
};

export const SkeletonPrimary: Story = {
  render: () => <Skeleton className="h-6 w-[200px]" />,
};

export const SkeletonSecondary: Story = {
  render: () => <Skeleton className="h-10 w-[320px]" />,
};

export const SkeletonLoading: Story = {
  render: () => <Skeleton className="h-6 w-[200px]" />,
};

export const SkeletonEdgeCase: Story = {
  render: () => <Skeleton className="h-20 w-[420px]" />,
};

export const SliderPrimary: Story = {
  render: () => <Slider defaultValue={[40]} max={100} step={1} className="w-[320px]" />,
};

export const SliderSecondary: Story = {
  render: () => <Slider defaultValue={[20, 80]} max={100} step={5} className="w-[320px]" />,
};

export const SliderLoading: Story = {
  render: () => <Slider defaultValue={[50]} disabled className="w-[320px]" />,
};

export const SliderEdgeCase: Story = {
  render: () => <Slider defaultValue={[1]} max={100} step={1} className="w-[320px]" />,
};

export const SonnerPrimary: Story = {
  render: () => (
    <div className="space-y-3">
      <Button
        onClick={() => sonnerToast("Route saved", { description: "Your route is now public." })}
      >
        Show toast
      </Button>
      <SonnerToaster />
    </div>
  ),
};

export const SonnerSecondary: Story = {
  render: () => (
    <div className="space-y-3">
      <Button
        variant="secondary"
        onClick={() =>
          sonnerToast("Invite sent", {
            description: "We emailed everyone in the group.",
            action: { label: "Undo", onClick: () => undefined },
          })
        }
      >
        Show toast
      </Button>
      <SonnerToaster />
    </div>
  ),
};

export const SonnerLoading: Story = {
  render: () => (
    <div className="space-y-3">
      <Button onClick={() => sonnerToast.loading("Uploading photos...")}>Show loading</Button>
      <SonnerToaster />
    </div>
  ),
};

export const SonnerEdgeCase: Story = {
  render: () => (
    <div className="space-y-3">
      <Button
        variant="outline"
        onClick={() =>
          sonnerToast(
            "Long toast title that spans multiple words for edge case validation",
            { description: "Extra details that need wrapping in the toast body." },
          )
        }
      >
        Show long toast
      </Button>
      <SonnerToaster />
    </div>
  ),
};

export const SwitchPrimary: Story = {
  render: () => <Switch checked />,
};

export const SwitchSecondary: Story = {
  render: () => <Switch />,
};

export const SwitchLoading: Story = {
  render: () => <Switch disabled checked />,
};

export const SwitchEdgeCase: Story = {
  render: () => <Switch aria-label="Long switch label for accessibility" />,
};

export const TablePrimary: Story = {
  render: () => (
    <Table className="w-[420px]">
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Distance</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Forest loop</TableCell>
          <TableCell>8 km</TableCell>
          <TableCell>2h</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Alpine ridge</TableCell>
          <TableCell>14 km</TableCell>
          <TableCell>5h</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableSecondary: Story = {
  render: () => (
    <Table className="w-[420px]">
      <TableCaption>Upcoming routes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Difficulty</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Coastal trail</TableCell>
          <TableCell>T2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableLoading: Story = {
  render: () => (
    <Table className="w-[420px]">
      <TableHeader>
        <TableRow>
          <TableHead>Route</TableHead>
          <TableHead>Distance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={2}>
            <Skeleton className="h-4 w-full" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TableEdgeCase: Story = {
  render: () => (
    <Table className="w-[460px]">
      <TableHeader>
        <TableRow>
          <TableHead>Route name</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Very long route title for edge case layout</TableCell>
          <TableCell>Long notes that wrap to a second line in the table cell.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const TabsPrimary: Story = {
  render: () => (
    <Tabs defaultValue="details" className="w-[320px]">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="discussion">Discussion</TabsTrigger>
      </TabsList>
      <TabsContent value="details">Details content</TabsContent>
      <TabsContent value="discussion">Discussion content</TabsContent>
    </Tabs>
  ),
};

export const TabsSecondary: Story = {
  render: () => (
    <Tabs defaultValue="routes" className="w-[320px]">
      <TabsList>
        <TabsTrigger value="routes">Routes</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
      </TabsList>
      <TabsContent value="routes">Routes content</TabsContent>
      <TabsContent value="events">Events content</TabsContent>
    </Tabs>
  ),
};

export const TabsLoading: Story = {
  render: () => (
    <Tabs defaultValue="loading" className="w-[320px] opacity-60">
      <TabsList>
        <TabsTrigger value="loading">Loading</TabsTrigger>
      </TabsList>
      <TabsContent value="loading">
        <Skeleton className="h-4 w-full" />
      </TabsContent>
    </Tabs>
  ),
};

export const TabsEdgeCase: Story = {
  render: () => (
    <Tabs defaultValue="long" className="w-[360px]">
      <TabsList>
        <TabsTrigger value="long">Long label tab name</TabsTrigger>
        <TabsTrigger value="short">Short</TabsTrigger>
      </TabsList>
      <TabsContent value="long">Long label content</TabsContent>
      <TabsContent value="short">Short content</TabsContent>
    </Tabs>
  ),
};

export const TextareaPrimary: Story = {
  render: () => <Textarea placeholder="Add a note" className="w-[320px]" />,
};

export const TextareaSecondary: Story = {
  render: () => (
    <Textarea
      defaultValue="Secondary state text that shows how content wraps across lines."
      className="w-[320px]"
    />
  ),
};

export const TextareaLoading: Story = {
  render: () => <Textarea placeholder="Loading..." disabled className="w-[320px]" />,
};

export const TextareaEdgeCase: Story = {
  render: () => (
    <Textarea
      defaultValue="Extremely long text in a textarea for edge case layout testing. This should be long enough to wrap."
      className="w-[360px]"
    />
  ),
};

export const ToastPrimary: Story = {
  render: () => (
    <ToastProvider>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Route saved</ToastTitle>
          <ToastDescription>People can now find it in search.</ToastDescription>
        </div>
        <ToastAction altText="Undo">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

export const ToastSecondary: Story = {
  render: () => (
    <ToastProvider>
      <Toast open variant="destructive">
        <div className="grid gap-1">
          <ToastTitle>Upload failed</ToastTitle>
          <ToastDescription>Try again in a few minutes.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

export const ToastLoading: Story = {
  render: () => (
    <ToastProvider>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Processing</ToastTitle>
          <ToastDescription>
            <Skeleton className="h-4 w-full" />
          </ToastDescription>
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

export const ToastEdgeCase: Story = {
  render: () => (
    <ToastProvider>
      <Toast open>
        <div className="grid gap-1">
          <ToastTitle>Very long toast title that wraps to a second line</ToastTitle>
          <ToastDescription>
            Extra long description to ensure the toast can handle long-form content without
            breaking.
          </ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
};

export const ToasterPrimary: Story = {
  render: () => (
    <div className="space-y-3">
      <Button onClick={() => toast({ title: "Saved", description: "Route created." })}>
        Show toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const ToasterSecondary: Story = {
  render: () => (
    <div className="space-y-3">
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: "Invite sent",
            description: "Participants have been notified.",
          })
        }
      >
        Show toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const ToasterLoading: Story = {
  render: () => (
    <div className="space-y-3">
      <Button onClick={() => toast({ title: "Uploading...", description: "Please wait." })}>
        Show loading
      </Button>
      <Toaster />
    </div>
  ),
};

export const ToasterEdgeCase: Story = {
  render: () => (
    <div className="space-y-3">
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: "Very long toast title to test wrapping",
            description:
              "Long description content to validate spacing and wrapping in the toast layout.",
          })
        }
      >
        Show long toast
      </Button>
      <Toaster />
    </div>
  ),
};

export const TogglePrimary: Story = {
  render: () => <Toggle pressed>Active</Toggle>,
};

export const ToggleSecondary: Story = {
  render: () => <Toggle>Inactive</Toggle>,
};

export const ToggleLoading: Story = {
  render: () => <Toggle disabled>Loading</Toggle>,
};

export const ToggleEdgeCase: Story = {
  render: () => <Toggle className="w-[220px]">Toggle with long label</Toggle>,
};

export const ToggleGroupPrimary: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="loop">
      <ToggleGroupItem value="loop">Loop</ToggleGroupItem>
      <ToggleGroupItem value="out">Out</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const ToggleGroupSecondary: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bike"]}>
      <ToggleGroupItem value="bike">Bike</ToggleGroupItem>
      <ToggleGroupItem value="hike">Hike</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const ToggleGroupLoading: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="loading" disabled>
      <ToggleGroupItem value="loading">Loading</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const ToggleGroupEdgeCase: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="long">Very long toggle group label</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TooltipPrimary: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const TooltipSecondary: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Secondary tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const TooltipLoading: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" disabled>
            Loading
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <Skeleton className="h-4 w-20" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const TooltipEdgeCase: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover long tooltip</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[240px]">
          Tooltip content that wraps to multiple lines for edge cases.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
