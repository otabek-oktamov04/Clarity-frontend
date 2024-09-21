import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FraudReport = () => {
  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#FF6347"];

  // Enhanced mock data for fraud transactions
  const fraudTransactions = [
    {
      id: 1,
      amount: 1000.0,
      timestamp: "2023-06-15 14:29:58",
      type: "Credit Card",
      merchant: "Online Electronics",
      location: "Online",
      cardNumber: "**** **** **** 1234",
      ipAddress: "192.168.1.1",
      deviceType: "Mobile",
      userAccountAge: "2 years",
      previousTransactions: 15,
      fraudScore: 0.85,
      actionTaken: "Blocked",
    },
    {
      id: 2,
      amount: 750.5,
      timestamp: "2023-06-14 09:15:30",
      type: "Wire Transfer",
      merchant: "Unknown Recipient",
      location: "International",
      accountNumber: "*****6789",
      swiftCode: "BOFAUS3NXXX",
      country: "Nigeria",
      userAccountAge: "6 months",
      previousTransactions: 3,
      fraudScore: 0.92,
      actionTaken: "Flagged for Review",
    },
    {
      id: 3,
      amount: 500.0,
      timestamp: "2023-06-13 18:45:22",
      type: "Debit Card",
      merchant: "ATM Withdrawal",
      location: "New York, NY",
      cardNumber: "**** **** **** 5678",
      atmId: "ATM123456",
      unusualLocation: "Yes",
      userAccountAge: "1 year",
      previousTransactions: 8,
      fraudScore: 0.78,
      actionTaken: "Temporarily Suspended",
    },
    {
      id: 4,
      amount: 1200.0,
      timestamp: "2023-06-12 11:30:45",
      type: "Mobile Payment",
      merchant: "Digital Goods Store",
      location: "Online",
      appVersion: "v2.3.1",
      deviceId: "IMEI123456789",
      osType: "iOS",
      userAccountAge: "3 months",
      previousTransactions: 2,
      fraudScore: 0.88,
      actionTaken: "Blocked",
    },
    {
      id: 5,
      amount: 300.75,
      timestamp: "2023-06-11 20:10:15",
      type: "Credit Card",
      merchant: "Gas Station",
      location: "Los Angeles, CA",
      cardNumber: "**** **** **** 9012",
      posTerminalId: "POS987654",
      unusualActivity: "Multiple transactions in short time",
      userAccountAge: "5 years",
      previousTransactions: 50,
      fraudScore: 0.65,
      actionTaken: "Additional Verification Required",
    },
  ];

  // Mock data for fraud statistics
  const fraudStatistics = [
    { name: "Credit Card", value: 45 },
    { name: "Wire Transfer", value: 20 },
    { name: "Debit Card", value: 15 },
    { name: "Mobile Payment", value: 12 },
    { name: "Other", value: 8 },
  ];

  const fraudTrendData = [
    { date: "2023-06-01", count: 5 },
    { date: "2023-06-02", count: 3 },
    { date: "2023-06-03", count: 7 },
    { date: "2023-06-04", count: 2 },
    { date: "2023-06-05", count: 5 },
    { date: "2023-06-06", count: 8 },
    { date: "2023-06-07", count: 6 },
  ];

  return (
    <div className="space-y-8">
      <h1 className=" text-xl p-4 rounded-lg border shadow-md bg-white  font-bold mb-8">
        Fraud Transactions Report
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Fraud by Transaction Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fraudStatistics}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {fraudStatistics.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fraud Trend (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fraudTrendData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill={COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Detailed Fraud Transaction Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Amount</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Merchant</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Account Info</TableHead>
                    <TableHead>User History</TableHead>
                    <TableHead>Fraud Score</TableHead>
                    <TableHead>Action Taken</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fraudTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>{transaction.timestamp}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.merchant}</TableCell>
                      <TableCell>{transaction.location}</TableCell>
                      <TableCell>
                        {transaction.cardNumber || transaction.accountNumber}
                        <br />
                        {transaction.ipAddress ||
                          transaction.swiftCode ||
                          transaction.atmId ||
                          transaction.appVersion}
                      </TableCell>
                      <TableCell>
                        Account Age: {transaction.userAccountAge}
                        <br />
                        Previous Transactions:{" "}
                        {transaction.previousTransactions}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.fraudScore > 0.7
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {transaction.fraudScore.toFixed(2)}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.actionTaken}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Fraud Detection Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Total Fraud Transactions</TableCell>
                  <TableCell>36</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Fraud Amount</TableCell>
                  <TableCell>$15,750.25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Average Fraud Transaction Amount</TableCell>
                  <TableCell>$437.51</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fraud Rate (Last 7 Days)</TableCell>
                  <TableCell>1.8%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Most Common Fraud Type</TableCell>
                  <TableCell>Credit Card</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FraudReport;
