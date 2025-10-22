"use client";

import Link from "next/link";

const footerData = {
  link: [
    {
      key: "Company",
      value: [
        { title: "About us", link: "" },
        { title: "History", link: "" },
        { title: "Terms & Condition", link: "" },
        { title: "Careers", link: "" },
        { title: "News", link: "" },
      ],
    },
    {
      key: "Company 2",
      value: [
        { title: "About us", link: "" },
        { title: "History", link: "" },
        { title: "Terms & Condition", link: "" },
        { title: "Careers", link: "" },
        { title: "News", link: "" },
      ],
    },
    {
      key: "Company 3",
      value: [
        { title: "About us", link: "" },
        { title: "History", link: "" },
        { title: "Terms & Condition", link: "" },
        { title: "Careers", link: "" },
        { title: "News", link: "" },
      ],
    },
  ],
  credit: {
    title: "© 2025 EventHub. All rights reserved.",
    social: [
      {
        title: "Instagram",
        link: "",
      },
      {
        title: "LinkedIn",
        link: "",
      },
      {
        title: "Youtube",
        link: "",
      },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="space-y-20 bg-[var(--footer)] px-5 pt-5 pb-5 text-[var(--footer-text)] md:px-5 md:pt-20">
      <div className="items-center space-y-10 space-x-10 md:flex md:space-y-0">
        <div className="flex flex-[2] justify-center">
          <Link className="text-secondary text-7xl font-bold" href="/">
            Veeniu
          </Link>
        </div>

        <div className="grid flex-[3] grid-cols-2 justify-center gap-5 md:flex md:gap-20">
          {footerData.link.map((item: any) => (
            <FooterLink key={item.key} title={item.key} data={item.value} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 text-sm text-[var(--footer-text)]/50 md:flex-row">
        <p>{footerData.credit.title}</p>
        <div className="space-x-4">
          {footerData.credit.social.map((item: any) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:text-[var(--footer-text)]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  title,
  data,
}: {
  title: string;
  data: Array<{ title: string; link: string; key?: string }>;
}) => (
  <div className="md:text-lg">
    <p className="text-secondary mb-2">{title}</p>
    {data.map((item) => (
      <a
        key={item.key || item.title}
        href={item.link}
        target="_blank"
        className="hover:text-secondary block w-fit font-light transition-all duration-300 ease-in-out"
      >
        {item.title}
      </a>
    ))}
  </div>
);
