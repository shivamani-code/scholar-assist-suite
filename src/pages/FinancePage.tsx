
import { useState } from "react";
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Receipt, PiggyBank } from "lucide-react";

// Example data for budgeting
const sampleExpenses = [
  { id: "1", category: "Groceries", amount: 85.75, date: "2023-05-01" },
  { id: "2", category: "Books", amount: 120.00, date: "2023-05-03" },
  { id: "3", category: "Transportation", amount: 45.50, date: "2023-05-05" },
  { id: "4", category: "Entertainment", amount: 35.25, date: "2023-05-10" },
];

const FinancePage = () => {
  const [expenses, setExpenses] = useState(sampleExpenses);
  
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Finance Manager</h1>
            <p className="text-muted-foreground">
              Track, manage, and optimize your student finances
            </p>
          </div>

          <Tabs defaultValue="budget">
            <TabsList className="mb-6 w-full sm:w-auto">
              <TabsTrigger value="budget" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>Budget</span>
              </TabsTrigger>
              <TabsTrigger value="bills" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                <span>Bills</span>
              </TabsTrigger>
              <TabsTrigger value="investments" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Investments</span>
              </TabsTrigger>
              <TabsTrigger value="savings" className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4" />
                <span>Savings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="budget" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Spending</CardTitle>
                    <CardDescription>Current month expenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">${totalExpenses.toFixed(2)}</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Remaining</CardTitle>
                    <CardDescription>Based on $500 monthly budget</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">${(500 - totalExpenses).toFixed(2)}</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Biggest Expense</CardTitle>
                    <CardDescription>Your largest spending category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">Books</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>Your latest transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {expenses.map((expense) => (
                      <div key={expense.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div>
                          <p className="font-medium">{expense.category}</p>
                          <p className="text-sm text-muted-foreground">{expense.date}</p>
                        </div>
                        <div className="text-lg font-semibold">${expense.amount.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Add New Expense
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bills">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bills</CardTitle>
                  <CardDescription>Manage your recurring payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Bills management coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investments">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Portfolio</CardTitle>
                  <CardDescription>Track your investments and returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Investment tracking coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="savings">
              <Card>
                <CardHeader>
                  <CardTitle>Savings Goals</CardTitle>
                  <CardDescription>Track progress towards your financial goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Savings tracker coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </AppLayout>
  );
};

export default FinancePage;
