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
    <footer className="space-y-20 bg-[var(--footer)] px-5 pt-20 pb-5 text-[var(--footer-text)]">
      <div className="flex items-center space-x-10">
        <div className="flex flex-[2] justify-center">
          <Link className="text-secondary text-7xl font-bold" href="/">
            Veeniu
          </Link>
        </div>

        <div className="flex flex-[3] justify-center space-x-20">
          {footerData.link.map((item: any) => (
            <FooterLink key={item.key} title={item.key} data={item.value} />
          ))}
        </div>
      </div>

      <div className="flex justify-between text-sm text-[var(--footer-text)]/50">
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
  <div>
    <p className="text-secondary mb-2 text-lg">{title}</p>
    {data.map((item) => (
      <a
        key={item.key || item.title}
        href={item.link}
        target="_blank"
        className="hover:text-secondary block w-fit text-lg font-light transition-all duration-300 ease-in-out"
      >
        {item.title}
      </a>
    ))}
  </div>
);
