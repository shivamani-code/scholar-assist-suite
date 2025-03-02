
import { useState } from "react";
import Container from "@/components/ui/Container";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Award, BookOpen, Calendar } from "lucide-react";

const AcademicPage = () => {
  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Academic Tools</h1>
            <p className="text-muted-foreground">
              Resources and tools to help you succeed in your studies
            </p>
          </div>

          <Tabs defaultValue="gpa">
            <TabsList className="mb-6 w-full sm:w-auto">
              <TabsTrigger value="gpa" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>GPA Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="citations" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Citations</span>
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Scholarships</span>
              </TabsTrigger>
              <TabsTrigger value="deadlines" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Deadlines</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gpa" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>GPA Calculator</CardTitle>
                  <CardDescription>Calculate your current and projected GPA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">GPA calculator coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="citations">
              <Card>
                <CardHeader>
                  <CardTitle>Citation Generator</CardTitle>
                  <CardDescription>Create citations in APA, MLA, Chicago and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Citation generator coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scholarships">
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Tracker</CardTitle>
                  <CardDescription>Find and track scholarship opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Scholarship tracker coming soon!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deadlines">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Deadlines</CardTitle>
                  <CardDescription>Track important academic dates and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8">
                    <p className="text-muted-foreground">Deadline tracker coming soon!</p>
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

export default AcademicPage;
