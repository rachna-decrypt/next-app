"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  });

  const onSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("response: ", response.data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-semibold text-xl mb-4 text-blue-400">Signup</h1>
      <hr />
      <form className="flex flex-col border-2 border-s-black-300 p-10 shadow-xl">
        <label htmlFor="username">Username</label>
        <input
          className="p-3 my-2 bg-gray-200 "
          type="text"
          placeholder="Your username"
          value={user.username}
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
        />

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

        <button className="bg-blue-200 p-3 rounded-md mt-3" onClick={onSignup}>
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
      <Link href="/login" className="text-blue-600 active:text-purple-600 my-4">Visit login</Link>
    </div>
  );
};

export default Signup;
