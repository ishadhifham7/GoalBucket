import cors from "@fastify/cors";

export default async function corsPlugin(app) {
  app.register(cors, {
    origin: "http://localhost:5173",
  });
}
