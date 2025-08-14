"use client";
import React, { useMemo, useState } from "react";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import { NewsPost } from "../../../lib/types";

export default function NewsContent({ newsList }: { newsList: NewsPost[] }) {
  const [filter, setFilter] = useState<"latest" | "trending">("latest");

  const filtered = useMemo(() => {
    const sorted = [...newsList].sort(
      (a: NewsPost, b: NewsPost) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime()
    );
    return filter === "trending" ? sorted.slice(0, 6) : sorted;
  }, [newsList, filter]);

  return (
    <div className="w-full max-w-[100%] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
      <NewsSidebar active={filter} onChange={setFilter} />
      <div className="flex-1">
        <NewsGrid newsList={filtered} />
      </div>
    </div>
  );
}
