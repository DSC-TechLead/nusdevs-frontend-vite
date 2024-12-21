import { cn } from "@/lib/utils";
import { ReactFCC } from "@/types/react";
import { HTMLAttributes } from "react";

const Divider: ReactFCC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("relative", className)} {...props}>
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-neutral-30" />
      </div>
      {children && (
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-neutral-30">
            {children}
          </span>
        </div>
      )}
    </div>
  );
};
Divider.displayName = "Divider";

export default Divider;
