import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Deadlines() {
  const cookieStore = await cookies();   // 👈 await is REQUIRED
  const token = cookieStore.get("token")?.value;

  const res = await fetch("http://localhost:3000/api/deadlines", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const deadlines = await res.json();

  return (
    <section>
      <h2 className="font-semibold">Upcoming Deadlines</h2>
      {deadlines.map((d: any) => (
        <div key={d.id}>
          {d.title} – {d.daysLeft} days
        </div>
      ))}
    </section>
  );
}
