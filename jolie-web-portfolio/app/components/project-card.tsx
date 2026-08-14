"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
    projectTitle: string,
    image: string[]
    projectDescription: string
}

export default function ProjectCard({ projectTitle, image, projectDescription } : ProjectCardProps) {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <h1>{projectTitle}</h1>
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src={image[0]}
                            alt={image[1]}
                            fill
                            sizes="200px"
                        />
                    </div>
                    <p>{projectDescription}</p>
                </div>
            </div>
        </div>
    )
}