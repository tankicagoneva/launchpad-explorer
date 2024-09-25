import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RowsPerPageSelector = ({pageSize, onPageSizeChange}: {pageSize: number, onPageSizeChange: (value: number) => void}) => {
 const pageSizes = [10, 20, 30, 40, 50];
  return (
    <>
    <div data-testid='row-per-page-selection' className="gap-4 flex items-center">
    <p  className="text-sm font-medium">Rows per page</p>
    <Select
    
          value={`${pageSize}`}
          onValueChange={(value) => {
              onPageSizeChange(Number(value));
          } }
      >
          <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
          </SelectTrigger>
          <SelectContent side="top" >
              {pageSizes.map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`} >
                      {pageSize}
                  </SelectItem>
              ))}
          </SelectContent>
      </Select>
      </div></>

    )
}

export default  RowsPerPageSelector;