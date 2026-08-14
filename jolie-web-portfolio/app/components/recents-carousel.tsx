"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface RecentsCarouselProps {
    images: string[][],
    descriptions: string[]
}

export default function RecentsCarousel({ images, descriptions } : RecentsCarouselProps) {
    return(
        <div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
            <CarouselContent>
                {Array.from({ length: descriptions.length }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center">
                            <Image 
                                src={images[index][0]}
                                alt={images[index][1]}
                                width={2000}
                                height={2000}
                            />
                        {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                        </CardContent>
                        <CardFooter>
                            {descriptions[index]}
                        </CardFooter>
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