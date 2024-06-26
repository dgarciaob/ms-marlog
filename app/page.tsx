import { Anchor, Container, Ship } from "lucide-react";

import Image from "next/image";

import WordRotate from "@/components/magicui/word-rotate";
import NumberTicker from "@/components/magicui/number-ticker";
import Marquee from "@/components/magicui/marquee";
import TextReveal from "@/components/magicui/text-reveal";
import Coverage from "@/components/Coverage";
import Note from "@/components/Note";
import Timeline from "@/components/Timeline";
import Navigation from "@/components/Navigation";

import { GlobeDemo } from "@/components/Globe3D";
import { Footer } from "@/components/Footer";
import { ThreeDCardDemo } from "@/components/CardDemo";
import { ThreeDCardDemoTwo } from "@/components/CardTwo";
import { ThreeDCardDemoThree } from "@/components/CardThree";
import { TeamCard } from "@/components/TeamCard";
import { ContactForm } from "@/components/Form";

import fs from "fs";
import DottedMap from "dotted-map";

const map = new DottedMap({
  height: 60,
  grid: "diagonal",
  countries: ["PER"],
});

map.addPin({
  lat: -4.580689470188558,
  lng: -81.2628526268843,
  svgOptions: { color: "#450A0A", radius: 0.4 },
});

map.addPin({
  lat: -5.085538395866814,
  lng: -81.10820931499524,
  svgOptions: { color: "#7F1D1D", radius: 0.4 },
});

map.addPin({
  lat: -5.793353209606286,
  lng: -81.05780351737315,
  svgOptions: { color: "#991B1B", radius: 0.4 },
});

map.addPin({
  lat: -8.228413884093385,
  lng: -78.98318601479916,
  svgOptions: { color: "#B91C1C", radius: 0.4 },
});

map.addPin({
  lat: -9.106584616147686,
  lng: -78.56547758770549,
  svgOptions: { color: "#DC2626", radius: 0.4 },
});

map.addPin({
  lat: -7.691125790737827,
  lng: -79.44258345486675,
  svgOptions: { color: "#EF4444", radius: 0.4 },
});

map.addPin({
  lat: -6.9266246107976635,
  lng: -79.86469828893561,
  svgOptions: { color: "#F87171", radius: 0.4 },
});

map.addPin({
  lat: -10.6725368,
  lng: -77.8186675,
  svgOptions: { color: "#FCA5A5", radius: 0.4 },
});

map.addPin({
  lat: -12.053776145190179,
  lng: -77.14642630885282,
  svgOptions: { color: "#FECACA", radius: 0.4 },
});

map.addPin({
  lat: -12.250397867551575,
  lng: -76.92251519874968,
  svgOptions: { color: "#FEE2E2", radius: 0.4 },
});

map.addPin({
  lat: -13.767387913793673,
  lng: -76.23115351925324,
  svgOptions: { color: "#FECDD3", radius: 0.4 },
});

const svgMap = map.getSVG({
  radius: 0.22,
  color: "#999999",
  shape: "hexagon",
  backgroundColor: "#FFFFFF",
});

fs.writeFileSync("public/images/customMapPeru.svg", svgMap);

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="relative">
        <video
          src="/videos/videoShip.mp4"
          autoPlay
          loop
          muted
          className="w-screen h-[100vh] object-cover relative z-20"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 lg:items-start lg:mx-auto lg:max-w-7xl px-8 z-40">
          <h1 className="text-4xl lg:text-6xl font-medium tracking-wider text-white md:text-6xl">
            Master Shipping
          </h1>
          <p className="text-xl text-white md:text-xl text-center lg:text-left">
            Leading your shipping solutions <br />
            for US & Latam.
          </p>
          <WordRotate
            className="text-lg lg:text-xl font-normal bg-black rounded-lg px-4 py-2 text-white dark:text-black"
            words={["Ship Broker", "Ship Agent", "Logistic Agent"]}
          />
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-black/30 z-30" />

      <div className="bg-white py-12 flex flex-col" id="businessLines">
        <h2 className="text-2xl font-bold text-slate-900 mx-auto max-w-7xl px-8 text-center md:text-left">
          Our Business Lines
        </h2>
        <p className="text-lg text-[#999999] font-normal mx-auto max-w-7xl px-8 text-center md:text-left">
          What we specialize on
        </p>
      </div>
      <section className="mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center">
        <ThreeDCardDemo />
        <ThreeDCardDemoTwo />
        <ThreeDCardDemoThree />
      </section>

      <section className="mx-auto max-w-7xl px-8 my-32" id="about">
        <div className="flex flex-col text-center md:justify-start md:text-left space-y-1 mb-8">
          <h2 className="text-2xl font-bold text-slate-900">About us</h2>
          <p className="text-lg text-[#999999] font-normal">
            A note from our President & CEO
          </p>
        </div>
        <Note />
      </section>

      <section className="py-32 px-8 bg-slate-100">
        <div className="flex flex-col text-center md:justify-start md:text-left space-y-1 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900">
            What we have achieved
          </h2>
          <p className="text-lg text-[#999999] font-normal">
            Trusted by the industry worldwide
          </p>
        </div>

        <div className="mx-auto max-w-7xl mt-16">
          <Timeline />
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-8 items-center mx-auto max-w-7xl">
          <div className="bg-[#FAFAFA] w-auto h-44 rounded-lg flex flex-row space-x-10 justify-start items-center px-8 border border-muted">
            <div className="rounded-lg h-24 w-24 bg-[#E0F2FE] flex items-center justify-center">
              <Anchor size={56} className="text-[#3B82F6]" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-slate-900 font-bold">
                <NumberTicker value={5000} />
              </p>
              <p className="font-medium text-[#999999] text-base">
                port calls attended
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] w-auto h-44 rounded-lg flex flex-row space-x-10 justify-start items-center px-8 border border-muted">
            <div className="rounded-lg h-24 w-24 bg-[#FEF3C7] flex items-center justify-center">
              <Container size={56} className="text-[#EAB308]" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-slate-900 font-bold">
                + <NumberTicker value={4000} />
              </p>
              <p className="font-medium text-[#999999] text-base">
                container moves
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAFA] w-auto h-44 rounded-lg flex flex-row space-x-10 justify-start items-center px-8 border border-muted">
            <div className="rounded-lg h-24 w-24 bg-[#D1FAE5] flex items-center justify-center">
              <Ship size={56} className="text-[#059669]" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl text-slate-900 font-bold">
                + <NumberTicker value={200} />K
              </p>
              <p className="font-medium text-[#999999] text-base">
                Bulk cargo moves
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl mt-32 pt-32 mb-20 px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Trusted By
        </h2>
        <div className="relative mt-16">
          <Marquee className="max-w-full [--duration:15s]" pauseOnHover>
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                src={`/logo/${logo}.png`}
                className="h-12 w-28 dark:brightness-0 dark:invert"
                alt={logo}
                width={1000}
                height={1000}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
      </section>

      <div className="w-full">
        <TextReveal text="Our direct coverage includes all the ports in Ecuador and Perú while our sub-agency network allows us to expand our services upto the rest of The Americas. Our direct coverage includes all the ports in Ecuador and Perú while our sub-agency network allows us to expand our services upto the rest of The Americas." />
      </div>

      <section
        className="mx-auto max-w-7xl mb-0 mt-12 lg:mt-0 lg:mb-28 px-8 flex flex-col md:flex-row items-center justify-center"
        id="mainPorts"
      >
        <div className="flex flex-col text-center md:justify-start md:text-left space-y-1 mb-12 md:mb-0">
          <h2 className="text-4xl font-bold text-slate-900">
            International Coverage
          </h2>
          <p className="text-xl text-[#999999] font-normal">Where we operate</p>
        </div>
        <GlobeDemo />
      </section>

      <Coverage />

      <section className="mx-auto max-w-7xl my-44 px-8" id="team">
        <div className="flex flex-col text-center md:justify-start md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Our Team</h2>
          <p className="text-lg text-[#999999] font-normal">
            The ones who make it possible
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-10 items-center">
          <TeamCard
            name="Jose A. Paz"
            role="President & CEO"
            img="/images/profPic1.jpg"
            linkedin="https://www.linkedin.com/in/jose-antonio-paz-zanabria-72654121/"
            mail="jap@mastershipping.com.pe"
            body="Dear%20Jose%20Paz%0A%0AI'm%20interested%20in"
            credentials="MBA, BSC, MERCHANT MARINE"
            joined="Joined industry in 1991"
          />
          <TeamCard
            name="Maria A. Paz"
            role="LATAM Manager"
            img="/images/profPic2.jpg"
            linkedin="https://www.linkedin.com/in/maria-alejandra-paz-076b28161/"
            mail="map@mastershipping.com.pe"
            body="Dear%20Maria%20Alejandra%20Paz%0A%0AI'm%20interested%20in"
            credentials="BSC, BUSINESS ADMINISTRATOR"
            joined="Joined industry in 2020"
          />
          <TeamCard
            name="Ana L. Paz"
            role="Marketing Executive"
            img="/images/profPic2.jpg"
            linkedin="https://www.linkedin.com/in/ana-lucía-paz-b3939b223/"
            mail="accounts@mastershipping.com.pe"
            body="Dear%20Ana%20Lucia%20Paz%0A%0AI'm%20interested%20in"
            credentials="BSC, MARKETING"
            joined="Joined industry 2022"
          />
          <TeamCard
            name="Kattina Perez Garatea"
            role="ADM/OPS Executive"
            img="/images/profPic1.jpg"
            linkedin="https://www.linkedin.com/in/kattinapérezgaratea/"
            mail="kpg@mastershipping.com.pe"
            body="Dear%20Kattina%20Perez%0A%0AI'm%20interested%20in"
            credentials="BSC, ECONOMICS"
            joined="Joined industry in 2024"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 mt-44 mb-32" id="contact">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}

const companies = ["hafniaLogo", "glencore", "alicorp", "hafnia", "nyk"];
