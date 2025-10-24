import { DataTable } from "@/components/ui/data-table";

const data = {
  title: "My events",
  tableTitle: [
    "No",
    "Event",
    "Date",
    "Time",
    "Location",
    "Ticket",
    "Revenue",
    "Status",
  ],
  tableData: [
    {
      event: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025.",
      date: "19 May 2025",
      time: "09:00 - 17:00",
      location: "Beach City International Stadium",
      status: "active",
      ticket: "300/500",
      revenue: "Rp 15.250.002",
    },
    {
      event: "Pamungkas - Flying Solo 2025 Tour.",
      date: "12 June 2025",
      time: "19:00 - 22:00",
      location: "Istora Senayan, Jakarta",
      status: "upcoming",
      ticket: "420/800",
      revenue: "Rp 21.450.000",
    },
    {
      event: "WE THE FEST 2025 - DAY 1",
      date: "20 May 2025",
      time: "10:00 - 23:00",
      location: "GBK Senayan",
      status: "active",
      ticket: "450/800",
      revenue: "Rp 24.350.000",
    },
    {
      event: "WE THE FEST 2025 - DAY 2",
      date: "21 May 2025",
      time: "10:00 - 23:00",
      location: "GBK Senayan",
      status: "active",
      ticket: "410/800",
      revenue: "Rp 22.120.500",
    },
    {
      event: "JAVA JAZZ FESTIVAL 2025",
      date: "02 Jun 2025",
      time: "13:00 - 23:30",
      location: "JIEXPO Kemayoran",
      status: "inactive",
      ticket: "0/1000",
      revenue: "Rp 0",
    },
    {
      event: "DWP 2025 - DAY 1",
      date: "10 Dec 2025",
      time: "17:00 - 03:00",
      location: "GWK Cultural Park",
      status: "upcoming",
      ticket: "150/2000",
      revenue: "Rp 12.500.000",
    },
    {
      event: "DWP 2025 - DAY 2",
      date: "11 Dec 2025",
      time: "17:00 - 03:00",
      location: "GWK Cultural Park",
      status: "upcoming",
      ticket: "80/2000",
      revenue: "Rp 6.800.000",
    },
    {
      event: "HEAD IN THE CLOUDS JAKARTA 2025",
      date: "05 Aug 2025",
      time: "13:00 - 23:00",
      location: "Community Park PIK 2",
      status: "active",
      ticket: "950/1500",
      revenue: "Rp 45.700.230",
    },
    {
      event: "SYNCHRONIZE FEST 2025",
      date: "15 Sep 2025",
      time: "12:00 - 23:30",
      location: "Gambir Expo Kemayoran",
      status: "inactive",
      ticket: "0/2000",
      revenue: "Rp 0",
    },
    {
      event: "K-POP FESTIVAL 2025 - SEOUL NIGHT",
      date: "25 Nov 2025",
      time: "18:00 - 23:00",
      location: "ICE BSD City",
      status: "upcoming",
      ticket: "100/3000",
      revenue: "Rp 9.250.000",
    },
  ],

  statusData: ["active", "draft", "ended", "upcoming"],
  route: "/dashboard/events",
};

export default function Dashboard() {
  return (
    <div className="mt-10 w-full pr-10">
      <p>Morning, Hooman</p>
      <div className="mt-20 flex gap-10">
        <div className="h-[160px] rounded-xl border-2 p-3 md:w-[300px]">
          Revenue
        </div>
        <div className="h-[160px] rounded-xl border-2 p-3 md:w-[180px]">
          New order
        </div>
        <div className="h-[160px] rounded-xl border-2 p-3 md:w-[180px]">
          Total order
        </div>
      </div>

      <DataTable {...data} />
    </div>
  );
}
