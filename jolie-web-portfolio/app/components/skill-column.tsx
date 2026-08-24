"use client"

import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface SkillColumnProps {
    skillTitle: string,
    skillSet: string[],
    colours: string[],
    hoverDescs: string[]
}

export default function SkillColumn({ skillTitle, skillSet, colours, hoverDescs } : SkillColumnProps) {
    return (
        <div>
            <div className="items-center justify-center text-center text-xl font-medium">
                <h1>{skillTitle}</h1>
                <div className="flex flex-col gap-3 pt-5 items-center">
                    {
                        skillSet.map((skill, index) => (
                            <div key={index}>
                                <HoverCard>
                                    <HoverCardTrigger delay={100} closeDelay={200}>
                                        <Badge variant="outline" className={"text-base p-4 rounded-lg border shadow-md font-normal " + colours[index]}>{skill}</Badge>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                        {hoverDescs[index]}
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                            // will change the design for this later
                        ))
                    }
                </div>
            </div>
        </div>
    )
}