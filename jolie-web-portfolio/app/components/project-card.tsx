"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

interface ProjectCardProps {
    projectTitle: string,
    projectDescription: string
}

export default function ProjectCard({ projectTitle, projectDescription } : ProjectCardProps) {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <h1>{projectTitle}</h1>
                <div className="flex flex-row gap-10">
                    <p>image</p>
                    <p>{projectDescription}</p>
                </div>
            </div>
             <Button variant="outline" size="icon" aria-label="Resume">
                <ArrowUpIcon/>
            </Button>
        </div>
    )
}