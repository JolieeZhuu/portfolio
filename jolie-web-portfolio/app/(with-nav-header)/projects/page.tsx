"use client"

import ProjectCard from "@/app/components/project-card"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function Projects() {
    const router = useRouter();
    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row justify-between">
                    <ProjectCard
                        projectTitle="Art Log"
                        image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                        projectDescription="Art Log is a web application I am currently building for the admins 
                        at my local art studio. It is intended to automate tasks for the front-desk workers, 
                        such managing student attendances and payment processes. It features a RBAC system, 
                        automatic announcement calls, search tables on students and classes, and studio-related 
                        statistics."
                    />
                    <Button variant="outline" size="icon" aria-label="Resume" onClick={() => router.push('/projects/art-log')}>
                        <ArrowUpIcon/>
                    </Button>
                </div>
                <div className="flex flex-row justify-between">
                    <ProjectCard
                        projectTitle="MLF"
                        image={["/images/adopting-a-cat-2048px-06052.webp", "cat image"]}
                        projectDescription="Blah blah"
                    />
                    <Button variant="outline" size="icon" aria-label="Resume">
                        <ArrowUpIcon/>
                    </Button>
                </div>
            </div>
        </div>
    )
}