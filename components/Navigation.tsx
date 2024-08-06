import { PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <header className="bg-transparent absolute top-0 right-0 left-0 h-24 w-screen z-50">
      <nav className="mx-auto max-w-7xl px-8 flex items-center p-6 justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Master Shipping</span>
            <Image
              className="h-14 w-auto"
              src="/logo/msNewLogo.svg"
              alt="Master Shipping Logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="#businessLines"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            Business Lines
          </Link>
          <Link
            href="#mainPorts"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            Main Ports
          </Link>
          <Link
            href="#team"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            Our Team
          </Link>
          <Link
            href="#about"
            className="text-sm font-semibold leading-6 text-slate-50"
          >
            About Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-slate-50 hover:translate-x-2 transition-all duration-200"
          >
            Contact Us
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="flex lg:hidden">
            <Menu className="h-5 w-5 text-white" />
          </SheetTrigger>
          <SheetContent className="flex flex-col space-y-4">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Master Shipping</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo/msNewLogoBlue.svg"
                  alt="Master Shipping Logo"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
            <PopoverGroup className="flex flex-col gap-y-8 mt-12">
              <Link
                href="#businessLines"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Business Lines
              </Link>
              <Link
                href="#mainPorts"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Main Ports
              </Link>
              <Link
                href="#team"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Our Team
              </Link>
              <Link
                href="#about"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                About Us
              </Link>
            </PopoverGroup>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navigation;
