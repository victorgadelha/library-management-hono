import { Hono } from "hono";
import { books } from "./routes/books";

const app = new Hono().basePath("/api/v1").route("/", books);

export default app;
