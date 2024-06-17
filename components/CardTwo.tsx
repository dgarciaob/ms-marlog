"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { useMediaQuery } from "usehooks-ts";

export function ThreeDCardDemoTwo() {
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
                Ship Agents
              </CardItem>
              <CardItem
                as="p"
                translateZ="20"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                We serve the industry attending any type of ship and crew
                nationality with the highest standards.
              </CardItem>
              <CardItem translateZ="20" className="w-full mt-4">
                <Image
                  src="/images/msShipAgents.png"
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
            <p className="font-semibold text-lg mb-4">Ship Agent</p>
            <p>
              With a full coverage in the West Coast South American ports, our
              ship agency services surpass the expectations and add a unique
              value to customers.
            </p>

            <div className="mt-8 flex flex-col space-y-6">
              <p>
                <strong>- Commercial ship agency:</strong> Port operations
                support including STS, document drafting and forwarding.
                Coordination with local authorities, shippers, receivers,
                terminals, charterers, owners and vessels. Loss control and/or
                cargo surveyors attendance.
              </p>
              <p>
                <strong>- Bunker call ship agency:</strong> Coordination with
                local authorities, physical suppliers, barge operators, traders,
                owners and vessels. Independent bunker surveys.
              </p>
              <p>
                <strong>- Technical and husbandry:</strong> Independent marine &
                cargo surveys, UWI, UWC, spares clearance and delivery, crew
                change, crew medical attention, cash to master, security guards,
                temporary repairs, dry-docking.
              </p>
              <p>
                <strong>- Ship chandler:</strong> Deck and engine supplies,
                fresh water supply, slops, sludge and solid waste removal and
                disposal, fresh provisions.
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
              Ship Agents
            </CardItem>
            <CardItem
              as="p"
              translateZ="20"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              We serve the industry attending any type of ship and crew
              nationality with the highest standards.
            </CardItem>
            <CardItem translateZ="20" className="w-full mt-4">
              <Image
                src="/images/msShipAgents.png"
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
        <div className="p-4 overflow-y-auto max-h-96">
          <p className="font-semibold text-lg mb-4">Ship Agent</p>
          <p>
            With a full coverage in the West Coast South American ports, our
            ship agency services surpass the expectations and add a unique value
            to customers.
          </p>

          <div className="mt-8 flex flex-col space-y-6">
            <p>
              <strong>- Commercial ship agency:</strong> Port operations support
              including STS, document drafting and forwarding. Coordination with
              local authorities, shippers, receivers, terminals, charterers,
              owners and vessels. Loss control and/or cargo surveyors
              attendance.
            </p>
            <p>
              <strong>- Bunker call ship agency:</strong> Coordination with
              local authorities, physical suppliers, barge operators, traders,
              owners and vessels. Independent bunker surveys.
            </p>
            <p>
              <strong>- Technical and husbandry:</strong> Independent marine &
              cargo surveys, UWI, UWC, spares clearance and delivery, crew
              change, crew medical attention, cash to master, security guards,
              temporary repairs, dry-docking.
            </p>
            <p>
              <strong>- Ship chandler:</strong> Deck and engine supplies, fresh
              water supply, slops, sludge and solid waste removal and disposal,
              fresh provisions.
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
