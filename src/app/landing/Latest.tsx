import { EventCard } from "@/components/event-card";
import { SectionTitle } from "@/components/ui/section-title";
import { TextLink } from "@/components/ui/textlink";
import { Wrapper } from "@/components/ui/wrapper";
import { EventProps } from "@/props/event.props";

export const Latest = ({ eventData }: { eventData: EventProps[] }) => {
  return (
    <section className="flex w-full justify-center">
      <Wrapper>
        <div className="flex items-end justify-between">
          <SectionTitle className="mt-10">Latest event</SectionTitle>
          <TextLink link={"/events"} />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3 xl:grid-cols-4">
          {eventData.map((event, i) => (
            <div key={i}>
              <EventCard eventData={event}/>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
