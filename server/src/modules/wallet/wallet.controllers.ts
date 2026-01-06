import { FastifyRequest, FastifyReply } from "fastify";
import * as walletService from "./wallet.services";
import {
  updateTargetSchema,
  addIncomeSchema,
  spendSchema,
} from "./wallet.schema";

export const getWalletController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const wallet = await walletService.getWallet();
  reply.send(wallet);
};

export const updateTargetController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const body = updateTargetSchema.parse(req.body);
  const wallet = await walletService.updateTarget(body.target);
  reply.send(wallet);
};

export const addIncomeController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const body = addIncomeSchema.parse(req.body);
  const wallet = await walletService.addIncome(body.amount);
  reply.send(wallet);
};

export const spendController = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const body = spendSchema.parse(req.body);
  const wallet = await walletService.spendMoney(body.amount);
  reply.send(wallet);
};
