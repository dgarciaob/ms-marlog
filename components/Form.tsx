"use client";

import Image from "next/image";

import React, { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createLead } from "@/actions/create-lead";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Your name must be at least 3 characters long" }),
  company: z.string(),
  businessLine: z.string(),
  phone: z
    .string()
    .min(9, { message: "Enter a valid phone number" })
    .max(9, { message: "Enter a valid phone number" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Your message must be at least 10 characters long" })
    .max(200, { message: "Your message must be a maximum of 200 characters" }),
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      businessLine: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    try {
      createLead(values);
      toast.success("Your message has been sent successfully!");
      router.refresh();
    } catch (error) {
      toast.error(
        "We couldn't send your message, please refresh and try again."
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col text-center md:justify-start md:text-left space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-[#999999] font-normal">
            Contact us for more information
          </p>
        </div>

        <div className="max-w-lg w-full mt-12">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What company do you work for?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="businessLine"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">
                        Business Line
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Business Lines" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={"Ship Brokers"}>
                              Ship Brokers
                            </SelectItem>
                            <SelectItem value={"Ship Agents"}>
                              Ship Agents
                            </SelectItem>
                            <SelectItem value={"Logistic Agents"}>
                              Logistic Agents
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="text-[#1F1F1F]">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Button type="submit" className="w-full">
                {isLoading ? (
                  <Loader2 className="animate-spin size-4 text-slate-200" />
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <Image
          src="/images/formImg.png"
          alt="Ship Image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
