
import { useState } from "react";
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { v4 as uuidv4 } from "uuid";

interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

const BillsPage = () => {
  const { toast } = useToast();
  const [bills, setBills] = useState<Bill[]>([
    {
      id: "1",
      name: "Rent",
      amount: 750,
      dueDate: "2023-10-01",
      status: "paid"
    },
    {
      id: "2",
      name: "Electricity",
      amount: 85.50,
      dueDate: "2023-10-15",
      status: "pending"
    },
    {
      id: "3",
      name: "Internet",
      amount: 65.99,
      dueDate: "2023-10-10",
      status: "pending"
    },
    {
      id: "4",
      name: "Phone",
      amount: 45.00,
      dueDate: "2023-09-28",
      status: "overdue"
    }
  ]);

  const [newBill, setNewBill] = useState<Omit<Bill, "id" | "status">>({
    name: "",
    amount: 0,
    dueDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBill({
      ...newBill,
      [name]: name === "amount" ? parseFloat(value) || 0 : value
    });
  };

  const addBill = () => {
    if (!newBill.name || !newBill.dueDate || newBill.amount <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please fill in all fields with valid data.",
        variant: "destructive"
      });
      return;
    }

    const today = new Date();
    const dueDate = new Date(newBill.dueDate);
    const status = today > dueDate ? "overdue" : "pending";

    const bill: Bill = {
      id: uuidv4(),
      name: newBill.name,
      amount: newBill.amount,
      dueDate: newBill.dueDate,
      status
    };

    setBills([...bills, bill]);
    setNewBill({ name: "", amount: 0, dueDate: "" });

    toast({
      title: "Bill Added",
      description: `${newBill.name} has been added to your bills.`
    });
  };

  const markAsPaid = (id: string) => {
    setBills(
      bills.map(bill => 
        bill.id === id 
          ? { ...bill, status: "paid" as const } 
          : bill
      )
    );

    toast({
      title: "Bill Paid",
      description: "Bill has been marked as paid.",
      variant: "success"
    });
  };

  const deleteBill = (id: string) => {
    setBills(bills.filter(bill => bill.id !== id));
    
    toast({
      title: "Bill Removed",
      description: "Bill has been removed from your list."
    });
  };

  const totalDue = bills
    .filter(bill => bill.status !== "paid")
    .reduce((sum, bill) => sum + bill.amount, 0);

  const getStatusColor = (status: Bill["status"]) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "";
    }
  };

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Bills Manager</h1>
            <p className="text-muted-foreground">
              Track and manage your recurring bills and expenses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Due</CardTitle>
                <CardDescription>Unpaid and pending bills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${totalDue.toFixed(2)}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pending Bills</CardTitle>
                <CardDescription>Bills awaiting payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {bills.filter(bill => bill.status === "pending").length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Overdue Bills</CardTitle>
                <CardDescription>Bills past due date</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">
                  {bills.filter(bill => bill.status === "overdue").length}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Bills</CardTitle>
                  <CardDescription>Manage all your recurring payments</CardDescription>
                </CardHeader>
                <CardContent>
                  {bills.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bills.map(bill => (
                          <TableRow key={bill.id}>
                            <TableCell className="font-medium">{bill.name}</TableCell>
                            <TableCell>${bill.amount.toFixed(2)}</TableCell>
                            <TableCell>
                              {new Date(bill.dueDate).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bill.status)}`}>
                                {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                {bill.status !== "paid" && (
                                  <Button 
                                    variant="outline" 
                                    size="xs"
                                    onClick={() => markAsPaid(bill.id)}
                                  >
                                    Mark as Paid
                                  </Button>
                                )}
                                <Button 
                                  variant="destructive" 
                                  size="xs"
                                  onClick={() => deleteBill(bill.id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">No bills found. Add your first bill to get started.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Add New Bill</CardTitle>
                  <CardDescription>Create a new recurring bill</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Bill Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="e.g., Rent, Utilities, etc." 
                        value={newBill.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount ($)</Label>
                      <Input 
                        id="amount" 
                        name="amount" 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        placeholder="0.00"
                        value={newBill.amount || ""}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input 
                        id="dueDate" 
                        name="dueDate" 
                        type="date" 
                        value={newBill.dueDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={addBill}
                  >
                    Add Bill
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </AppLayout>
  );
};

export default BillsPage;
