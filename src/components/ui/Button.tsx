import ArrowRight from "@/assets/svgs/ArrowRight";
import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  children,
  isCircle = false,
}: React.HTMLAttributes<HTMLButtonElement> & { isCircle?: boolean }) {
  return (
    <button
      className={twMerge(
        "font-light capitalize font-urbanist text-base",
        isCircle
          ? "size-32 rounded-full flex flex-col items-center justify-center gap-2 bg-red-primary text-white-body"
          : "py-2 px-4 border rounded-lg",
        className
      )}
    >
      {children}
      {isCircle && <ArrowRight />}
    </button>
  );
}
