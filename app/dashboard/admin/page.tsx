"use client";
import BankCard from "@/components/BankCard";
import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/api/user");
      const user: User = response.data.userinDb;
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-semibold mb-4">Welcome to the Dashboard</h2>
      <p className="text-gray-600">
        This is the middle content area. Hello {user?.username}
      </p>

      <BankCard />

      {/* <div className="h-screen">4</div>
			<div className="h-screen">5</div> */}
    </div>
  );
}
