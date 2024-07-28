import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Link } from "react-router-dom";
  import { Button } from "@/components/ui/button"
  import { MoreHorizontal } from "lucide-react";


  
const DropdownMenuComponent = ({ status,  handleClick, viewImageFunction, readMoreLink}: {
    image: string;
    status: string;
    handleClick: () => void;
    viewImageFunction?: () => void;
    readMoreLink?: string;
    
}) => {

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
      <DropdownMenuItem><Link to={readMoreLink || ""}>Read more</Link></DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={viewImageFunction}>View image</DropdownMenuItem>
      { status == 'active' || status == 'under construction' ?
      <DropdownMenuItem onClick={handleClick}>Watch</DropdownMenuItem>
     : ''}

    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default DropdownMenuComponent;