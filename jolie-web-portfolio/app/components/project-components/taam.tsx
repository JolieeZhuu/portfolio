"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon, Circle } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function TAAM() {
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
                                        src="/images/TAAM.png"
                                        alt="image of TAAM logo"
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <p>The TAAM Inventory Management System is a project for course CSCB07, 
                            where our team created an Android application that allows both admins 
                            and users to view artifacts from the museum digitally. It offers several 
                            user interactions (i.e. likes, comments, save-to-collection). This application 
                            relies on clean architecture, software design principles, robust testing, 
                            and clean UI/UX.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">java</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">gradle</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">firebase realtime</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">firebase authentication</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">mockito</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    <ul>
                        <li>&bull; User login and signup with secure authentication.</li>
                        <li>&bull; Admin and general user roles, with separate permissions.</li>
                        <li>&bull; Artifact gallery view, choice of pagination, and choice of filters.</li>
                        <li>&bull; Personal artifact collections that users can save.</li>
                        <li>&bull; Expanded artifact view, where users can interact (i.e. like, save, comment).</li>
                        <li>&bull; Standardized UI and colour scheme, with intuitive UX.</li>
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