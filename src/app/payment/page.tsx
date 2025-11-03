import { Wrapper } from "@/components/ui/wrapper";
import { Countdown } from "./Countdown";
import { Detail } from "./Detail";
import { Info } from "./Info";

export default function Payment() {
  return (
    <main>
      <Wrapper>
        <Countdown />
        <section className="mt-10 flex h-min gap-10">
          <div className="flex-[70%]">
            <Info />
          </div>
          <div className="flex-[30%]">
            <Detail />
          </div>
        </section>
      </Wrapper>
    </main>
  );
}
