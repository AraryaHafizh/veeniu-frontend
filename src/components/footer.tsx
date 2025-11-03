"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SectionText } from "./ui/section-text";
import { SectionTitle } from "./ui/section-title";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const pathname = usePathname();
  const hiddenRoutes = ["/auth", "/dashboard"];

  if (hiddenRoutes.some((route) => pathname.startsWith(route))) return null;

  return (
    <footer className="bg-foreground/10 mt-15 flex w-full justify-center p-5">
      <section className="mx-20 mt-10 w-[1920px]">
        <section className="flex gap-10">
          <div>
            <Link href="/">
              <SectionTitle>Veeniu</SectionTitle>
            </Link>
            <SectionText>
              Discover unforgettable events. Your next experience is just a
              click away
            </SectionText>
          </div>
          <div className="flex w-full justify-around">
            <div>
              <SectionTitle variant="small" className="mb-2">
                Company
              </SectionTitle>
              <FooterLink title="About us" />
              <FooterLink title="Careers" />
              <FooterLink title="Press" />
            </div>
            <div>
              <SectionTitle variant="small" className="mb-2">
                Legal
              </SectionTitle>
              <FooterLink title="Terms of service" />
              <FooterLink title="Privacy policy" />
              <FooterLink title="Contact us" />
            </div>
          </div>
        </section>
        <Separator className="my-10" />
        <section className="flex justify-between">
          <section className="font-light opacity-70">
            © 2025 Veeniu. All Rights Reserved.
          </section>
          <section className="flex gap-5">
            <FooterLink title="X" />
            <FooterLink title="Instagram" external={true} />
            <FooterLink title="Youtube" external={true} />
            <FooterLink title="Facebook" external={true} />
          </section>
        </section>
      </section>
    </footer>
  );
};

const FooterLink = ({
  title,
  route = "/",
  external = false,
}: {
  title: string;
  route?: string;
  external?: boolean;
}) => (
  <div>
    <Link
      href={route}
      target={external ? "_blank" : ""}
      className="font-light opacity-70 transition-all duration-200 hover:opacity-100 active:opacity-100"
    >
      {title}
    </Link>
  </div>
);
