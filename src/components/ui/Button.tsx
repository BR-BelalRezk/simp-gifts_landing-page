import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  children,
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "py-2 px-4 border rounded-lg font-light capitalize text-base",
        className
      )}
    >
      {children}
    </button>
  );
}
