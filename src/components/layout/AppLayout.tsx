
import { ReactNode } from "react";
import AppHeader from "./AppHeader";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
