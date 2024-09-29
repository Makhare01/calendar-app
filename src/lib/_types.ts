import { z } from "zod";

export const TAddEventFormSchema = z.object({
  id: z.string(),
  from: z.date(),
  to: z.date().optional(),
  startMinute: z.number(),
  endMinute: z.number(),
  title: z.string().min(3),
  description: z.string().optional(),
  guests: z.array(z.number()).optional(),
});

export type CalendarEvent = z.infer<typeof TAddEventFormSchema>;

export type Periods = "WEEK" | "MONTH";

export type CalendarUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};
