import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerNavs = [
  {
    label: "Business Lines",
    items: [
      {
        href: "#/businessLines",
        name: "Ship Brokers",
      },
      {
        href: "#/businessLines",
        name: "Ship Agents",
      },
      {
        href: "#/businessLines",
        name: "Logistic Agents",
      },
      {
        href: "mailto:map@mastershipping.us?body=Dear%20Master%20Shipping%20Team%0A%0AI'm%20interested%20in",
        name: "Support",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        href: "#/about",
        name: "About Us",
      },
      {
        href: "#/team",
        name: "Our Team",
      },
      {
        href: "#/contact",
        name: "Contact",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "https://www.linkedin.com/company/master-shipping/",
    name: "Linkedin",
    icon: <LinkedInLogoIcon className="size-4" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-[#182C4B]">
      <div className="w-full px-4">
        <div className="gap-4 p-4 py-16 sm:pb-16 md:flex md:justify-between mx-auto max-w-screen-xl">
          <div className="mb-12 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                className="h-14 w-auto"
                src="/logo/msNewLogo.svg"
                alt="Master Shipping Logo"
                width={1000}
                height={1000}
              />
              <div className="flex flex-col space-y-0.5 items-center">
                <span className="self-center whitespace-nowrap tracking-wide text-2xl font-semibold text-slate-50 font-avantGarde">
                  MASTER SHIPPING
                </span>
                <p className="font-kabel text-slate-50 self-center text-sm">
                  Ship Brokers & Agents
                </p>
              </div>
            </Link>
            <div className="max-w-sm text-slate-50">
              <div className="z-10 mt-4 flex w-full flex-col items-start text-left">
                <p className="mt-2">
                  Contact Us for any enquires or support. We are here to help.
                </p>
                <Link
                  href="https://wa.me/999769034"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "default",
                    }),
                    "group mt-4 w-full whitespace-nowrap rounded-[2rem] px-6"
                  )}
                >
                  Contact Us
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1 text-slate-50" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-slate-50 dark:text-slate-900">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group inline-flex cursor-pointer items-center justify-start gap-1 text-gray-400 duration-200 hover:text-white hover:opacity-90 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t py-4 sm:flex sm:flex-row sm:items-center sm:justify-between mx-auto max-w-screen-xl">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="fill-slate-500 text-slate-500 hover:fill-white hover:text-white dark:hover:fill-gray-600 dark:hover:text-gray-600 transition-all duration-200"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-400 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <a href="/" className="cursor-pointer">
              Master Shipping
            </a>
            . All Rights Reserved.
            <a
              href="https://www.magnetperu.com/"
              target="_blank"
              className="font-lufgaBold ml-2"
            >
              Made by Magnet
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
