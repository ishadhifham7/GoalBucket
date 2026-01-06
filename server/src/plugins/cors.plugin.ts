import cors from "@fastify/cors";
import type { FastifyInstance } from "fastify";

export default async function corsPlugin(app: FastifyInstance): Promise<void> {
  app.register(cors, {
    origin: "http://localhost:5173",
  });
}
