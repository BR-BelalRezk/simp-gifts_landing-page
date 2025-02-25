import { navbarItems } from "@/constants";

export default function Section({
  className,
  children,
  id,
}: React.HTMLAttributes<HTMLElement> & {
  id: (typeof navbarItems)[number] | "hero";
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
