import { auth } from "@/auth";
import { SectionTitle } from "@/components/ui/section-title";
import { formatCurrency, getGreeting } from "@/lib/utils";
import { redirect } from "next/navigation";
import { LandingTable } from "./LandingTable";

const Dashboard = async () => {
  const session = await auth();

  if (session?.user.role !== "ORGANIZER") return redirect("/auth/signin");

  return (
    <main>
      <SectionTitle className="mt-10">{getGreeting("Hooman")}</SectionTitle>
      <section className="mt-20 flex gap-5">
        <StatCard title="Total revenue" value={formatCurrency(1000000)} />
        <StatCard title="Ticket sold" value={15.0} />
        <StatCard title="Total attendees" value={15.0} />
      </section>
      <LandingTable />
    </main>
  );
};

interface StatCardProps {
  title: string;
  value: number | string;
  isCurrency?: boolean;
}

const StatCard = ({ title, value, isCurrency = false }: StatCardProps) => {
  return (
    <div className="bg-card rounded-lg p-5">
      <SectionTitle variant="small">{title}</SectionTitle>
      <p className="text-3xl font-bold">
        {isCurrency && typeof value === "number"
          ? formatCurrency(value)
          : value}
      </p>
    </div>
  );
};

export default Dashboard;
