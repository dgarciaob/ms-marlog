"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { useMediaQuery } from "usehooks-ts";

export function ThreeDCardDemo() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleMouseEnter = () => setOpen(true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <CardContainer
            className="inter-var max-w-96"
            onMouseEnter={handleMouseEnter}
          >
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="20"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Ship Brokers
              </CardItem>
              <CardItem
                as="p"
                translateZ="20"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
              >
                Ocean freight for bulk, break-bulk, and containers. Advisory &
                demurrage mitigation.
              </CardItem>
              <CardItem translateZ="20" className="w-full mt-4">
                <Image
                  src="/images/firstPicChange.jpeg"
                  height="1000"
                  width="1000"
                  className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </DialogTrigger>
        <DialogContent>
          <div>
            <p className="font-semibold text-lg mb-4">Ship Broker</p>
            <p>
              An out of the box, ship broking service-oriented mindset along
              with a vast expertise on global trade-lanes enable our customers
              live a real professional and profitable experience for both their
              part and full cargoes in demand of bulk ocean transportation with
              risk management adhered to.
            </p>

            <div className="mt-8 flex flex-col space-y-6">
              <p>
                <strong>- Ship owners:</strong> Crude Oil tankers, Product
                tankers, Chemical Tankers, Parcel Tankers.
              </p>
              <p>
                <strong>- Charterers:</strong> CPP, DPP, Chemicals, Lube oil,
                Biodiesel, Fats and Oils from animals or vegetables.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <CardContainer className="inter-var max-w-96">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="20"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Ship Brokers
            </CardItem>
            <CardItem
              as="p"
              translateZ="20"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
            >
              Ocean freight for bulk, break-bulk, and containers. Advisory &
              demurrage mitigation.
            </CardItem>
            <CardItem translateZ="20" className="w-full mt-4">
              <Image
                src="/images/firstPicChange.jpeg"
                height="1000"
                width="1000"
                className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <p className="font-semibold text-lg mb-4">Ship Broker</p>
          <p>
            An out of the box, ship broking service-oriented mindset along with
            a vast expertise on global trade-lanes enable our customers live a
            real professional and profitable experience for both their part and
            full cargoes in demand of bulk ocean transportation with risk
            management adhered to.
          </p>

          <div className="mt-8 flex flex-col space-y-6">
            <p>
              <strong>- Ship owners:</strong> Crude Oil tankers, Product
              tankers, Chemical Tankers, Parcel Tankers.
            </p>
            <p>
              <strong>- Charterers:</strong> CPP, DPP, Chemicals, Lube oil,
              Biodiesel, Fats and Oils from animals or vegetables.
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
