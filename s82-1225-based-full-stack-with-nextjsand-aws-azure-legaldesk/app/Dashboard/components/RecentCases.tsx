export const revalidate = 60; // refresh every 60s


export default async function RecentCases() {
const res = await fetch("http://localhost:3000/api/cases");
const cases = await res.json();


return (
<section>
<h2 className="font-semibold">Recent Cases</h2>
{cases.map((c: any) => (
<div key={c.id}>{c.caseNumber} – {c.status}</div>
))}
</section>
);
}