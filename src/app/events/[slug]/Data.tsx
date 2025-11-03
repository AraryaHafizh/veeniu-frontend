import { PageTitle } from "@/components/ui/page-title";
import { SectionText } from "@/components/ui/section-text";
import { SectionTitle } from "@/components/ui/section-title";
import { Separator } from "@/components/ui/separator";
import { eventData } from "@/lib/const-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export const Data = () => {
  return (
    <section className="pl-5 md:pl-20">
      <EventThumbnail />
      <EventData />
    </section>
  );
};

const EventThumbnail = () => (
  <img
    src={eventData.imageUrl}
    className="h-[600px] w-full rounded-lg object-cover"
  />
);

const EventInfo = () => {
  const eventInfoData = [
    { title: "Date & Time", data: formatDate(eventData.startDate) },
    { title: "Location", data: eventData.location },
    { title: "Price", data: formatCurrency(eventData.price) },
    {
      title: "Available tickets",
      data: `${eventData.availableSeats} remaining`,
    },
  ];
  return (
    <div className="flex justify-between">
      {eventInfoData.map((item, i) => (
        <div key={i} className="my-5 min-w-[100px]">
          <SectionText>{item.title}</SectionText>
          <p className="mt-2">{item.data}</p>
        </div>
      ))}
      <div className="active:bg-[var(--container-hover)]s my-3 min-w-[220px] cursor-pointer rounded-sm px-5 py-2 transition-all duration-200 hover:bg-[var(--container-hover)]">
        <SectionText>Organize by</SectionText>
        <p className="mt-2">Hooman made</p>
      </div>
    </div>
  );
};

const EventData = () => {
  return (
    <div>
      <PageTitle className="mt-10 mb-5 line-clamp-2">
        {eventData.title}
      </PageTitle>
      <Separator />
      <EventInfo />
      <Separator />
      <SectionTitle className="mt-10 mb-5">Event detail</SectionTitle>
      <p>{eventData.description}</p>
    </div>
  );
};
