"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger
} from "@/components/ui/credenza";

import { Button } from "./button";

// Define Zod schema
const formSchema = z.object({
  username: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.boolean().default(false),
});

export function WaitlistModalButton() {
  // Define form using `useForm`
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", mobile: false },
  });

  // Define submit function
  const onSubmit = (data: { username: string; mobile: boolean }) => {
    console.log("Submitted data:", data);
  };

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button className="font-bold">JOIN THE WAITLIST</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>JOIN THE WAITLIST</CredenzaTitle>
          <CredenzaDescription>
            Enter your email and we&apos;ll send you updates and notify you when we launch.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="dave@canary.engineering" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I AM A BUSINESS</FormLabel>
                      <CredenzaDescription>
                        We&apos;ll send you additional updates regarding {" "}
                        <Link href="/fleet" className="text-blue-500">
                          DriveSense Fleet
                        </Link>
                        .
                      </CredenzaDescription>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}