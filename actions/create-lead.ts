"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { db } from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type CreateLeadProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessLine: string;
  message: string;
};

export const createLead = async ({
  name,
  email,
  phone,
  company,
  businessLine,
  message,
}: CreateLeadProps) => {
  const lead = await db.lead.create({
    data: {
      name,
      email,
      phone,
      company,
      businessLine,
      message,
    },
  });

  resend.emails.send({
    from: "Diego <diego.garcia@magnetperu.com>",
    to: ["map@mastershipping.us"],
    subject: "New lead from Master Shipping Web",
    react: EmailTemplate({
      name,
      email,
      phone,
      company,
      businessLine,
      message,
    }),
  });

  return lead;
};
