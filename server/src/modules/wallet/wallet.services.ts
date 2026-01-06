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
  const wallet = await prisma.wallet.findFirst();
  if (!wallet) {
    return await prisma.wallet.create({
      data: { balance: 0, target },
    });
  }
  return await prisma.wallet.update({
    where: { id: wallet.id },
    data: { target },
  });
};

export const addIncome = async (amount: number) => {
  const wallet = await prisma.wallet.findFirst();
  if (!wallet) {
    return await prisma.wallet.create({
      data: { balance: amount, target: 0 },
    });
  }
  return await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { increment: amount } },
  });
};

export const spendMoney = async (amount: number) => {
  const wallet = await prisma.wallet.findFirst();
  if (!wallet) {
    throw new Error("Wallet not found");
  }
  return await prisma.wallet.update({
    where: { id: wallet.id },
    data: { balance: { decrement: amount } },
  });
};
