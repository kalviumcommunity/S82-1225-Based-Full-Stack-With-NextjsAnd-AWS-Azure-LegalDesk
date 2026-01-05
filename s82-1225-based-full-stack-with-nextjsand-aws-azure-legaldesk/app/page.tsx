import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= NAVBAR ================= */}
      <header className="flex items-center justify-between px-10 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-blue-600 text-white flex items-center justify-center">
            ⚖️
          </div>
          <span className="font-semibold text-lg">LegalDesk</span>
        </div>

        
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
          🔥 Game Changer
          <span className="text-gray-600 font-normal">
            Never miss a deadline again
          </span>
        </div>

        <h1 className="mt-10 text-5xl font-extrabold leading-tight">
          Never Miss a{" "}
          <span className="text-blue-600">Legal Deadline</span> Again
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Professional deadline management designed for legal professionals.
          Auto-calculate critical dates, manage cases, and stay ahead with
          intelligent countdown alerts and comprehensive audit trails.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-7 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Login →
          </Link>
          <Link
            href="/about"
            className="rounded-lg border px-7 py-3 font-semibold hover:bg-gray-50"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <div className="border-t border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 py-12 text-center">
          <Stat value="100%" label="Deadline Accuracy" />
          <Stat value="3+" label="Roles Access Levels" />
          <Stat value="6" label="Case Types Supported" />
          <Stat value="Real-time" label="Notifications" />
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            Powerful Features for Modern Legal Practice
          </h2>
          <p className="mt-4 text-gray-600">
            Every tool you need to manage cases, deadlines, and team access on
            one intuitive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Feature
            title="Deadline Engine"
            desc="Auto-calculate critical dates with countdown alerts (D-10, D-5, D-1). Automatic detection of overdue deadlines."
          />
          <Feature
            title="Case Management"
            desc="Create and organize cases with case number, court type, client details, and assigned lawyers."
          />
          <Feature
            title="Court Calendar View"
            desc="Daily and weekly calendar with color-coded events for hearings, filings, and submissions."
          />
          <Feature
            title="Role-Based Access"
            desc="Admin, Partner, Associate, and Clerk roles with secure, controlled access."
          />
          <Feature
            title="Case Status Workflow"
            desc="Track cases through Filed, Hearing, Judgment Reserved, Closed, and Archived stages."
          />
          <Feature
            title="Audit Trail"
            desc="Complete tracking of who modified deadlines, case data, and status changes."
          />
        </div>
      </section>

      {/* ================= CASE TYPES + PREVIEW ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Built for All Case Types
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Civil Law</li>
              <li>✔ Criminal Law</li>
              <li>✔ GST Matters</li>
              <li>✔ Income Tax Law</li>
              <li>✔ Corporate Law</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h4 className="font-semibold text-lg">Deadline Intelligence</h4>

            <Alert color="red" text="Written submission overdue by 2 days" />
            <Alert color="yellow" text="Filing deadline in 3 days" />
            <Alert color="green" text="Hearing scheduled in 10 days" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-bold text-blue-600">{value}</p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-6 hover:shadow transition">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Alert({ color, text }: { color: "red" | "yellow" | "green"; text: string }) {
  const styles = {
    red: "bg-red-50 border-red-300 text-red-700",
    yellow: "bg-yellow-50 border-yellow-300 text-yellow-700",
    green: "bg-green-50 border-green-300 text-green-700",
  };

  return (
    <div className={`border-l-4 p-3 rounded ${styles[color]}`}>
      {text}
    </div>
  );
}
