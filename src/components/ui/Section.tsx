import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ className, fullWidth = false, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-20 md:py-32 relative overflow-hidden",
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";
