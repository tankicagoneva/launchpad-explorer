"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Launch } from "../types/launch";

export const columns: ColumnDef<Launch>[] = [
  {
    header: "Flight Number",
    accessorKey: "flight_number",
  },
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },

  {
    header: "Details",
    accessorKey: "details",
  },

  {
    header: "Date",
    accessorKey: "date_utc",
    cell: ({ row }) => {
      const date = new Date(row.original.date_utc);
      return date.toLocaleDateString();
    },
  },
  {
    header: "Success",
    accessorKey: "success",
    cell: ({ row }) => {
      const success = row.original.success;
      return success ? "✅" : "❌";
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const launch = row.original;
      const url = launch.links.article;
      const patchImage = launch.links.patch.small;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* TODO: add app pages instead of wikipedia links */}
            <DropdownMenuItem
              onClick={() =>
                url && window.open(url, "_blank", "noopener,noreferrer")
              }
            >
              Read more
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                patchImage &&
                window.open(patchImage, "_blank", "noopener,noreferrer")
              }
            >
              View image
            </DropdownMenuItem>
            {/* TODO: save progress in local storage */}
            <DropdownMenuItem>Watch </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
