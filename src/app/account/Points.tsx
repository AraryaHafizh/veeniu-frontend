"use client";

import { PageTitle } from "@/components/ui/page-title";
import { SectionTitle } from "@/components/ui/section-title";
import { useGetUser } from "@/hooks/auth/useGetUser";
import { useEffect } from "react";

export const Points = () => {
  const { data, isPending, refetch } = useGetUser();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isPending) return <></>;

  return (
    <section className="bg-card mt-10 flex-1 rounded-lg p-5 md:p-15">
      <SectionTitle variant="small">Point balance</SectionTitle>
      <div className="mt-5 flex items-end gap-3">
        <PageTitle className="text-primary">
          {data?.data?.receivedRewards[0]?.point ?? 0}
        </PageTitle>
        Points
      </div>
    </section>
  );
};
