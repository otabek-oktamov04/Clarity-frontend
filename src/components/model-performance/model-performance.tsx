import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const accuracyData = [
  { name: "Precision", value: 0.92 },
  { name: "Recall", value: 0.88 },
  { name: "F1 Score", value: 0.9 },
];

const detectionRateData = [
  { date: "2024-06-01", detectionRate: 0.85, falsePositiveRate: 0.12 },
  { date: "2024-06-02", detectionRate: 0.87, falsePositiveRate: 0.11 },
  { date: "2024-06-03", detectionRate: 0.86, falsePositiveRate: 0.13 },
  { date: "2024-06-04", detectionRate: 0.88, falsePositiveRate: 0.1 },
  { date: "2024-06-05", detectionRate: 0.89, falsePositiveRate: 0.09 },
  { date: "2024-06-06", detectionRate: 0.9, falsePositiveRate: 0.08 },
  { date: "2024-06-07", detectionRate: 0.91, falsePositiveRate: 0.07 },
];

export default function ModelPerformance() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Model Performance Metrics</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Accuracy Metrics</CardTitle>
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
                {accuracyData.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.value.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection vs. False Positive Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={detectionRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="detectionRate"
                  stroke="#8884d8"
                  name="Detection Rate"
                />
                <Line
                  type="monotone"
                  dataKey="falsePositiveRate"
                  stroke="#82ca9d"
                  name="False Positive Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Model Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Last Update:</strong> 2024-06-07
          </p>
          <p>
            <strong>Significant Changes:</strong> Improved feature engineering
            for better detection of new fraud patterns.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
