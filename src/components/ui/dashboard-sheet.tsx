import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";

interface dashboardSheetProps {
  trigger: string;
  title: string;
  children: React.ReactNode;
}

export function DashboardSheet({
  trigger,
  title,
  children,
}: dashboardSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>{trigger}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {/* <SheetDescription>{description}</SheetDescription> */}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
