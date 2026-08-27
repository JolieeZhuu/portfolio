"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"

interface RecentsCarouselProps {
    images: string[][],
    descriptions: string[]
}

export default function RecentsCarousel({ images, descriptions } : RecentsCarouselProps) {
    const autoplayPlugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
    return(
        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}
                plugins={[autoplayPlugin.current]}
                className="w-full"
            >
            <CarouselContent>
                {Array.from({ length: descriptions.length }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                    <Card className="text-sm text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">
                        <CardContent>
                            {descriptions[index]}

                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    )
}