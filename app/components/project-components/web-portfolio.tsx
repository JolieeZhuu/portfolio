"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon, Circle } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function WebPortfolio() {
    return (
        <div className="text-[var(--foreground)]">
            <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-lg font-medium pb-3 text-[var(--secondary)] flex flex-row gap-2"><GlassesIcon/>project overview</h1>
                    <div className="flex flex-row gap-10">
                        <div className="relative w-60 overflow-hidden flex-shrink-0">
                            <Card className="bg-[var(--primary)] rounded-md max-w-md">
                                <CardHeader className="flex flex-row gap-2 text-[var(--secondary-accent)]">
                                    <Circle className="size-3"/><Circle className="size-3"/><Circle className="size-3"/>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        src="/images/webportfolio.png"
                                        alt="image of web portfolio logo"
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <p>Well...you're looking at it right now :). Welcome to my web portfolio! 
                            I wanted to make something recognizable, and since I do like minimalistic 
                            aesthetics and grind MonkeyType, I took some inspiration from MonkeyType's 
                            UI and colour schemes. In just about a week, I was able to draft a Figma 
                            design of my web portfolio and develop and deploy it with NextJS and Vercel.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] flex flex-row gap-2 pb-3"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">nextjs</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">vercel</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">typescript</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">tailwind</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    <ul>
                        <li>&bull; Typing animation!</li>
                        <li>&bull; Recents carousel!</li>
                        <li>&bull; Popups to show more project info!</li>
                        <li>&bull; Modularization for code redundancy!</li>
                        <li>&bull; Minimalistic UI!</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                    <p>I learned</p>
                </div> */}

            </div>
        </div>
    )
}