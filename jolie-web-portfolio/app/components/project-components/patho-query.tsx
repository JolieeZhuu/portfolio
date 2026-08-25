"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image"

export default function PathoQuery() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                    <div className="relative w-50 h-50 overflow-hidden flex-shrink-0">
                        <Image
                            src="/images/PathoQuery.png"
                            alt="image of PathoQuery logo"
                            fill
                            sizes="200px"
                            className="object-cover"
                        />
                    </div>
                    <p>PathoQuery is an AI-powered platform designed to help to general public 
                        visualize the spread of viral diseases and learn about viral behaviour, 
                        built for GenAI Genesis. It utilizes a custom RAG model we designed to 
                        extract medical information from credible sources (i.e. journal articles), 
                        and features stage-to-stage animations of how particular diseases progress 
                        through the human body.</p>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Tech Stack</h1>
                    <div className="flex flex-row gap-3">
                        <Badge variant="outline" className="text-sm font-normal">Flask</Badge>
                        <Badge variant="outline" className="text-sm font-normal">React</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Vite</Badge>
                        <Badge variant="outline" className="text-sm font-normal">IBM watsonx.ai</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Three.js</Badge>
                        <Badge variant="outline" className="text-sm font-normal">Entrez API</Badge>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg font-medium">Features</h1>
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