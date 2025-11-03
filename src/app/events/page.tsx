import { Wrapper } from "@/components/ui/wrapper";
import { EventsList } from "./EventsList";
import Toolbar from "./Toolbar";
import { DataPagination } from "@/components/data-pagination";

export default function Event() {
  return (
    <main>
      <Wrapper className="mt-[100px]">
        <Toolbar />
        <EventsList />
        <DataPagination />
      </Wrapper>
    </main>
  );
}
