import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

export const DataPagination = () => (
  <Pagination className="mt-10">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink className="cursor-default">1</PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationNext />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
