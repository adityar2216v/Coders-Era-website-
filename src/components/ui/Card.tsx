import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass-panel rounded-2xl p-6 relative overflow-hidden group",
                    hoverEffect && "hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]",
                    className
                )}
                {...props}
            >
                {hoverEffect && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
Card.displayName = "Card";
