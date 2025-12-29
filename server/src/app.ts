import Fastify from "fastify";
import cors from "@fastify/cors";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  // plugins
  app.register(cors, {
    origin: true,
  });

  // health check
  app.get("/health", async () => {
    return { status: "ok" };
  });

  // api test
  app.get("/api/ping", async () => {
    return {
      message: "Backend connected successfully",
    };
  });

  // dashboard check
  app.get("/", async () => {
    return {
      message: "You are in server dashboard",
    };
  });

  return app;
}
