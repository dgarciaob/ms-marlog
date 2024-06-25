import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Note = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row space-x-2">
            <span className="flex h-3 w-3 translate-y-1 rounded-full bg-red-500" />
            <span className="flex h-3 w-3 translate-y-1 rounded-full bg-yellow-500" />
            <span className="flex h-3 w-3 translate-y-1 rounded-full bg-green-500" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="lg:flex lg:flex-row flex flex-col items-center lg:gap-x-28 lg:gap-y-0 gap-y-10">
        <div className="flex flex-col max-w-xl text-sm gap-y-6 text-muted-foreground leading-relaxed">
          <p>
            Since 2011 Master Shipping corporation is engaged in the shipping
            and logistics industry, providing the market with a wide variety and
            comprehensive state-of-the-art services.
          </p>
          <p>
            Over the years, and as a result of hard work and efficient duties
            performance, we have gained a valuable loyalty and trust from local
            and global customers which we are proud of.
          </p>
          <p>
            We are committed to daily give the best of us to customers and
            ensure our support is adding real value to their business towards a
            permanent growing and long-lasting relationship.
          </p>
          <p>Thanks for letting us show you a different service experience</p>
        </div>
        <div className="flex items-center justify-center lg:w-1/3 w-full">
          <Image
            src={"/images/profPic1.jpg"}
            alt="Jose A. Paz"
            width={1000}
            height={1000}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start text-sm">
        <p>Sincerely,</p>
        <p className="font-semibold">
          Jose A. Paz (JAP) <br />
          PRESIDENT & CEO
        </p>
      </CardFooter>
    </Card>
  );
};

export default Note;
