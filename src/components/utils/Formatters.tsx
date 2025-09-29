import { BookOpenText } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export function Title({ children }: { children: React.ReactNode }) {
  return <div className="text-4xl leading-12 font-bold">{children}</div>;
}

export function Section({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 space-y-4">{children}</div>;
}

export function Bold({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}

export function MutedLink({
  children,
  imageLink,
  href,
}: {
  imageLink: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <span className="inline-flex items-center ml-1 gap-1">
      <img src={imageLink} className="size-3" />
      <a
        href={href}
        target="_blank"
        className="text-gray-300 underline-offset-3 underline decoration-gray-600"
      >
        {children}
      </a>
    </span>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gray-200 text-black px-1 rounded">{children}</span>
  );
}

export function SubTitle({
  level,
  children,
}: {
  level: number;
  children: React.ReactNode;
}) {
  const sizes: { [key: number]: string } = {
    1: "text-3xl",
    2: "text-2xl",
    3: "text-xl",
  };
  return (
    <div className={`font-semibold ${sizes[level] || "text-xl"} mt-6 mb-2`}>
      {children}
    </div>
  );
}

export function UnorderedList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 space-y-3">{children}</ul>;
}

export function Li({ children }: { children: React.ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

export function LinkPage({ text, route }: { text: string; route?: string }) {
  return (
    <div className="flex items-center gap-2 ml-2">
      <BookOpenText size={15} className="opacity-50" />
      <Link
        to={route || `/${text.toLowerCase().replace(/\s+/g, "-")}`}
        className="underline underline-offset-4 decoration-gray-600"
      >
        {text}
      </Link>
    </div>
  );
}

export function BreakLine() {
  return <hr className="border-t border-stone-700 my-6" />;
}
