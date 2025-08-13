"use client"
import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import { Media } from "../../../lib/types";
import SearchBar from "../components/SearchBar";

interface MediaGalleryGridProps {
  items: Media[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
console.log(items)
  if(items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    )
  }
  return (
    <>
      <SearchBar
        placeholder="Search"
        value=""
        onChange={() => {}}
        onSearch={() => {}}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <MediaGalleryCard key={idx} image={`https:${item.fields.img.fields.file.url}`} title={item.fields.title} isVideo={item.fields.img.isVideo} />
        ))}
      </div>
    </>
  );
};

export default MediaGalleryGrid; 