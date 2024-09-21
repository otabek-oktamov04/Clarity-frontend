import { useState } from "react";
import {
  LineChart,
  Line,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, List } from "lucide-react";
import FraudReport from "@/components/fraud-report/fraud-report";

// Mock data for the line chart
const lineData = [
  { name: "00:00", volume: 4000, avgAmount: 250 },
  { name: "04:00", volume: 3000, avgAmount: 200 },
  { name: "08:00", volume: 2000, avgAmount: 300 },
  { name: "12:00", volume: 2780, avgAmount: 280 },
  { name: "16:00", volume: 1890, avgAmount: 210 },
  { name: "20:00", volume: 2390, avgAmount: 230 },
  { name: "23:59", volume: 3490, avgAmount: 270 },
];

// Mock data for the pie chart
const pieData = [
  { name: "Non-Fraud", value: 85 },
  { name: "Fraud", value: 15 },
];

const COLORS = ["#0088FE", "#ef4444"];

// Mock data for the transaction types bar chart
const transactionTypesData = [
  { type: "Debit Card", count: 1200 },
  { type: "Credit Card", count: 800 },
  { type: "Wire Transfer", count: 400 },
  { type: "ACH", count: 600 },
  { type: "Mobile Payment", count: 1000 },
];

// Enhanced mock data for the transaction feed
const transactionData = [
  {
    id: 1,
    amount: 250.0,
    timestamp: "2023-06-15 14:30:22",
    fraud: false,
    type: "Debit Card",
    merchant: "Grocery Store",
    location: "New York, NY",
    status: "Completed",
  },
  {
    id: 2,
    amount: 1000.0,
    timestamp: "2023-06-15 14:29:58",
    fraud: true,
    type: "Credit Card",
    merchant: "Online Electronics",
    location: "Online",
    status: "Flagged",
  },
  {
    id: 3,
    amount: 75.5,
    timestamp: "2023-06-15 14:28:45",
    fraud: false,
    type: "Mobile Payment",
    merchant: "Coffee Shop",
    location: "San Francisco, CA",
    status: "Completed",
  },
  {
    id: 4,
    amount: 500.0,
    timestamp: "2023-06-15 14:27:30",
    fraud: false,
    type: "Wire Transfer",
    merchant: "John Doe",
    location: "Chicago, IL",
    status: "Pending",
  },
  {
    id: 5,
    amount: 150.0,
    timestamp: "2023-06-15 14:26:15",
    fraud: false,
    type: "ACH",
    merchant: "Utility Company",
    location: "Boston, MA",
    status: "Completed",
  },
];

export const Dashboard = () => {
  const [historyFilter, setHistoryFilter] = useState("all");
  const [modelOutcomeFilter, setModelOutcomeFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("dashboard");
  console.log(historyFilter, modelOutcomeFilter);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <h1 className=" text-xl p-4 rounded-lg border shadow-md bg-white  font-bold mb-8">
              Enhanced Banking Transactions Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Live Transaction Volume and Average Amount
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                      <Line
                        type="monotone"
                        dataKey="volume"
                        stroke="#8884d8"
                        yAxisId="left"
                      />
                      <Line
                        type="monotone"
                        dataKey="avgAmount"
                        stroke="#82ca9d"
                        yAxisId="right"
                      />
                      <Tooltip />
                      <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#8884d8"
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                      />
                      <XAxis dataKey="name" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fraud vs Non-Fraud Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {pieData.map((entry, index) => (
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
                  <CardTitle>Transaction Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={transactionTypesData}>
                      <Bar dataKey="count" fill="#8884d8" />
                      <XAxis dataKey="type" />
                      <YAxis />
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Statistics</CardTitle>
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
                        <TableCell>Total Transactions</TableCell>
                        <TableCell>4,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Volume</TableCell>
                        <TableCell>$1,250,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Average Transaction Amount</TableCell>
                        <TableCell>$312.50</TableCell>
                      </TableRow>
                      <TableRow className="text-red-500 font-medium">
                        <TableCell>Fraud Rate</TableCell>
                        <TableCell>1.5%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Transaction Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <Select onValueChange={setHistoryFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Transaction History" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="24h">Last 24 Hours</SelectItem>
                      <SelectItem value="7d">Last 7 Days</SelectItem>
                      <SelectItem value="30d">Last 30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setModelOutcomeFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Model Outcome" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="fraud">Fraud</SelectItem>
                      <SelectItem value="non-fraud">Non-Fraud</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ScrollArea className="h-[400px]">
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
                      {transactionData.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>
                            ${transaction.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{transaction.timestamp}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>{transaction.merchant}</TableCell>
                          <TableCell>{transaction.location}</TableCell>
                          <TableCell>{transaction.status}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${
                                transaction.fraud
                                  ? "bg-red-500 hover:bg-red-500"
                                  : "bg-blue-500 hover:bg-blue-500 "
                              } text-white hover:text-white`}
                              variant={
                                transaction.fraud ? "destructive" : "secondary"
                              }
                            >
                              {transaction.fraud ? "Fraud" : "Non-Fraud"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </>
        );
      case "reports":
        return <FraudReport />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Clarity</h2>
          <Input type="search" placeholder="Search..." className="mb-4" />
          <nav>
            <Button
              variant={activeTab === "dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "reports" ? "secondary" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setActiveTab("reports")}
            >
              <List className="mr-2 h-4 w-4" />
              Reports
            </Button>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">{renderContent()}</main>
    </div>
  );
};
