import { z } from "zod";

// Schema for updating target
export const updateTargetSchema = z.object({
  target: z.number().min(0, "Target cannot be negative"),
});

// Schema for adding income
export const addIncomeSchema = z.object({
  amount: z.number().min(0, "Income must be positive"),
});

// Schema for spending money
export const spendSchema = z.object({
  amount: z.number().min(0, "Spend must be positive"),
});
