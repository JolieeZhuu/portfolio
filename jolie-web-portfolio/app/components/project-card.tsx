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
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium text-[var(--secondary)]">{projectTitle}</h1>
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
                            <Button className="rounded-md text-[var(--foreground)] bg-[var(--primary)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] active:bg-[var(--foreground)] active:text-[var(--primary)] text-base p-4" aria-label={`More info on ${projectTitle}`} onClick={() => onShowMore()}>
                                show more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}