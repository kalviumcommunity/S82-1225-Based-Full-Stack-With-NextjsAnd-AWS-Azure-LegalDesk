"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@example.com",
        password: "password",
      }),
    });

    if (res.ok) {
      // ✅ Token is set via HTTP-only cookie in API
      router.push("/dashboard"); // 🔥 redirect
    } else {
      alert("Invalid credentials");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h1 className="text-xl font-bold">Sign In</h1>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
