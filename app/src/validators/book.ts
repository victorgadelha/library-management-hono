import { z } from "zod";

export const bookSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  author: z.string().min(1),
  language: z.string().min(2),
  isbn: z.string().length(13).regex(/^\d+$/),
  description: z.string().min(10),
  genre: z.string().min(1),
  edition: z.number().int().min(1),
  publisher: z.string().min(1),
  copiesAvailable: z.number().int().min(0),
  totalCopies: z.number().int().min(1),
  createdAt: z
    .string()
    .datetime()
    .transform((str) => new Date(str))
    .optional(),
});
