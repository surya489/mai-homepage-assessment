'use client';

import { RefObject, useState, useEffect } from "react";

export function useSlider(
    scrollRef: RefObject<HTMLDivElement | null>
) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const children = Array.from(
                container.children
            ) as HTMLElement[];

            const center =
                container.scrollLeft + container.clientWidth / 2;

            let closest = 0;
            let minDist = Infinity;

            children.forEach((child, i) => {
                const childCenter =
                    child.offsetLeft + child.offsetWidth / 2;

                const dist = Math.abs(center - childCenter);

                if (dist < minDist) {
                    minDist = dist;
                    closest = i;
                }
            });

            setActiveIndex(closest);
        };

        container.addEventListener("scroll", handleScroll);

        return () =>
            container.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    return { activeIndex, setActiveIndex };
}