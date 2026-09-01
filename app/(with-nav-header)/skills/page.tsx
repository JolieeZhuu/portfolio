"use client"

import { Badge } from "@/components/ui/badge"
import SkillCard from "@/app/components/skill-card"
import { CodeXmlIcon, ToolboxIcon, ScanBoxIcon, ShieldCheckIcon } from "lucide-react"

export default function Skills() {
    const languages = ['java', 'python', 'typescript', 'javascript', 'c', 'c++', 'sql', 'html/css', 'tailwind']
    const tools = ['git', 'docker', 'drupal', 'wordpress', 'figma', 'numpy', 'pandas', 'postman']
    const frameworks = ['react', 'spring boot', 'flask', 'node.js', 'nextjs', 'pytorch', 'android']
    const hoverDescsL = ['Experience in OOP and related frameworks from Art Log and Jeometry Dash']
    const hoverDescsT = ['aaaa']
    const hoverDescsF = ['aaaa']
    return (
        <div className="pt-5">
            <div className="flex flex-col gap-10">
                {/* Languages */}
                <SkillCard
                    skillTitle="languages"
                    skillSet={languages}
                    hoverDescs={hoverDescsL}
                    icon={CodeXmlIcon}
                />

                {/* Tools */}
                <SkillCard
                    skillTitle="tools"
                    skillSet={tools}
                    hoverDescs={hoverDescsT}
                    icon={ToolboxIcon}
                />

                {/* Frameworks */}
                <SkillCard
                    skillTitle="frameworks"
                    skillSet={frameworks}
                    hoverDescs={hoverDescsF}
                    icon={ScanBoxIcon}
                />

                {/* Certifications */}
                <div className="pt-10 space-y-1 text-base">
                    <h1 className="text-2xl font-medium text-[var(--secondary)] flex flex-row gap-2"><ShieldCheckIcon className="size-7"/>certifications</h1>
                    <p>ISC2 CC (Certified in Cybersecurity)</p>
                    <p>DELF B2</p>
                </div>
            </div>
        </div>
    )
}