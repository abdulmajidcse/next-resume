"use client";

import { useAuth } from "@/hooks/auth";
import Navigation from "@/app/(app)/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

const AppLayout = ({ children }) => {
  const { user } = useAuth({ middleware: "auth" });

  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
