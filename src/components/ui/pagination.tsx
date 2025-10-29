import { useEventStore } from "@/app/events/store";
import { Button } from "./button";

interface paginationProps {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
}

const initData: paginationProps = {
  total: 0,
  page: 1,
  limit: 10,
  totalPages: 0,
  hasNext: false,
};

export const Pagination = () => {
  const { meta, page } = useEventStore();
  return (
    <section className="text-secondary flex space-x-2 text-center select-none">
      <Button
        className="w-9 p-[4px]"
        onClick={() => {}}
        disabled={page <= 1}
      >{`<`}</Button>
      <div className="border-secondary w-20 rounded-full border p-[4px]">
        {page}
      </div>
      <Button
        className="w-9 p-[4px]"
        onClick={() => {}}
        disabled={!meta.hasNext}
      >{`>`}</Button>
    </section>
  );
};
