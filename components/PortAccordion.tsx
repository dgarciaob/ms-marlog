import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type AccordionProps = {
  trigger: string;
  content: string;
};

const PortAccordion = () => {
  return <Accordion type="single" collapsible className="w-full"></Accordion>;
};

export default PortAccordion;
