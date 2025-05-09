import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { db } from "../../db";
import { createBookSchema } from "../../validators/createBook";
import { books } from "../../db/schema";

export const createBook = new Hono();

createBook.post(
  "/",
  zValidator("json", createBookSchema, (result, c) => {
    if (!result.success) return c.json({ error: result.error.flatten() }, 400);
  }),
  async (c) => {
    try {
      const body = c.req.valid("json");
      const data = {
        ...body,
        copiesAvailable: body.totalCopies,
      };
      const [book] = await db.insert(books).values(data).returning();
      return c.json({ book }, 200);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return c.json({ error: error.message }, 500);
      }
      return c.json({ error: "An unknown error occurred" }, 500);
    }
  }
);
