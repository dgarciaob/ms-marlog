import { EnvelopeClosedIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import "@/components/css/TeamCard.css";

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
        className="w-full max-w-96 h-80 object-contain rounded-lg team-img"
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
          <p className="text-sm text-[#999999]">{joined}</p>
        </div>
      </div>
    </div>
  );
};
