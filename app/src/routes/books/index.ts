import { Hono } from "hono";
import { createBook } from "./createBook";

export const books = new Hono().basePath("/books").route("/", createBook);
