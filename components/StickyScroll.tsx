"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Ship Brokers",
    description:
      "Ship broking for bulk, break-bulk cargoes & containers. Review of calculations and demurrage claims mitigation",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/msShipBrokers.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Ship Brokers Image"
        />
      </div>
    ),
  },
  {
    title: "Ship Agents",
    description:
      "We serve the industry attending any type of ship and crew nationality with the highest standards.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/msShipAgents.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Ship Agents Image"
        />
      </div>
    ),
  },
  {
    title: "Logistic Agents",
    description:
      "Isotanks & Flexitanks operations. Holistic approach to your logistic needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/msIsotanks.png"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="Logistic Agents Image"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
