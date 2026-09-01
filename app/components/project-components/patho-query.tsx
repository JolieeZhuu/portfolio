"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassesIcon, BookCopyIcon, SparklesIcon, Circle } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PathoQuery() {
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
                                        src="/images/PathoQuery.png"
                                        alt="image of PathoQuery logo"
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <p>PathoQuery is an AI-powered platform designed to help to general public 
                            visualize the spread of viral diseases and learn about viral behaviour, 
                            built for GenAI Genesis. It utilizes a custom RAG model we designed to 
                            extract medical information from credible sources (i.e. journal articles), 
                            and features stage-to-stage animations of how particular diseases progress 
                            through the human body.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><BookCopyIcon/>tech stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">flask</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">react</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">vite</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">ibm watsonx.ai</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">three.js</Badge>
                        <Badge className="text-sm font-normal p-3 rounded-md bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary-accent)] hover:text-[var(--primary)] hover:font-medium">entrez api</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium text-[var(--secondary)] pb-3 flex flex-row gap-2"><SparklesIcon/>features</h1>
                    <ul>
                        <li>&bull; IBM watsonx.ai integration for context-based RAG system to process input.</li>
                        <li>&bull; Interactive 3D visualization of the human body with disease progression.</li>
                        <li>&bull; Hoverable 3D organs with concise disease information.</li>
                        <li>&bull; Robust user interface with intuitive navigation and search functionality.</li>
                    </ul>
                </div>
                {/* <div>
                    <h1 className="text-lg font-medium">Thoughts & Improvements</h1>
                </div> */}

            </div>
        </div>
    )
}