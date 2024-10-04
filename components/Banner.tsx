'use client';

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import banner1 from "@/public/banner1.png";
import banner2 from "@/public/banner2.png";
import banner3 from "@/public/banner3.png";

export default function Banner() {
    const carouselRef = useRef<HTMLDivElement | null>(null); // Typed reference for the carousel container
    const intervalRef = useRef<number | null>(null); // Correct type for the browser environment
    const items = [1, 2, 3]; // Carousel item numbers
    const autoScrollInterval = 2000; // Time interval for auto-scroll (in milliseconds)

    useEffect(() => {
        let currentIndex = 0;

        const autoScroll = () => {
            currentIndex = (currentIndex + 1) % items.length; // Loop through items
            const carousel = carouselRef.current;

            if (carousel) {
                carousel.scrollTo({
                    left: carousel.offsetWidth * currentIndex, // Move to the next item
                    behavior: "smooth",
                });
            }
        };

        // Set the interval for auto-scroll
        intervalRef.current = window.setInterval(autoScroll, autoScrollInterval);

        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current); // Clear the interval on component unmount
            }
        };
    }, [items.length]);

    return (
        <section className="w-full">
            <div ref={carouselRef} className="carousel w-full flex overflow-x-scroll snap-x">
                <div className="carousel-item w-full flex-shrink-0 snap-start">
                    <Image className="w-full" src={banner1} alt="banner 1" />
                </div>
                <div className="carousel-item w-full flex-shrink-0 snap-start">
                    <Image className="w-full" src={banner2} alt="banner 2" />
                </div>
                <div className="carousel-item w-full flex-shrink-0 snap-start">
                    <Image className="w-full" src={banner3} alt="banner 3" />
                </div>
            </div>
        </section>
    );
}
