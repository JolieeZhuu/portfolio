"use client"

import { Badge } from "@/components/ui/badge"
import SkillColumn from "@/app/components/skill-column"

export default function Skills() {
    const languages = ['Java', 'Python', 'Typescript', 'Javascript', 'C', 'C++', 'SQL', 'HTML/CSS', 'TailwindCSS']
    const colourL = ['bg-[#ED8B00]', 'bg-[#4584B6]', 'bg-[#3178C6]', 'bg-[#F0DB4F]', 'bg-[#BBBBBB]', 'bg-[#00599C] text-[#FFFFFF]', 'bg-[#336791] text-[#FFFFFF]', 'bg-[#F06529]', 'bg-[#38BDF8]']
    const tools = ['Git', 'Docker', 'Drupal', 'WordPress', 'Figma', 'NumPy', 'Pandas', 'Postman']
    const colourT = ['bg-[#6E5494]', 'bg-[#1D63ED]', 'bg-[#009CDE]', 'bg-[#21759B] text-[#FFFFFF]', 'bg-[#f24e1e]', 'bg-[#4DABCF]', 'bg-[#150458] text-[#FFFFFF]', 'bg-[#FF6C37]']
    const frameworks = ['React', 'Spring Boot', 'Flask', 'Node.js', 'NextJS', 'PyTorch', 'Android']
    const colourF = ['bg-[#61DBFB]', 'bg-[#6DB33F]', 'bg-[#80C0C0]', 'bg-[#6CC24A]', 'bg-[#000000] text-[#FFFFFF]', 'bg-[#EE4C2C]', 'bg-[#4FAF53]']
    const hoverDescsL = ['Experience in OOP and related frameworks from Art Log and Jeometry Dash']
    const hoverDescsT = ['aaaa']
    const hoverDescsF = ['aaaa']
    return (
        <div className="mx-40">
            <div className="grid grid-cols-3 gap-20">
                {/* Languages */}
                <SkillColumn
                    skillTitle="Languages"
                    skillSet={languages}
                    colours={colourL}
                    hoverDescs={hoverDescsL}
                />

                {/* Tools */}
                <SkillColumn
                    skillTitle="Tools"
                    skillSet={tools}
                    colours={colourT}
                    hoverDescs={hoverDescsT}
                />

                {/* Frameworks */}
                <SkillColumn
                    skillTitle="Frameworks"
                    skillSet={frameworks}
                    colours={colourF}
                    hoverDescs={hoverDescsF}
                />
            </div>
        </div>
    )
}