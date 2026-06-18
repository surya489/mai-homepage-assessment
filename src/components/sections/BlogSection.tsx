"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SliderDots } from "@/components/ui/SliderDots";
import BlogCard from "../ui/BlogCard";
import { useSlider } from "@/hooks/useSlider";

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicatedPosts = [...blogPosts, ...blogPosts];
  const { activeIndex, setActiveIndex } = useSlider(scrollRef);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(index);
  };

  return (
    <section className="relative px-3 sm:px-10 xl:px-24 w-full bg-[#F2F6FB] font-montserrat">

      <div className="flex flex-col items-center h-full py-12 overflow-hidden">
        <AnimatedSection variant="fade-down" className="text-center mb-10 px-4">
          <SectionBadge>KNOWLEDGE HUB</SectionBadge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Latest Blog
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto">
            Our articles cover a range of topics to help you stay informed and
            make better decisions. Dive into expert advice and stay ahead in the
            industry with our engaging and informative content.
          </p>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="lg:hidden flex gap-5 overflow-x-auto hide-scrollbar w-full snap-x snap-mandatory pb-4"
        >
          {duplicatedPosts.map((post, index) => (
            <article
              key={`${post.slug}-${index}`}
              className="group min-w-[280px] md:min-w-[320px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 snap-center"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-30 rounded-b-xl bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] px-3 py-5 text-left text-white">
                  <p className="text-base font-semibold capitalize">
                    {post.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <SliderDots
          count={blogPosts.length}
          activeIndex={activeIndex % blogPosts.length}
          onSelect={scrollToIndex}
          className="md:hidden mt-4"
        />

        <div className="hidden lg:grid grid-cols-3 gap-6 w-full max-w-7xl">
          <div className="space-y-6">
            <BlogCard post={blogPosts[0]} height="h-[280px]" />
            <BlogCard post={blogPosts[1]} height="h-[320px]" />
          </div>

          <div className="space-y-6 pt-8">
            <BlogCard post={blogPosts[2]} height="h-[320px]" />
            <BlogCard post={blogPosts[3]} height="h-[250px]" />
          </div>

          <div className="space-y-6">
            <BlogCard post={blogPosts[4]} height="h-[280px]" />
            <BlogCard post={blogPosts[5]} height="h-[320px]" />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PrimaryButton
            href="https://www.myproject.ai/blogs"
            className="px-6"
          >
            View All Blogs
          </PrimaryButton>
        </div>
      </div>

    </section>
  );
}
