import StatsCards from "./components/StatsCards";
import Deadlines from "./components/Deadlines";
import RecentCases from "./components/RecentCases";


export const dynamic = "force-dynamic"; // ensures dashboard shell is dynamic


export default function DashboardPage() {
return (
<main className="p-6 space-y-6">
<h1 className="text-2xl font-bold">Dashboard</h1>


{/* Static / Cached */}
<StatsCards />


{/* Dynamic – user specific */}
<Deadlines />


{/* Hybrid – ISR */}
<RecentCases />
</main>
);
}