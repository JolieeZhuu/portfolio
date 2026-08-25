"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

interface ProjectCardProps {
    projectTitle: string,
    image: string[],
    projectDescription: string,
    onShowMore: () => void
}

export default function ProjectCard({ projectTitle, image, projectDescription, onShowMore } : ProjectCardProps) {
    const router = useRouter();
    
    return (
        <div className="flex flex-row justify-between border p-8 rounded-md shadow-lg">
            <div className="flex flex-col gap-3">
                <h1 className="text-xl font-medium">{projectTitle}</h1>
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src={image[0]}
                            alt={image[1]}
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>{projectDescription}</p>
                        <div className="justify-items-end">
                            <Button className="rounded-md bg-[var(--tertiary-accent)] hover:bg-[var(--secondary-accent)]" variant="outline" aria-label={`More info on ${projectTitle}`} onClick={() => onShowMore()}>
                                Show More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}