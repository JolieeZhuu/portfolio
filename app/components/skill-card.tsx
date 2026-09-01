"use client"

import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { LucideIcon, LucideProps } from "lucide-react"

interface SkillColumnProps {
    skillTitle: string,
    skillSet: string[],
    hoverDescs: string[],
    icon: LucideIcon
}

export default function SkillCard({ skillTitle, skillSet, hoverDescs, icon: Icon } : SkillColumnProps) {
    return (
        <div>
            <div className="">
                <h1 className="text-2xl font-medium text-[var(--secondary)] flex flex-row gap-2"><Icon className="size-7"/>{skillTitle}</h1>
                <div className="flex flex-row gap-3 flex-wrap pt-3">
                    {
                        skillSet.map((skill, index) => (
                            <div key={index}>
                                <Badge className={"text-base p-4 rounded-lg font-normal bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium"}>
                                    {skill}
                                </Badge>
                                {/* <HoverCard>
                                    <HoverCardTrigger delay={100} closeDelay={200}>
                                        <Badge variant="outline" className={"text-base p-4 rounded-lg border shadow-md font-normal " + colours[index]}>{skill}</Badge>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        {hoverDescs[index]}
                                    </HoverCardContent>
                                </HoverCard> */}
                            </div>
                            // will change the design for this later
                        ))
                    }
                </div>
            </div>
        </div>
    )
}