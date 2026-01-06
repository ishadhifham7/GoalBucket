import { FastifyInstance } from "fastify";
import {
  getWalletController,
  updateTargetController,
  addIncomeController,
  spendController,
} from "../wallet/wallet.controllers";

export const walletRoutes = async (app: FastifyInstance) => {
  app.get("/wallet", getWalletController);
  app.patch("/wallet/target", updateTargetController);
  app.post("/wallet/income", addIncomeController);
  app.post("/wallet/spend", spendController);
};
