"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

export default function ArtLog() {
    return (
        <div>
            {/* <h1>Art Log (July 2024 - Current)</h1> */}
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src="/images/artlog.png"
                            alt="image of Art Log logo"
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                    <p>Art Log is a web application I am currently building for the admins 
                        at my local art studio. It is intended to automate tasks for the front-desk workers, 
                        such managing student attendances and payment processes. It features a RBAC system, 
                        automatic announcement calls, search tables on students and classes, and studio-related 
                        statistics.</p>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Tech Stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge variant="outline" className="text-sm font-normal">Spring Boot</Badge>
                        <Badge variant="outline" className="text-sm font-normal">React</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Vite</Badge>
                        <Badge variant="outline" className="text-sm font-normal">gTTs4j (TTS API)</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Supabase</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Flyway</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Features</h1>
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