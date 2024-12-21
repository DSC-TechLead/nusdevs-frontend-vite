import { cn } from "@/lib/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { ReactNode } from "react";

interface DropdownMenuProps {
  children?: ReactNode;
  trigger?: ReactNode;
  defaultOpen?: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  trigger,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {trigger ? (
          <MenuButton as="div">{trigger}</MenuButton>
        ) : (
          <MenuButton className={``}>
            <span className="sr-only">Open options</span>
            <HiEllipsisVertical aria-hidden="true" className="w-5 h-5" />
          </MenuButton>
        )}
      </div>
      <MenuItems
        transition
        className="absolute p-4 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">{children}</div>
      </MenuItems>
    </Menu>

    // Dropdown Menu
  );
};
DropdownMenu.displayName = "DropdownMenu";

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  handleClick: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  handleClick,
  className,
  ...props
}) => {
  return (
    <MenuItem
      as="div"
      className={cn(
        "block cursor-pointer px-4 py-2 text-sm text-primary-text data-[focus]:bg-neutral-10 data-[focus]:text-primary data-[focus]:outline-none",
        className
      )}
      onClick={() => handleClick()}
      {...props}
    >
      {children}
    </MenuItem>
  );
};
DropdownMenuItem.displayName = "DropdownMenuItem";
