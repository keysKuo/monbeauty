'use client';

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { API_URL } from "@/constants";

type BannerProps = {
    photo: {
        url: string,
        id: string
    },
}

export default function Banner({ images }: { images: BannerProps[] }) {
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
                {images?.map(img => {
                    return <div key={img.photo.id} className="carousel-item w-full flex-shrink-0 snap-start">
                        <Image className="w-full" src={API_URL + img.photo.url} width={1920} height={1080} alt={img.photo.id} />
                    </div>
                })}
            </div>
        </section>
    );
}
