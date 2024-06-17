import { EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  name: string;
  linkedin: string;
  mail: string;
  role: string;
  img: string;
  body: string;
  credentials: string;
  joined: string;
};

export const TeamCard = ({
  name,
  linkedin,
  mail,
  role,
  img,
  body,
  credentials,
  joined,
}: Props) => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 max-w-xl lg:h-80">
      <Image
        src={img}
        alt="Profile Image"
        width={1000}
        height={1000}
        className="w-full max-w-96 h-80 object-cover rounded-lg"
      />

      <div className="flex flex-col justify-between w-full h-full max-w-48">
        <div>
          <div className="flex flex-col">
            <p className="font-medium text-xl">{name}</p>
            <p className="font-normal tracking-tight text-sm text-[#999999]">
              {role}
            </p>
          </div>
          <p className="mt-2 text-muted-foreground">{credentials}</p>

          {/* linkedin and mail */}
          <div className="flex flex-row space-x-3 mt-6">
            <Link href={linkedin} target="_blank">
              <LinkedInLogoIcon />
            </Link>
            <Link href={`mailto:${mail}?body=${body}`}>
              <EnvelopeClosedIcon />
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-12 lg:mt-0">
          <p className="text-xs text-[#999999] mb-1.5">{joined}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"sm"} variant={"outline"}>
                Read More
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-auto max-h-[40rem] flex flex-col lg:flex-row lg:max-w-4xl">
              <div className="w-full lg:w-1/2">
                <Image
                  src={img}
                  alt="Profile Image"
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-8">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-xl">{name}</p>
                    <div className="flex flex-row space-x-2 items-center">
                      <p className="font-normal tracking-tight text-sm text-[#999999]">
                        {role}
                      </p>
                      <span className="font-normal tracking-tight text-sm text-[#999999]">
                        -
                      </span>
                      <p className="font-normal tracking-tight text-sm text-[#999999]">
                        {credentials}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className="text-lg font-semibold text-slate-900 mt-12 lg:mt-0">
                  Biography
                </p>
                <div className="flex flex-col space-y-4 mt-2">
                  <p className="text-sm font-normal lg:mt-4">
                    Mikael Skov is Chief Executive Officer, a role he assumed in
                    2019 after the merger between Hafnia Tankers and BW Tankers.
                    Mikael Skov was the co-founder and CEO of Hafnia Tankers and
                    has more than 33 years of experience in the shipping
                    industry. Prior to establishing Hafnia Tankers, Mikael held
                    various positions over his 25-year career at Torm, of which
                    the last two years he served as CEO.
                  </p>

                  <p className="text-sm font-normal">
                    Mikael is a board member of Clipper Group Ltd. and was an
                    industry representative of the Danish Maritime Strategy Team
                    established by the Ministry of Industry, Business and
                    Financial Affairs.
                  </p>

                  <p className="text-sm font-normal">
                    Mikael Skov is a Danish citizen, and resides in Monaco.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
