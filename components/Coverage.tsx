"use client";

import { useState } from "react";

import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { countryAccordions } from "@/lib/data";
import { cn } from "@/lib/utils";

const Coverage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    "peru"
  );

  const countryImages: { [key: string]: string } = {
    peru: "/images/customMapPeru.svg",
    chile: "/images/customMapChile.svg",
    ecuador: "/images/customMapEcuador.svg",
    colombia: "/images/customMapColombia.svg",
    panama: "/images/customMapPanama.svg",
  };

  return (
    <section className="px-8 mt-0 lg:px-28 lg:mt-20">
      <Select onValueChange={setSelectedCountry}>
        <SelectTrigger className="w-[180px] mb-8">
          <SelectValue placeholder="Select a Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="peru">🇵🇪 Perú</SelectItem>
            <SelectItem value="chile">🇨🇱 Chile</SelectItem>
            <SelectItem value="ecuador">🇪🇨 Ecuador</SelectItem>
            <SelectItem value="colombia">🇨🇴 Colombia</SelectItem>
            <SelectItem value="panama">🇵🇦 Panamá</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {selectedCountry && (
          <Image
            src={countryImages[selectedCountry]}
            alt="Custom Map"
            width={1000}
            height={1000}
            className="w-full object-contain max-h-[32rem]"
          />
        )}
        <div className="flex flex-col overflow-y-auto max-h-96">
          {countryAccordions.map((country, idx) => {
            if (country.country === selectedCountry) {
              return (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={idx}
                >
                  <AccordionItem value={`item-${idx}`}>
                    <AccordionTrigger>
                      <div className="flex flex-row items-center ">
                        {country.port}
                        <div
                          className="rounded-full h-3 w-3 ml-2"
                          style={{
                            backgroundColor: country.color,
                          }}
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>{country.portContent}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
