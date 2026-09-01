"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon, Circle } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function ArtLog() {
    return (
        <div className="text-[var(--foreground)]">
            {/* <h1>Art Log (July 2024 - Current)</h1> */}
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
                                        src="/images/artlog.png"
                                alt="image of Art Log logo"
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <p>Art Log is a web application I am currently building for the front-desk workers 
                            at my local art studio. It is intended to automate tasks for the front-desk workers, 
                            such managing student attendances and payment processes. It features a RBAC system, 
                            automatic announcement calls, search tables, and studio statistics and summaries.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">spring boot</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">react</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">vite</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">gtts4j (tts api)</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">supabase</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">flyway</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    <ul>
                        <li>&bull; Login and signup (email verification and OTP) with secure authenticated routes.</li>
                        <li>&bull; Automated attendance tracking for students (i.e. absent, makeup, attended).</li>
                        <li>&bull; Automated announcement calls using a TTS API when students need to leave.</li>
                        <li>&bull; Searchable student tables (categorized per day of week).</li>
                        <li>&bull; Searchable payment tables (categorized per student), with archived folder.</li>
                        <li>&bull; Navigation sidebar that displays all pages and additional tools.</li>
                        <li>&bull; Form validation for creating, deleting, and editing tables.</li>
                        <li>&bull; Time slot schedule, which displays no. of students in the studio every 15 mins.</li>
                        <li>&bull; UI/UX designed so that admins can use the application in an efficient manner.</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}

            </div>
        </div>
    )
}