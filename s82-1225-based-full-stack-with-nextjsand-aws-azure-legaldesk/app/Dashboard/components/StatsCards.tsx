export const revalidate = 3600; // 1 hour


export default async function StatsCards() {
return (
<section className="grid grid-cols-3 gap-4">
<div className="card">Active Cases: 42</div>
<div className="card">Upcoming Deadlines: 7</div>
<div className="card">Missed Deadlines: 0</div>
</section>
);
}