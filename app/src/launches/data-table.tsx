"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
  useReactTable,
  ColumnFiltersState,
  VisibilityState
} from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import  PaginationControls from "@/components/pagination-controls";
import RowsPerPageSelector from "@/components/rows-per-page-selector";
import RowSelectionInfo from "@/components/row-selection-info";

interface DataTableProps<TData, TValue> { 
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function LaunchesDataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });


  const pageSize = table.getState().pagination.pageSize;
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();
  const selectedRow=table.getFilteredSelectedRowModel().rows.length; 
  const totalRows= table.getFilteredRowModel().rows.length;



  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          className="max-w-sm"
          placeholder="Filter by name"
          value={(table.getColumn("name")?.getFilterValue() as string) || ""}
          onChange={(e) => table.getColumn("name")?.setFilterValue(e.target.value)}
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                const headerContent = column.id
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: boolean) => column.toggleVisibility(!!value)}
                  >
                    {headerContent}
                  </DropdownMenuCheckboxItem>
                );
              })}{" "}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>;
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex-col flex items-start justify-between md:space-x-2 py-4 md:flex-row md:items-center ">
         <RowSelectionInfo selectedRow={selectedRow} totalRows={totalRows} />
        <div className="flex flex-col items-start pt-4 md:space-x-2 md:flex-row md:items-center md:pt-0">
            <RowsPerPageSelector pageSize={pageSize} onPageSizeChange={(value) => table.setPageSize(value)} />  
            <PaginationControls 
              currentPage={currentPage}
              totalPages={totalPages}
              canPreviousPage={canPreviousPage} 
              canNextPage={canNextPage} 
              onFirstPage={() => table.firstPage()}
              onPreviousPage={() => table.previousPage()}
              onNextPage={() => table.nextPage()}
              onLastPage={() => table.lastPage()}
            />
        </div>
      </div>
    </div>
  );
}
export default LaunchesDataTable;
