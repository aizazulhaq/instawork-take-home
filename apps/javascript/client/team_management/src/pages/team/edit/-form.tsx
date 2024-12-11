import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editTeamMemberFormSchema } from "./-data-handling";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TeamMember } from "../-static-data";

export function TeamMemberForm({
  memberData,
  onSubmit,
}: {
  memberData: TeamMember | null;
  onSubmit: (values: z.infer<typeof editTeamMemberFormSchema>) => Promise<void>;
}) {
  const form = useForm<z.infer<typeof editTeamMemberFormSchema>>({
    resolver: zodResolver(editTeamMemberFormSchema),
    defaultValues: {
      id: memberData?.id || undefined,
      first_name: memberData?.first_name || "",
      last_name: memberData?.last_name || "",
      email: memberData?.email || "",
      phone: memberData?.phone ? String(memberData.phone) : "",
      role: (memberData?.role ? memberData.role.toLowerCase() : "regular") as "regular" | "admin",
    },
  });

  const navigate = useNavigate();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="123-456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Role</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value} 
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="admin" />
                    </FormControl>
                    <FormLabel className="font-normal">Admin</FormLabel>
                  </FormItem>

                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="regular" />
                    </FormControl>
                    <FormLabel className="font-normal">Regular</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update</Button>
        <Button type="button" onClick={() => navigate({ to: '/team' })} className="ml-4">Cancel</Button>
      </form>
    </Form>
  );
}
