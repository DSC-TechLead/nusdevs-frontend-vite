import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { RiDraggable } from "react-icons/ri";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  isDraggable: boolean;
}

export const Card: React.FC<CardProps> = ({
  isDraggable = false,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("rounded-lg bg-white", className)} {...props}>
      <div className="flex justify-center py-3">
        {isDraggable && (
          <RiDraggable
            className="text-center rotate-90 text-neutral cursor-grab"
            size={27}
          />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
Card.displayName = "Card";

export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 flex flex-col gap-2", className)} {...props}>
    {children}
  </div>
);
CardHeader.displayName = "CardHeader";

export const CardTitle: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      " text-h3 text-primary-text font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
CardTitle.displayName = "CardTitle";

export const CardDescription: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("text-sm text-secondary-text", className)} {...props}>
    {children}
  </div>
);
CardDescription.displayName = "CardDescription";

export const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("p-6 pt-0 text-body-regular text-primary-text", className)}
    {...props}
  >
    {children}
  </div>
);
CardContent.displayName = "CardContent";

export const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);
CardFooter.displayName = "CardContent";
