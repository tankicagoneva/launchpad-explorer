"use client"

import { Button } from "@/components/ui/button"

import { ColumnDef } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import { Launchpad } from "../types/launchpad"
import { Checkbox } from "@/components/ui/checkbox"
import { useWatchedLaunchpads } from "@/hooks/useWatchedLaunchpads"
import LaunchpadsDropDownMenu from "@/components/LaunchpadsDropDownMenu"

// eslint-disable-next-line react-hooks/rules-of-hooks
const { handleWatch } = useWatchedLaunchpads()

export const columns: ColumnDef<Launchpad>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        ></Checkbox>
      )
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        ></Checkbox>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {" "}
          Name
          <ChevronsUpDown
            size={12}
            color="currentColor"
            strokeWidth={2}
            className="ml-2"
          />
        </Button>
      )
    },
    accessorKey: "name",
  },

  {
    header: "Successes",
    accessorKey: "launch_successes",
    cell: ({ row }) => {
      const success = row.original.launch_successes
      return success ? `${success}  ✅` : "❌"
    },
  },

  {
    header: "Attempts",
    accessorKey: "launch_attempts",
  },

  {
    header: "Status",
    accessorKey: "status",
  },

  {
    header: "Region",
    accessorKey: "region",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const launchpad = row.original
      const image = launchpad.images.large
      const id = launchpad.id
      const status = launchpad.status

      return (
        <LaunchpadsDropDownMenu
          data-testid="actions"
          image={image}
          status={status}
          handleClick={() => handleWatch(id, launchpad)}
          viewImageFunction={() =>
            image && window.open(image, "_blank", "noopener,noreferrer")
          }
          readMoreLink={`launchpad/${id}`}
        />
      )
    },
  },
]
