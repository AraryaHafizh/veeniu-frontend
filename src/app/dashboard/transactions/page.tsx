import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function OrganizerTransaction() {
  return (
    <div className="mt-10 w-full pr-10">
      <p>My events</p>
      <div className="mt-10 flex justify-between">
        <Input type="text" placeholder="Search" className="w-[280px]"></Input>
        <Link href="/dashboard/vouchers/create">
          <Button type="button">Create</Button>
        </Link>
      </div>
    </div>
  );
}
