
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = ({
  children,
  as: Component = "div",
  className,
  size = "xl",
  ...props
}: ContainerProps) => {
  const sizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
