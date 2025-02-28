import { navbarItems } from "@/constants";

export default function Section({
  className,
  children,
  id,
}: React.HTMLAttributes<HTMLElement> & {
  id: (typeof navbarItems)[number]["hash"];
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
