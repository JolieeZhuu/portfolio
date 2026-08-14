"use client"

import { Badge } from "@/components/ui/badge"

interface SkillColumnProps {
    skillTitle: string,
    skillSet: string[]
}

export default function SkillColumn({ skillTitle, skillSet } : SkillColumnProps) {
    return (
        <div>
            <div className="items-center justify-center text-center">
                <h1>{skillTitle}</h1>
                <div className="flex flex-col gap-2 pt-2 items-center">
                    {
                        skillSet.map((skill, index) => (
                            <Badge className="text-base" key={index}>{skill}</Badge>
                            // will change the design for this later
                        ))
                    }
                </div>
            </div>
        </div>
    )
}