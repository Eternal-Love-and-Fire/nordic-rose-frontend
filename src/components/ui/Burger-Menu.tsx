import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <nav className="ml-auto mr-8 lg:hidden block">
      <DropdownMenu onOpenChange={handleOpenChange}>
        <DropdownMenuTrigger className="outline-none flex flex-col gap-2 cursor-pointer">
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 dark:bg-white h-0.5 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2">
          <DropdownMenuItem>Blog</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Links</DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
