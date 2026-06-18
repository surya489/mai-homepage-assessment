"use client";

import { useEffect, useState } from "react";
import { SITE_BASE, TYPEWRITER_WORDS } from "@/lib/constants";
import { SearchIcon } from "@/components/layout/HeaderIcons";
import { cn } from "@/lib/utils";

interface HeaderSearchProps {
  isHeader?: boolean;
  isMobile?: boolean;
  className?: string;
}

export function HeaderSearch({
  isHeader = false,
  isMobile = false,
  className,
}: HeaderSearchProps) {
  const [query, setQuery] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (focused || query) return;

    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (typedWord.length === 0) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % TYPEWRITER_WORDS.length);
      } else {
        timeout = setTimeout(() => {
          setTypedWord((word) => word.slice(0, -1));
        }, 60);
      }
    } else if (typedWord.length < currentWord.length) {
      timeout = setTimeout(() => {
        setTypedWord(currentWord.slice(0, typedWord.length + 1));
      }, 1000);
    } else {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    }

    return () => clearTimeout(timeout);
  }, [focused, isDeleting, query, typedWord, wordIndex]);

  const handleSearch = () => {
    const value = query.trim() || typedWord;
    const url = value
      ? `${SITE_BASE}/projects?search=${encodeURIComponent(value)}`
      : `${SITE_BASE}/projects`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (isMobile) {
    return (
      <button
        type="button"
        onClick={handleSearch}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer",
          className
        )}
        aria-label="Search"
      >
        <SearchIcon className="w-4 h-4 text-white" />
      </button>
    );
  }

  const placeholder = isHeader
    ? "Search Here"
    : `I Want ${typedWord || TYPEWRITER_WORDS[0]}`;

  return (
    <div className={cn("flex flex-col items-center gap-5 w-full", className)}>
      <div className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-[50px]">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSearch();
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 h-full px-4 sm:px-6 text-[14px] sm:text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium min-w-0"
          aria-label="Search"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 mr-2 shrink-0 text-white"
            aria-label="Clear search"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
          </button>
        ) : null}
        <button
          type="button"
          onClick={handleSearch}
          className="flex items-center justify-center w-10 h-10 mr-1 rounded-full text-white"
          aria-label="Submit search"
        >
          <SearchIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
