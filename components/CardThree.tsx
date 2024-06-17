"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { useMediaQuery } from "usehooks-ts";

export function ThreeDCardDemoThree() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <CardContainer className="inter-var max-w-96">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="20"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Logistic Agents
              </CardItem>
              <CardItem
                as="p"
                translateZ="20"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Isotanks & Flexitanks operations. Holistic approach to your
                logistic needs.
              </CardItem>
              <CardItem translateZ="20" className="w-full mt-4">
                <Image
                  src="/images/msIsotanks.png"
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
            <p className="font-semibold text-lg mb-4">Logistic Agents</p>
            <p>
              Hands-on staff taking care of every single customer through the
              whole logistics process turns us in the best market partner choice
              for moving bulk liquid cargoes in containers.
            </p>

            <div className="mt-8 flex flex-col space-y-4">
              <p>
                <strong>- Shippers or Consignees:</strong> Freight Forwarding
                LCL & FCL, Inland logistics, Customs broking, Cargo insurance,
                Cargo inspections, Stuffing, Stripping, Warehousing.
              </p>
              <p>
                <strong>- Isotank & Flexitank Operators:</strong> Commercial &
                Operational representation, Cleaning station, Repairs, Storage,
                Custom broking, Flexitank supply and fit, filling, transfer and
                evacuation supervision, Flexitank disposal.
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
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="20"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Logistic Agents
            </CardItem>
            <CardItem
              as="p"
              translateZ="20"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Isotanks & Flexitanks operations. Holistic approach to your
              logistic needs.
            </CardItem>
            <CardItem translateZ="20" className="w-full mt-4">
              <Image
                src="/images/msIsotanks.png"
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
          <p className="font-semibold text-lg mb-4">Logistic Agents</p>
          <p>
            Hands-on staff taking care of every single customer through the
            whole logistics process turns us in the best market partner choice
            for moving bulk liquid cargoes in containers.
          </p>

          <div className="mt-8 flex flex-col space-y-4">
            <p>
              <strong>- Shippers or Consignees:</strong> Freight Forwarding LCL
              & FCL, Inland logistics, Customs broking, Cargo insurance, Cargo
              inspections, Stuffing, Stripping, Warehousing.
            </p>
            <p>
              <strong>- Isotank & Flexitank Operators:</strong> Commercial &
              Operational representation, Cleaning station, Repairs, Storage,
              Custom broking, Flexitank supply and fit, filling, transfer and
              evacuation supervision, Flexitank disposal.
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
