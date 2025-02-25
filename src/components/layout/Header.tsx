import Button from "../ui/Button";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed py-4 top-0 left-0 backdrop-blur w-full z-50">
      <nav className="container flex items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-4">
          <Button className="text-red-light-1 bg-white-100 border-red-light-1">
            login
          </Button>
          <Button className="bg-red-primary-1 text-white-body border-red-primary-1">
            sign up
          </Button>
        </div>
      </nav>
    </header>
  );
}
