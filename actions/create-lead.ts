"use server";

import { businessLine } from "@prisma/client";
import { db } from "@/lib/db";

type CreateLeadProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessLine: businessLine;
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

  return lead;
};
