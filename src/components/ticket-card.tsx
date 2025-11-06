import { formatDate } from "@/lib/utils";
import clsx from "clsx";
import { SectionText } from "./ui/section-text";
interface TicketCardProps {
  ticketData: any;
  eventCard: {
    location: string;
    startDate: string | Date;
  };
  width?: string;
  onPress?: () => void;
  status?: boolean;
}

export const TicketCard = ({
  ticketData,
  eventCard,
  width = "w-[330px]",
  onPress,
  status = false,
}: TicketCardProps) => {
  const containerClasses = clsx(
    "relative flex-shrink-0 rounded-lg border bg-[var(--container)] p-3 transition-all duration-200 cursor-pointer hover:bg-[var(--container-hover)] active:bg-[var(--container-hover)]",
    width,
  );

  return (
    <div onClick={onPress} className={containerClasses}>
      <div className={clsx(status && "blur-xs")}>
        <p className="line-clamp-2 font-semibold">{ticketData.event.title}</p>
        <SectionText className="mt-2 text-sm">{eventCard.location}</SectionText>
        <SectionText className="text-sm">
          {formatDate(eventCard.startDate)}
        </SectionText>
      </div>

      {status && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black/40">
          <p className="text-lg font-bold">Finished</p>
        </div>
      )}
    </div>
  );
};
