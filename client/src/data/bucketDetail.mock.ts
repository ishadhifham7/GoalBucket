export const bucketDetail = {
  id: "1",
  title: "Emergency Fund",
  description: "Money set aside for emergencies",
  totalSaved: 150000,
  totalTarget: 350000,
  items: [
    {
      id: "1",
      description: "Medical Emergency",
      saved: 50000,
      target: 100000,
    },
    {
      id: "2",
      description: "Job Loss Buffer",
      saved: 75000,
      target: 150000,
    },
    {
      id: "3",
      description: "Home Repairs",
      saved: 25000,
      target: 100000,
    },
  ],
  transactions: [
    {
      id: "1",
      type: "deposit" as const,
      amount: 5000,
      date: "2025-12-20",
      description: "Monthly savings",
    },
    {
      id: "2",
      type: "withdrawal" as const,
      amount: 2000,
      date: "2025-12-18",
      description: "Emergency withdrawal",
    },
    {
      id: "3",
      type: "deposit" as const,
      amount: 10000,
      date: "2025-12-15",
      description: "Bonus allocation",
    },
  ],
};
