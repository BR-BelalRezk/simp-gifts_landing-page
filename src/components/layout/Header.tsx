import Button from "../ui/Button";
import HamburgerIcon from "./HamburgerIcon";
import Logo from "./Logo";
import { Menu, MenuToggleButton } from "./Menu";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed py-4 top-0 left-0 w-full z-50 flex justify-center items-center">
      <Menu className="container flex items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-2">
          <MenuToggleButton className="md:hidden flex items-center gap-2">
            <HamburgerIcon />
          </MenuToggleButton>
          <Logo />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Button className="text-red-light-1 bg-white-100 border-red-light-1">
              login
            </Button>
            <Button className="bg-red-primary-1 text-white-body border-red-primary-1">
              sign up
            </Button>
          </div>
          <MenuToggleButton className=" hidden md:block">
            <HamburgerIcon />
          </MenuToggleButton>
        </div>
      </Menu>
    </header>
  );
}
