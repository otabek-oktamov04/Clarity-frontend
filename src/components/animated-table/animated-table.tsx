import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  amount: number;
  timestamp: string;
  type: string;
  merchant: string;
  location: string;
  status: string;
  fraud: "Fraud" | "Non-Fraud";
}

export default function AnimatedTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        amount: Math.random() * 1000,
        timestamp: new Date().toISOString(),
        type: [
          "Debit Card",
          "Credit Card",
          "Mobile Payment",
          "Wire Transfer",
          "ACH",
        ][Math.floor(Math.random() * 5)],
        merchant: [
          "Grocery Store",
          "Online Electronics",
          "Coffee Shop",
          "John Doe",
          "Utility Company",
        ][Math.floor(Math.random() * 5)],
        location: [
          "New York, NY",
          "Online",
          "San Francisco, CA",
          "Chicago, IL",
          "Boston, MA",
        ][Math.floor(Math.random() * 5)],
        status: ["Completed", "Flagged", "Pending"][
          Math.floor(Math.random() * 3)
        ],
        fraud: Math.random() > 0.8 ? "Fraud" : "Non-Fraud",
      };

      setTransactions((prev) => [newTransaction, ...prev.slice(0, 4)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white h-[300px] overflow-y-auto overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Detailed Transaction Feed</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Merchant</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fraud</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence initial={false}>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TableCell className="relative">
                  ${transaction.amount.toFixed(2)}
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 1, x: -10 }}
                      animate={{ opacity: 0, x: 0 }}
                      transition={{ duration: 2, delay: 1 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
                    >
                      <Badge className="bg-red-500 text-white">New</Badge>
                    </motion.div>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(transaction.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.merchant}</TableCell>
                <TableCell>{transaction.location}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      transaction.fraud === "Fraud"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {transaction.fraud}
                  </span>
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
}
