import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button"

const PaginationControls = ({  currentPage, totalPages, onFirstPage, onPreviousPage, onNextPage, onLastPage, canPreviousPage, canNextPage }: {
    currentPage: number;
    totalPages: number;
    onFirstPage: () => void;
    onPreviousPage: () => void;
    onNextPage: () => void;
    onLastPage: () => void;
    canPreviousPage: boolean;
    canNextPage: boolean;
}) => {
  return (
    <div data-testid='pagination' className="flex pt-4 md:items-center md:space-x-2 md:pt-0">
    <div className="md:space-x-2 pr-4 md:px-4">
      <p className="text-sm font-medium ">
        Page {currentPage} of {totalPages}
      </p>
    </div>
    <div>
    <Button variant={"outline"} size="sm" onClick={onFirstPage} disabled={!canPreviousPage}  aria-label="first">
      <ChevronsLeft size={18} strokeWidth={0.9} absoluteStrokeWidth />
    </Button>
    <Button className="mx-2" variant={"outline"} size="sm" onClick={onPreviousPage} disabled={!canPreviousPage}  aria-label="previous">
      <ChevronLeft size={18} strokeWidth={0.9} absoluteStrokeWidth />
    </Button>
    <Button className="mx-2" variant={"outline"} size="sm" onClick={onNextPage} disabled={!canNextPage} aria-label="next">
      <ChevronRight size={18} strokeWidth={0.9} absoluteStrokeWidth />
    </Button>
    <Button variant={"outline"} size="sm" onClick={onLastPage} disabled={!canNextPage} aria-label="last">
      <ChevronsRight size={18} strokeWidth={0.9} absoluteStrokeWidth />
    </Button>
    </div>
  </div>
  )
}

export default PaginationControls;