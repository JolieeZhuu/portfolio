"use client"

import { Badge } from "@/components/ui/badge"
import SkillColumn from "@/app/components/skill-column"

export default function Skills() {
    const languages = ['Java', 'Python', 'Typescript', 'Javascript', 'C', 'C++', 'SQL', 'HTML/CSS', 'TailwindCSS']
    const tools = ['Git', 'Docker', 'Drupal', 'WordPress', 'Figma', 'NumPy', 'Pandas', 'Postman']
    const frameworks = ['React', 'Spring Boot', 'Flask', 'Node.js', 'NextJS', 'PyTorch', 'Android']
    return (
        <div className="mx-40">
            <div className="grid grid-cols-3">
                {/* Languages */}
                <SkillColumn
                    skillTitle="Languages"
                    skillSet={languages}
                />

                {/* Tools */}
                <SkillColumn
                    skillTitle="Tools"
                    skillSet={tools}
                />

                {/* Frameworks */}
                <SkillColumn
                    skillTitle="Frameworks"
                    skillSet={frameworks}
                />
            </div>
        </div>
    )
}