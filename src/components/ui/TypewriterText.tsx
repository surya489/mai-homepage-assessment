"use client";

import { useEffect, useState } from "react";
import { TYPEWRITER_WORDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  words?: readonly string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  words = TYPEWRITER_WORDS,
  className,
  typingSpeed = 80,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const currentWord = words[wordIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setAnimClass("flip-exit");
        setTimeout(() => {
          setIsDeleting(true);
          setAnimClass("flip-enter");
        }, 350);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setAnimClass("flip-enter");
      return;
    }

    timeout = setTimeout(
      () => {
        setDisplayText((prev) => {
          if (isDeleting) return currentWord.slice(0, prev.length - 1);
          return currentWord.slice(0, prev.length + 1);
        });
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    displayText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    words.length,
  ]);

  return (
    <span
      className={cn(
        "animated-word md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        className
      )}
    >
      <span className={cn("word", animClass)}>
        {displayText}
        <span className="cursor">|</span>
      </span>
    </span>
  );
}
