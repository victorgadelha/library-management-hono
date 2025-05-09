import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  language: z
    .string()
    .min(2, { message: "Language code must have at least 2 characters" }),
  isbn: z
    .string()
    .length(13, { message: "ISBN must be exactly 13 characters" })
    .regex(/^\d+$/, { message: "ISBN must contain only digits" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  edition: z.number().int().min(1, { message: "Edition must be at least 1" }),
  publisher: z.string().min(1, { message: "Publisher is required" }),
  totalCopies: z
    .number()
    .int()
    .min(1, { message: "Total copies must be at least 1" }),
});

export type CreateBook = z.infer<typeof createBookSchema>;
