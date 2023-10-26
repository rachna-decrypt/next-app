"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] =
    React.useState(false);
  const [data, setData] =
    React.useState<any>("");
  const onLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "/api/users/logout",
      );
      toast.success("Logout Success");
      console.log(
        "response: ",
        response,
      );
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProfile = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "/api/users/profile",
      );
      console.log(
        "response: ",
        response.data.data,
      );
      setData(response.data.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  
  return (
    <div className="flex flex-grow justify-center items-center m-96 flex-col">
      <h1>Dashboard</h1>
      {!data ? (
        "Nothing profile to show"
      ) : (
        <Link
          href={`/dashboard/${data._id}`}
        >
          {data._id}
        </Link>
      )}

      <button
        className="p-4 bg-green-600 text-white my-5"
        onClick={onLogout}
      >
        {loading
          ? "Logging out..."
          : "Logout"}
      </button>
      <button
        className="p-4 bg-blue-500 text-white my-5"
        onClick={getProfile}
      >
        Get Profile
      </button>
    </div>
  );
};

export default Dashboard;
