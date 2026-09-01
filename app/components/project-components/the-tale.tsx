"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon, Circle } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TheTale() {
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
                                        src="/images/TheTale.png"
                                        alt="image of TheTale logo"
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <p>The Tale is a forensics support system for BacsaHacks that takes in information about 
                            the crime and potential suspects of a particular crime scene, and ranks the most 
                            likely suspect. It offers streamlined UI experience, an automatically generated case 
                            report, and additional analysis tools and extrapolated information.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">react</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">vite</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">flask</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">opencv</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    <ul>
                        <li>&bull; OpenCV ORB for feature-matching fingerprints; works with extreme edge cases too.</li>
                        <li>&bull; Needleman-Wunsch dynamic programming algorithm for DNA sequence alignment.</li>
                        <li>&bull; Input handling for users to provide images.</li>
                        <li>&bull; Dashboard that displays statistics on suspect ranking and analytical evidence.</li>
                        <li>&bull; Integrated Gemini API to auto-generate a well-formatted case report.</li>
                        <li>&bull; Clean and intuitive UI/UX design.</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}

            </div>
        </div>
    )
}