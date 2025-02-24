import Button from "../ui/Button";
import HamburgerIcon from "./HamburgerIcon";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed py-4 top-0 left-0 backdrop-blur-sm w-full z-50">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HamburgerIcon />
          <Logo />
        </div>
        <div className="flex items-center gap-4 font-urbanist">
          <Button className="text-red-light bg-white-100 border-red-light">
            login
          </Button>
          <Button className="bg-red-primary text-white-body border-red-primary">
            sign up
          </Button>
        </div>
      </nav>
    </header>
  );
}
