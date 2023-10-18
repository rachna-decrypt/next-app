"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
      setLoading(true);
      const response: any = await axios.post("/api/users/login", user);
      console.log("response: ", response);
      toast.success("Login Success");
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login Failed: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-semibold text-xl mb-4 text-blue-400">Login</h1>
      <hr />
      <form className="flex flex-col border-2 border-s-black-300 p-10 shadow-xl">
        <label htmlFor="email">Email</label>
        <input
          className="p-3 my-2 bg-gray-200 "
          type="text"
          placeholder="Your email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />

        <label htmlFor="email">Password</label>
        <input
          className="p-3 my-2 bg-gray-200 "
          type="password"
          placeholder="Your password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />

        <button className="bg-blue-200 p-3 rounded-md mt-3" onClick={onLogin}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <Link href="/signup" className="text-blue-600 active:text-purple-600 my-4">Visit sign up</Link>
    </div>
  );
};

export default Login;
