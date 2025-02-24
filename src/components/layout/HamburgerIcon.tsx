export default function HamburgerIcon() {
  return (
    <button className="flex flex-col items-center gap-[6px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className="w-5 border-[1.5px] border-red-primary" />
      ))}
    </button>
  );
}
