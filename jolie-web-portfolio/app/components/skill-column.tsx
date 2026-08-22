"use client"

import { Badge } from "@/components/ui/badge"

interface SkillColumnProps {
    skillTitle: string,
    skillSet: string[],
    colours: string[]
}

export default function SkillColumn({ skillTitle, skillSet, colours } : SkillColumnProps) {
    return (
        <div>
            <div className="items-center justify-center text-center text-xl font-medium">
                <h1>{skillTitle}</h1>
                <div className="flex flex-col gap-3 pt-5 items-center">
                    {
                        skillSet.map((skill, index) => (
                            <Badge variant="outline" className={"text-base p-4 rounded-lg border-none shadow-md font-normal " + colours[index]} key={index}>{skill}</Badge>
                            // will change the design for this later
                        ))
                    }
                </div>
            </div>
        </div>
    )
}