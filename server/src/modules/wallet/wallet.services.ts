import { prisma } from "../../lib/prisma";

export const getWallet = async () => {
  const wallet = await prisma.wallet.findFirst();
  if (!wallet) {
    // create wallet if not exists
    return await prisma.wallet.create({
      data: { balance: 0 },
    });
  }
  return wallet;
};

export const updateTarget = async (target: number) => {
  return prisma.wallet.updateMany({
    data: { target },
  });
};

export const addIncome = async (amount: number) => {
  return prisma.wallet.updateMany({
    data: { balance: { increment: amount } },
  });
};

export const spendMoney = async (amount: number) => {
  return prisma.wallet.updateMany({
    data: { balance: { decrement: amount } },
  });
};
