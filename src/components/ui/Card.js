import { cn } from "@/utils/cn";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-xl p-5 transition-all hover:shadow-md hover:border-border-strong",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardRaised({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-raised border border-border rounded-xl p-5 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
