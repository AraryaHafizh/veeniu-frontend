import { CircleUserRound } from "lucide-react";

const data = {
  eventId: 0,
  title: "RICH BRIAN - WHERE IS MY HEAD - ASIAN TOUR 2025",
  thumbnail:
    "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
  location: "Beach City International Stadium",
  price: "Rp. 950.000",
  date: "29 November 2025",
  time: "17:00 - 22:00 WIB",
  category: "Concert",
  organizer: "Sus seller",
};

export const EventBanner = () => {
  return (
    <section className="flex h-[50vh] gap-10 px-[52px]">
      <div className="h-full flex-[60%]">
        <img
          src={data.thumbnail}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-[40%] flex-col justify-between py-8">
        <h1 className="text-secondary text-6xl font-bold">{data.title}</h1>
        <div>
          <p>{data.location}</p>
          <p>
            {data.date}|{data.time} WIB
          </p>
          <p>{data.category}</p>
        </div>

        <div className="flex w-fit cursor-pointer items-center gap-2">
          <CircleUserRound size={35} />
          <div>
            <p className="text-xs leading-none">Organized by</p>
            <p className="text-xl leading-tight">{data.organizer}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
