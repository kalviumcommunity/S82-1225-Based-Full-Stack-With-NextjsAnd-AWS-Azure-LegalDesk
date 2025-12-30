"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Harsha",
        email: "test@example.com",
        password: "password",
      }),
    });

    if (res.ok) {
      router.push("/dashboard"); // ✅ redirect
    } else {
      alert("Signup failed");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <h1 className="text-xl font-bold">Sign Up</h1>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
